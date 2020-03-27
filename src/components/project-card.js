import React from 'react';


export class ProjectCard extends React.Component {

  constructor(props) {
    super(props);

    [...props.types, ...props.languages, ...props.technologies].forEach(name => this.props.toggleActiveButtons(name, false));

  }

  shouldHide() {
    const names = [...this.props.types, ...this.props.languages, ...this.props.technologies];

    const shouldHide = Object.entries(this.props.activeButtons)
      .filter(entry => entry[1] === true)
      .some(entry => !names.includes(entry[0]));

    return shouldHide;
  }

  handleButton = (name) => {
    this.props.toggleActiveButtons(name, !this.props.activeButtons[name]);
  }

  buildButton(name) {
    return (
      <button type="button" className={`btn btn-sm ${this.props.activeButtons[name] ? 'active' : ''}`} onClick={() => this.handleButton(name)}>{name}</button>
    )
  }

  buildButtons(buttonNames) {
    return buttonNames.map((name) => this.buildButton(name))
  }

  buildTypes(typename, buttonNames) {
    return (
      <li class="list-group-item card-tags">
        <div>
          <b>{typename}</b>
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

    if (this.shouldHide())
      return (<div></div>)
    else
      return (
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">
              <span>{this.props.title} </span>
              {this.buildButtons(this.props.types)}
            </h2>
            <div class="card-text">{this.props.description}</div>
          </div>
          <ul class="list-group list-group-flush" >
            {this.buildTypes("Tech: ", this.props.technologies)}
            {this.buildTypes("Lang: ", this.props.languages)}
          </ul>
          <div class="card-body">
            {this.buildLinks(this.props.links)}
          </div>
        </div>
      );
  }

}
