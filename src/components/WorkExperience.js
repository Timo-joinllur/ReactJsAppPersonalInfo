import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import styles from './WorkExperience.module.css';

const WorkExperience = () => {
  const myWorkExperience = [
    {
      position: "Game Developer",
      company: "GeekBrains",
      duration: "03.2021 - 08.2022",
      description: "At GeekBrains, I designed and programmed engaging video games, collaborating closely with artists and designers to bring creative visions to life. I honed my skills in Unity and C#, and played a key role in debugging and optimizing game performance for release. My contributions helped launch several successful games, enhancing my expertise in game development and teamwork."
    },
  ];

  return (
    <Container className={styles.experienceContainer}>
      <h2 className={styles.experienceTitle}>Work Experience</h2>
      <ListGroup>
        {myWorkExperience.map((job, index) => (
          <ListGroup.Item className={styles.listGroupItemCustom} key={index}>
            <h5 className={styles.positionTitle}>{job.position} at <span className={styles.companyName}>{job.company}</span></h5>
            <p>{job.duration}</p>
            <p className={styles.descriptionText}>{job.description}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default WorkExperience;
