import React from 'react';


export const ICONS = {
  github: <i class="fab fa-github"/>,
  linkedin: <i class="fab fa-linkedin"/>,
  email: <i class="fas fa-envelope"/>,
  android_store: <i class="fab fa-google-play"/>
};


export default class Anchor extends React.Component {

  render() {
    return (
      <a href={this.props.url}>{this.props.icon} {this.props.name} </a>
    );

  }
}

