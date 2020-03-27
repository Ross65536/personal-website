import React from 'react';

import './projects.scss';

import {ProjectCard} from '../components/project-card.js';
import Anchor, { ICONS } from '../components/anchor.js';

export default function Project() {
  return (
    <div>
      <h2>Projects</h2>

        Here you can see some of the projects I have done.

        <div class="card-columns">

          <ProjectCard 
            title="RMixer" 
            description= {
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
          />

          <ProjectCard 
            title="Kivy Ballistics" 
            description= {
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
          />
          {/* <ProjectCard title="card" description="desc"/>
          <ProjectCard title="card" description="desc"/>
          <ProjectCard title="card" description="desc"/>
          <ProjectCard title="card" description="desc"/>
          <ProjectCard title="card" description="desc"/>
          <ProjectCard title="card" description="desc"/> */}

        </div>

    </div>
  );
}
