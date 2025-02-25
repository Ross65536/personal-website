import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import './projects.scss';

import Anchor, { ICONS } from '../components/anchor.js';
import { ProjectCard } from '../components/project-card.js';

class IndexPage extends React.Component {
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
      <Layout>
        <SEO title="Projects" />

        <h2>Projects</h2>
        <p>
          Here you can see some of the projects I have done in my spare time and as well as for school and work.
          You can click on the card tags to filter.
        </p>

        <div>
          <h3>Personal Projects</h3>
          <p>Here you can see my personal projects that I have done on my own time.</p>

          <div class="card-columns">

            <ProjectCard
              title="RMixer"
              description={
                <div>Android app for mixing music. Can generate basic sounds like, sinewaves, mix multiple tracks and export music</div>
              }
              types={['Mobile', 'Big']}
              dates={['2018']}
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
              types={['Mobile', 'Game', 'Big']}
              dates={['2017']}
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
              types={['CLI', 'Small']}
              dates={['2018', '2019']}
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
              types={['Web', 'Medium']}
              dates={['2018']}
              technologies={['Django', 'HTML', 'CSS', 'Docker']}
              languages={['Python', 'Javascript']}
              links={[
                <Anchor name="Source" url='https://github.com/Ross65536/PersonalBlog' icon={ICONS.github} />
              ]}
              activeButtons={this.state.activeButtons}
              toggleActiveButtons={this.toggleActiveButtons}
            />

            <ProjectCard
              title="Brainfuck Interpreter"
              description={
                <div>An interpreter for the brainfuck esoteric language. Tested using a few sample source files and compared with expected outputs. Written in Rust</div>
              }
              types={['Systems', 'Small']}
              dates={['2019']}
              languages={['Rust']}
              links={[
                <Anchor name="Source" url='https://github.com/Ross65536/rbf' icon={ICONS.github} />,
                <Anchor name="Brainfuck" url='https://en.wikipedia.org/wiki/Brainfuck' icon={ICONS.wikipedia} />
              ]}
              activeButtons={this.state.activeButtons}
              toggleActiveButtons={this.toggleActiveButtons}
            />

            <ProjectCard
              title="Giphy Frontend"
              description={
                <div>An SPA front-end for Giphy, a GIF search engine, written in ReactJS. Features gif search and bookmarking using browser local-storage.</div>
              }
              types={['Web', 'Small']}
              dates={['2018']}
              technologies={['HTML', 'CSS', 'ReactJS']}
              languages={['Javascript']}
              links={[
                <Anchor name="Source" url='https://github.com/Ross65536/Giphy-React' icon={ICONS.github} />,
                <Anchor name="Website" url='https://ross65536.github.io/Giphy-React/' icon={ICONS.none} />
              ]}
              activeButtons={this.state.activeButtons}
              toggleActiveButtons={this.toggleActiveButtons}
            />

          </div>

          <div class="mt-5">
            <h3>Work Projects</h3>
            <p>Here you can see my work and internships projects. Some are internal and therefore the source code isn't available.</p>

            <div class="card-columns">
              <ProjectCard
                title="Linux Real-Time Schedulers"
                description={
                  <div>An extension to the Linux kernel with real-time process schedulers meant to be run on a Raspberry Pi. Implemented as part of an internsip at CISTER. Complemented by test userland programs running a sensor+actuator system developed by my internship colleague.</div>
                }
                types={['CISTER', 'Systems', 'Big']}
                dates={['2017']}
                technologies={['Linux']}
                languages={['C']}
                links={[
                  <Anchor name="Source" url='https://github.com/Ross65536/linux_rPI_4_9' icon={ICONS.github} />,
                  <Anchor name="CISTER website" url='http://www.cister.isep.ipp.pt/' icon={ICONS.none} />
                ]}
                activeButtons={this.state.activeButtons}
                toggleActiveButtons={this.toggleActiveButtons}
              />

