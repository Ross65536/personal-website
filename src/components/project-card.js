import React from 'react';

export class ProjectCard extends React.Component {

  buildButton(name) {
    return <button type="button" class="btn btn-sm" >{ name }</button>
  }

  buildButtons(buttonNames) {
    return buttonNames.map((name) => this.buildButton(name))
  }

  buildTypes(typename, buttonNames) {
    return ( 
      <li class="list-group-item card-tags">
          <div>
              <b>{ typename }</b>
          </div>
          <div>
            {this.buildButtons(buttonNames)}
          </div>
      </li>
    )
  }

  buildLinks(links) {
    return links.map((link) => <span>{link}</span>)
  }

  render() {

    return (
      <div class="card">
        <div class="card-body">
            <h2 class="card-title">
              <span>{ this.props.title } </span>
              { this.buildButtons(this.props.types) }
            </h2>
            <p class="card-text">{ this.props.description }</p>
        </div>
        <ul class="list-group list-group-flush" >
            { this.buildTypes("Tech: ", this.props.technologies)}
            { this.buildTypes("Lang: ", this.props.languages)}
        </ul>
        <div class="card-body">
            { this.buildLinks(this.props.links) }
        </div>
    </div>
    );

  }
}

