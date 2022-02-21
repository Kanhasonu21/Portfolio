import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
// import Particle from '../Particle';

import weather from '../../Assets/weather.png';
import whatsappchat from '../../Assets/whatsappchat.png';
import porfolio from '../../Assets/portfolio.png';

import chatify from '../../Assets/Projects/chatify.png';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={whatsappchat}
              isBlog={false}
              title='WhatsApp Chat'
              description='You can send messages to anyone  without saving the number on phone. It is a progressive web application (PWA) build with react'
              link='https://unknownwhatsapp.netlify.app/'
              projectLink='https://github.com/Kanhasonu21/Whatsapp-Chat'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title='Weather'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
              link='https://kanhasonu21.github.io/'
              projectLink='https://github.com/Kanhasonu21/pwa-react/'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={porfolio}
              isBlog={false}
              title='Portfolio'
              description='This is repository for Data Structure and Algorithm.
               This repo contains all important data structure topics like Array, Linked List, Tree, Recursion etc.
               '
              projectLink='https://github.com/Kanhasonu21/Portfolio'
              link='https://kanhaiya-kumar.herokuapp.com/'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuWbPApIZgU6kGrEAjV92aOtRKJ_RphDwIw&usqp=CAU'
              }
              isBlog={false}
              title='Data Structure and Algorithm'
              description='This is repository for Data Structure and Algorithm. This repo contains all important data structure topics like Array, Linked List, Tree, Recursion etc.'
              projectLink='https://github.com/Kanhasonu21/DS-Algo'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
