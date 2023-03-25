import React from 'react';
import { Link } from 'react-router-dom';

class AboutPage extends React.Component {
  render(): React.ReactNode {
    return (
      <section className="about">
        <p className="about-header">
          RS School is free-of-charge and community-based education program conducted by{' '}
          <Link to={'https://rollingscopes.com/'} target="_blank" className="about-link">
            The Rolling Scopes
          </Link>{' '}
          developer community since 2013.
        </p>
        <p className="about-text">
          Everyone can study at RS School, regardless of age, professional employment, or place of
          residence.
        </p>
        <p className="about-text">
          The mentors and trainers of our school are front-end and javascript developers from
          different companies and countries.
        </p>
        <div className="about-principles">
          <h2 className="about-header right">OUR PRINCIPLES</h2>
          <h3 className="about-subheader">Open Source Philosophy</h3>
          <p className="about-text subtext">
            Our platform and education materials are publicly available on{' '}
            <Link
              to={'https://github.com/rolling-scopes-school'}
              target="_blank"
              className="about-link"
            >
              GitHub
            </Link>{' '}
            and{' '}
            <Link
              to={'https://www.youtube.com/c/RollingScopesSchool'}
              target="_blank"
              className="about-link"
            >
              YouTube
            </Link>{' '}
            .
          </p>
          <h3 className="about-subheader">“Teach It Forward”</h3>
          <p className="about-text subtext">
            According to this principle, students study at school for free, but we request that they
            return as mentors to pass on their knowledge to the next generation of students.
          </p>
        </div>
      </section>
    );
  }
}

export default AboutPage;
