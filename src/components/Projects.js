import React from 'react';
import basicGameImage from './Basic_Game.jpg';
import robotPicture from './Robot.jpg';
import { Container, Card, Row, Col } from 'react-bootstrap';
import styles from './Projects.module.css';

const Projects = () => {
  const myProjects = [
    {
      title: "Simple Game based on Unity + C#",
      description: "Arcade of racing on car in 3d pixel world. It was a school project.",
      imageUrl: basicGameImage,
    },
    {
      title: "Programming of robot",
      description: "Programming of robot that goes on a line. It supposed to be on a line and also avoid the objects on a line.",
      imageUrl: robotPicture,
    },
  ];

  return (
    <Container>
      <h2 className={styles.projectsTitle}>My Projects</h2>
      <Row>
        {myProjects.map((project, index) => (
          <Col sm={12} md={6} lg={4} className="mb-4" key={index}>
            <Card className={styles.projectCard}>
              <Card.Img variant="top" src={project.imageUrl} className={styles.projectImg} />
              <Card.Body>
                <Card.Title className={styles.projectTitle}>{project.title}</Card.Title>
                <Card.Text className={styles.description}>
                  {project.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
