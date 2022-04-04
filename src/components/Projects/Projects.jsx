import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
// import Particle from '../Particle';

import weather from '../../Assets/weather.png';
import whatsappchat from '../../Assets/whatsappchat.png';
import porfolio from '../../Assets/portfolio.png';

// import Particles from '../Particle';

function Projects() {
  return (
    <Container fluid className='project-section'>
      {/* <Particles /> */}
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row>
          <Col md={12} className='project-card'>
            <ProjectCard
              imgPath={whatsappchat}
              isBlog={false}
              title='WhatsApp Chat'
              description='You can send messages to anyone  without saving the number on phone. It is a progressive web application (PWA) build with react'
              link='https://unknownwhatsapp.netlify.app/'
              projectLink='https://github.com/Kanhasonu21/Whatsapp-Chat'
              techStack={['React', 'Redux', 'JavaScript', 'HTML5', 'CSS3']}
            />
          </Col>
          <Col md={12} className='project-card'>
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title='Weather'
              description='Get the weather report of your area by entering your location and it will give the temprature result. This app is built with React and Open Weather API.'
              link='https://kanhasonu21.github.io/'
              projectLink='https://github.com/Kanhasonu21/pwa-react/'
              techStack={['React', 'Redux', 'JavaScript', 'HTML5', 'CSS3']}
            />
          </Col>
          <Col md={12} className='project-card'>
            <ProjectCard
              imgPath={porfolio}
              isBlog={false}
              title='Portfolio'
              description='This repository contains the link for this portfolio website. This website is built with React, Bootstrap, Jetkins, GithHub API with mobile first approach.'
              projectLink='https://github.com/Kanhasonu21/Portfolio'
              link='https://kanhaiya-kumar.herokuapp.com/'
              techStack={['React', 'Redux', 'JavaScript', 'HTML5', 'CSS3']}
            />
          </Col>
          <Col md={12} className='project-card'>
            <ProjectCard
              imgPath={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuWbPApIZgU6kGrEAjV92aOtRKJ_RphDwIw&usqp=CAU'
              }
              isBlog={false}
              title='Data Structure and Algorithm'
              description='This is repository for Data Structure and Algorithm. This repo contains all important data structure topics like Array, Linked List, Tree, Recursion etc.'
              projectLink='https://github.com/Kanhasonu21/DS-Algo'
              techStack={['JavaScript', 'Python']}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
