import React from 'react';

import './projects.scss';

import { ProjectCard } from '../components/project-card.js';
import Anchor, { ICONS } from '../components/anchor.js';
import $ from 'jquery';


export default class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {activeButtons: {}};
    this.toggleActiveButtons = this.toggleActiveButtons.bind(this);
  }

  toggleActiveButtons(name, value) {
    const newMap = { ...this.state.activeButtons };
    newMap[name] = value;
    this.setState(_ => ({activeButtons: newMap}));

  }

  render() {
    return (
      <div>
        <h2>Projects</h2>

        Here you can see some of the projects I have done.

        <div class="card-columns">

          <ProjectCard
            title="RMixer"
            description={
              <div>Android app for mixing music. Can generate basic sounds like, sinewaves, mix multiple tracks and export music</div>
            }
            types={['Hobby', 'App']}
            technologies={['Xamarin', 'Android']}
            languages={['C#']}
            links={
              [
                <Anchor name="Source" url='https://github.com/Ross65536/MobileSoundMixer' icon={ICONS.github} />,
                <Anchor name="App" url='https://play.google.com/store/apps/details?id=com.Ros.Sound_Mixer&hl=en' icon={ICONS.android_store} />
              ]
            }
            activeButtons={this.state.activeButtons}
            toggleActiveButtons={this.toggleActiveButtons}
          />

          <ProjectCard
            title="Kivy Ballistics"
            description={
              <div>Android game. The player controls a turret stuck on a planet and tries to destroy other planets. Features realistic in-house space ballistics physics.</div>
            }
            types={['Hobby', 'App']}
            technologies={['Kivy', 'Android']}
            languages={['Python']}
            links={
              [
                <Anchor name="Source" url='https://github.com/Ross65536/kivy-ballistics' icon={ICONS.github} />
              ]
            }
            activeButtons={this.state.activeButtons}
            toggleActiveButtons={this.toggleActiveButtons}
            />

        </div>

      </div>
    );
  }
}

const ACTIVE_BUTTON_CLASSNAME = "active";
const CARD_DISPLAY_VALUE = "inline-block";

class TagManager {
  constructor() {
    this._activeTags = [];
  }

  toggleActiveTag(tagName) {
    const index = this._activeTags.indexOf(tagName);
    if (index >= 0) {
      this._activeTags.splice(index, 1);
    }
    else {
      this._activeTags.push(tagName);
    }
  }

  get tags() {
    return this._activeTags;
  }

  get isEmpty() {
    return this._activeTags.length == 0;
  }

  get length() {
    return this._activeTags.length;
  }

  containsTag(tagName) {
    const index = this._activeTags.indexOf(tagName);
    return index >= 0;
  }
}



const buttons = $('.card button');
const tagManager = new TagManager();

function toggleCards() {
  const cards = $('.card');

  if (tagManager.isEmpty) {
    cards.each((index, card) => {
      card.style.display = CARD_DISPLAY_VALUE;
    });

    buttons.each((index, button) => {
      button.classList.remove(ACTIVE_BUTTON_CLASSNAME);
    });
  }
  else
    cards.each((index, card) => {
      const buttons = card.getElementsByTagName('button');
      let activeCount = 0;
      for (const button of buttons) {
        const tagName = button.innerHTML;
        if (tagManager.containsTag(tagName)) {
          activeCount += 1;
          button.classList.add(ACTIVE_BUTTON_CLASSNAME);
        }
        else {
          button.classList.remove(ACTIVE_BUTTON_CLASSNAME);
        }
      }
      if (tagManager.length != activeCount)
        card.style.display = "none";
      else
        card.style.display = CARD_DISPLAY_VALUE;
    });
}


buttons.click((eventObject) => {
  const button = eventObject.currentTarget;
  const buttonText = button.innerHTML;

  tagManager.toggleActiveTag(buttonText);
  console.log(tagManager.tags);
  toggleCards();

})
