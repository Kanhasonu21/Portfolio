import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className='purple'>Kanhaiya Kumar </span>
            from <span className='purple'> Munger, India.</span>
            <br />A 24 year old <span className='purple'> Web Developer </span>
            working as a Software Engineer at
            <span className='purple'> RWS Moravia.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Reading Books
            </li>
            <li className='about-activity'>
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className='about-activity'>
              <ImPointRight /> Travelling
            </li>
            <li className='about-activity'>
              <ImPointRight /> Watching TV Series
            </li>
          </ul>
          <p style={{ marginBlockEnd: 0, color: 'rgb(155 126 172)' }}>
            "People work better when they know what the goal is and why. It is
            important that people look forward to coming to work in the morning
            and enjoy working."
          </p>
          <i>-Elon Musk</i>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
