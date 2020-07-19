---
slug: "/blog/1-uma"
date: "2020-07-19"
title: "On using UMA for protecting HTTP APIs"
---

I've been using [UMA 2.0](https://kantarainitiative.org/confluence/display/uma/Home) as a way to protect a healthcare-based HTTP API where it solves the main issue I had with OAuth: the resource owner and the user of the resource are 2 separate entities. 

UMA, like OAuth, can simplify some of the protection work since a lot of the token management and lifecycle gets outsourced to a third party server but it has some drawbacks which need to be considered.

## UMA 2.0

UMA defines 2 main components which interact together: the authorization sercer ([Keycloak](https://www.keycloak.org/) in my case) which handles all of the token management and lifecycle and the resource server, which is the backend that requires protection.

The resource server communicates with the authorization server to emit tokens, validate them, create corresponding resources, etc.

### UMA flow

From the perspective of the user accessing a resource the following flow needs to be followed:

1. The user makes a request for the resource without using any tokens. The resource server must return a permission ticket which corresponds to the resources being requested, the resource server must communicate with the 
2. 


## Protecting an API

