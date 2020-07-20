---
slug: "/blog/1-uma"
date: "2020-07-20"
title: "On using UMA for protecting HTTP APIs"
---

I've been using [UMA 2.0](https://kantarainitiative.org/confluence/display/uma/Home) as a way to protect a healthcare-based HTTP API where it solves the main issue I had with OAuth: **the resource owner and the user of the resource are 2 separate entities**. 
UMA also defines the concept of UMA resources which simplifies the permissions management of individual resources with access levels (UMA scopes).

The main reason to use UMA, like OAuth, is to simplify some of the access control work since a lot of the token management and lifecycle gets outsourced to a third party server but it has some drawbacks which need to be considered.

## UMA 2.0

UMA defines 2 main components which interact together: the authorization server ([Keycloak](https://www.keycloak.org/) in my case) which handles all of the token management and lifecycle and the resource server, which is the backend that requires protection.

The resource server communicates with the authorization server to emit tokens, validate them, create corresponding resources, etc.

#### UMA flow

From the perspective of the user accessing a resource the following flow needs to be followed:

```
requesting                        authorization resource resource
  party   client                      server     server    owner
    |        |                           |          |         |
    |        |                           |Set policy|         |
    |        |                           |conditions (anytime)|
    |        |                           |<- - - - - - - - - -|
    |        |Resource request (no access token)    |         |
    |        |--- (1) ----------------------------->|         |
    |        |                           |Request permissions |
    |        |                           |<-- (2) --|         |
    |        |                           |Permissions ticket  |
    |        |                           |--- (2) ->|         |
    |        |401 response with: new permission     |         |
    |        |ticket, AS location        |          |         |
    |        |<-- (3) ------------------------------|         |
    |        |Authz request with ticket, |          |         |
    |        |claim token (push claims)  |          |         |
    |        |--- (4) ------------------>|          |         |
    |        |                      +----|Authz     |         |
    |        |                      +--->|assessment|         |
    |        |Authz response with access |          |         |
    |        |token (RPT) and PCT        |          |         |
    |        |<-- (4) -------------------|          |         |
    |        |Resource request with access token    |         |
    |        |(RPT)                      |          |         |
    |        |--- (5) ----------------------------->|         |
    |        |                           |Introspect RPT token|
    |        |                           |<-- (5) --|         |
    |        |                           |Token metadata      |
    |        |                           |--- (5) ->|         |
    |        |Protected resource         |          |         |
    |        |<-- (5) ------------------------------|         |
```

a. Steps 1-3. The user makes a request for the resource without using any tokens. The resource server must return a permission ticket which corresponds to the resources being requested. The resource server communicates with the authorization server to emit this ticket.

b. Step 4. The user exchanges with the authorization server the permission ticket from the previous step and a login token (which can be an OpenID Connect token) for an RPT token. In this step the authorization server checks the permissions that are set for the user.

c. Step 5. The user makes the same request as from step 1 including the RPT token and obtains the resources. The resource server must introspect the RPT token to obtain the permissions, either by decoding the it as a JWS token (is supported by the authorization server) or by introspecting it.


#### Drawbacks

As can be seen in the user's flow, a full request flow will make 2 requests to the resource server: once to obtain the permissions ticket and again to actually obtain the resource. This performance degradation can be prohibitive when the resource server endpoint must consider a lot of resources (such as in a search endpoint). Whis double request can be mitigated either by reusing the RPT token or, in the case of Keycloak, by pre-emptively requesting and RPT token with all of the user's permissions set.

There are also additional requests that the user and resource server need to make with the authorization server in order to emit a permissions ticket and obtain an RPT token.