import React from 'react';


export const ICONS = {
  none: <i class="fas fa-link"></i>,
  github: <i class="fab fa-github"/>,
  linkedin: <i class="fab fa-linkedin"/>,
  email: <i class="fas fa-envelope"/>,
  android_store: <i class="fab fa-google-play"/>,
  wikipedia: <i class="fab fa-wikipedia-w"/>,
};


export default class Anchor extends React.Component {

  render() {
    return (
      <a key={this.props.url} href={this.props.url}>{this.props.icon} {this.props.name} </a>
    );

  }
}

