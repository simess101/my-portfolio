import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
        I’ve always been fascinated by how things work—whether it was dismantling old electronics
        as a kid or brainstorming climbing routes that challenge both body and mind. When I first
        dipped my toes into coding, I realized I could apply the same curiosity to the digital
        world: unraveling complex backends, scripting responsive frontends, experimenting with
        AI-driven models, and building games that spark delight.
      </p>
      <p>
        During my time at Virginia Commonwealth University, I’ve tackled a range of projects—from
        creating a Notion-like text editor in C to developing dynamic Magic: The Gathering card
        databases with PHP. But behind every line of code, there’s a personal philosophy: good
        technology should feel natural, serve people’s needs, and bring communities together. That’s
        why I value empathy, humility, and collaboration—whether I’m guiding my climbing club’s
        competitive team, contributing to open-source code, or refining my latest machine learning
        model.
      </p>
    </section>
  );
};

export default About;
