import React from 'react';

import './projects.scss';

import { ProjectCard } from '../components/project-card.js';
import Anchor, { ICONS } from '../components/anchor.js';


export default class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeButtons: {} };
    this.toggleActiveButtons = this.toggleActiveButtons.bind(this);
  }

  toggleActiveButtons(name, value) {
    const newMap = { ...this.state.activeButtons };
    newMap[name] = value;
    this.setState(_ => ({ activeButtons: newMap }));

  }

  render() {
    return (
      <div>
        <h2>Projects</h2>

        Here you can see some of the projects I have done in my spare time and as well as for school and work.

        You can click on the card tags to filter.

        <div class="card-columns">

          <ProjectCard
            title="RMixer"
            description={
              <div>Android app for mixing music. Can generate basic sounds like, sinewaves, mix multiple tracks and export music</div>
            }
            types={['Hobby', 'App']}
            technologies={['Xamarin', 'Android']}
            languages={['C#']}
            links={[
              <Anchor name="Source" url='https://github.com/Ross65536/MobileSoundMixer' icon={ICONS.github} />,
              <Anchor name="App" url='https://play.google.com/store/apps/details?id=com.Ros.Sound_Mixer&hl=en' icon={ICONS.android_store} />
            ]}
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
            links={[
              <Anchor name="Source" url='https://github.com/Ross65536/kivy-ballistics' icon={ICONS.github} />
            ]}
            activeButtons={this.state.activeButtons}
            toggleActiveButtons={this.toggleActiveButtons}
          />

          <ProjectCard
            title="Convay's Game of Life"
            description={
              <div>A Conway game of life implementation in the CLI using rust. Features CI and full unit testing. </div>
            }
            types={['Hobby', 'CLI']}
            languages={['Rust']}
            links={[
              <Anchor name="Source" url='https://github.com/Ross65536/conway-game-of-life-rs' icon={ICONS.github} />
            ]}
            activeButtons={this.state.activeButtons}
            toggleActiveButtons={this.toggleActiveButtons}
          />

          <ProjectCard
            title="Personal Website (Old)"
            description={
              <div>A personal website written in Django with a full backend. Features a custom design, on which this website is based.</div>
            }
            types={['Hobby', 'Web']}
            technologies={['Django', 'HTML', 'CSS']}
            languages={['Python', 'Javascript']}
            links={[
              <Anchor name="Source" url='https://github.com/Ross65536/PersonalBlog' icon={ICONS.github} />
            ]}
            activeButtons={this.state.activeButtons}
            toggleActiveButtons={this.toggleActiveButtons}
          />


          <ProjectCard
            title="Linux Real-Time"
            description={
              <div>An extension to the Linux kernel with real-time process schedulers meant to be run on a Raspberry Pi. Implemented as part of an internsip at CISTER.</div>
            }
            types={['Internship', 'CISTER']}
            technologies={['Linux']}
            languages={['C']}
            links={[
              <Anchor name="Source" url='https://github.com/Ross65536/linux_rPI_4_9' icon={ICONS.github} />
            ]}
            activeButtons={this.state.activeButtons}
            toggleActiveButtons={this.toggleActiveButtons}
          />

          <ProjectCard
            title="Brainfuck Interpreter"
            description={
              <div>An interpreter for the brainfuck esoteric language. Tested using a few sample source files and compared with expected outputs. Written in Rust</div>
            }
            types={['Hobby']}
            languages={['Rust']}
            links={[
              <Anchor name="Source" url='https://github.com/Ross65536/rbf' icon={ICONS.github} />,
              <Anchor name="Brainfuck" url='https://en.wikipedia.org/wiki/Brainfuck' icon={ICONS.wikipedia} />
            ]}
            activeButtons={this.state.activeButtons}
            toggleActiveButtons={this.toggleActiveButtons}
          />

        </div>

      </div>
    );
  }
}
