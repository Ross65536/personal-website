import React from 'react';
import './App.scss';

const NAME = "Rostyslav Khoptiy"
const PROFESSION = "Software Engineer"

function App() {
  return (
    <div className="App">
      <header id="header">
            <h1 id="name">
                <a href="#"> {NAME} </a>
            </h1>
            <h3 id="profession">
                 {PROFESSION}
            </h3>
            <nav id="top-bar">
                <ul>
                    <li><a href="{% url 'projects' %}">Projects</a></li>
                    <li><a href="{% url 'resume' %}">Resume</a></li>
                    <li><a href="{% url 'about' %}">About</a></li>
                </ul>
            </nav>
        </header>
        <div id="page-content">
            BODY PAGE
        </div>
        <footer id="footer">
            <ul>
                {/* {% for link in person.footer_links.all %}
                    <li><a href="{{ link.link }}">{% include 'personalPages/components/anchor-icon.html' with ref=link.link %}</i> {{ link.name }}</a></li>
                {% endfor %}
                {% if person.email %}
                    <li><a href="mailto:{{ person.email.link }}">{% include 'personalPages/components/anchor-icon.html' with ref=person.email.link %} {{ person.email.name }}</a></li>
                {% endif %} */}
            </ul>
        </footer>

    </div>
  );
}

export default App;