              <ProjectCard
                title="Invisible Collector API clients"
                description={
                  <div>HTTP+JSON Clients developed for the API services provided by InvisibleCLoud for managing debt collection. Clients were developed in Java, C# and Go, each of which was thoroughly tested and validated through CI. Developed as part of internship and mantained as part of subsequent work.</div>
                }
                types={['InvisibleCloud', 'Big']}
                dates={['2018', '2019']}
                technologies={['CI']}
                languages={['C#', 'Java', 'Go']}
                links={[
                  <Anchor name="C# client" url='https://github.com/invisiblecloud/InvisibleCollectorLib' icon={ICONS.github} />,
                  <Anchor name="Java client" url='https://github.com/invisiblecloud/invisible-collector-java' icon={ICONS.github} />,
                  <Anchor name="Go client" url='https://github.com/invisiblecloud/invisible-collector-go' icon={ICONS.github} />,
                  <Anchor name="API docs" url='https://portal.invisiblecollector.com/docs/api/' icon={ICONS.none} />,
                ]}
                activeButtons={this.state.activeButtons}
                toggleActiveButtons={this.toggleActiveButtons}
              />

              <ProjectCard
                title="Invisible Collector Settler"
                description={
                  <div>A web-page for communication between debtor and debtee. Developed a new RESTfull API backend, built on Dropwizard, and migrated and updated the old frontend design to a new SPA fontend built on Vue, customized for each company, and migrated to use the new API.</div>
                }
                types={['InvisibleCloud', 'Big', 'Web']}
                dates={['2019']}
                technologies={['VueJS', 'Dropwizard', 'HTML', 'CSS', 'JWT']}
                languages={['Javascript', 'Java']}
                links={[
                  <Anchor name="Company page" url='https://www.invisiblecollector.com/' icon={ICONS.none} />,
                ]}
                activeButtons={this.state.activeButtons}
                toggleActiveButtons={this.toggleActiveButtons}
              />

            </div>
          </div>

          <div class="mt-5">
            <h3>School Projects</h3>
            <p>Here you can see my school (FEUP) and MOOC projects. The MOOC and their projects I have done on my own and not as part of my degree.</p>

            <div class="card-columns">
              <ProjectCard
                title="Crypto I"
                description={
                  <div>A MOOC about applied cryptography by Dan Boneh. Learned about the workings of hashing and public and symmetric encryption.</div>
                }
                types={['MOOC', 'Systems', 'Big']}
                dates={['2019']}
                languages={['Python']}
                links={[
                  <Anchor name="Course Projects" url='https://github.com/Ross65536/Crypto-I' icon={ICONS.github} />,
                  <Anchor name="Course page" url='https://www.coursera.org/learn/crypto/' icon={ICONS.none} />
                ]}
                activeButtons={this.state.activeButtons}
                toggleActiveButtons={this.toggleActiveButtons}
              />

              <ProjectCard
                title="PintOS (WIP)"
                description={
                  <div>A MOOC about OS, with a big project involving implementing various OS features, such as schedulers, userlang syscalls, virtual memory, etc.</div>
                }
                types={['MOOC', 'Systems', 'Big']}
                dates={['2020']}
                languages={['C']}
                links={[
                  <Anchor name="Course Project" url='https://github.com/Ross65536/PintOS' icon={ICONS.github} />,
                  <Anchor name="Course page" url='https://cs.jhu.edu/~huang/cs318/fall19/index.html' icon={ICONS.none} />
                ]}
                activeButtons={this.state.activeButtons}
                toggleActiveButtons={this.toggleActiveButtons}
              />

              <ProjectCard
                title="RJTorcher"
                description={
                  <div>An android procedural platforming game. Developed as part of FEUP's LPOO class. Features unit-testing. Developed along with my project colleague.</div>
                }
                types={['Mobile', 'Game', 'FEUP', 'Big']}
                dates={['2017']}
                technologies={['libgdx', 'Android']}
                languages={['Java']}
                links={[
                  <Anchor name="Source" url='https://github.com/Ross65536/FEUP-LPOO' icon={ICONS.github} />,
                  <Anchor name="App" url='https://play.google.com/store/apps/details?id=ros.joao.rjtorcher' icon={ICONS.android_store} />
                ]}
                activeButtons={this.state.activeButtons}
                toggleActiveButtons={this.toggleActiveButtons}
              />
            </div>

          </div>

        </div>
      </Layout>
    )
  }
}

export default IndexPage;
