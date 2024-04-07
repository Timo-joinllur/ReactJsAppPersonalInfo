import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import styles from './EducationalBackground.module.css'; // Убедитесь, что путь до файла верный

const EducationalBackground = () => {
  return (
    <div>
      <Container className={styles.educationContainer}>
        <h2 className={styles.educationTitle}>My Education</h2>
        <ListGroup className={styles.listGroupCustom}>
          <ListGroup.Item className={styles.listGroupItemCustom}>
            <h5>Academic Gymnasiym №56</h5>
            <p>Informatic degree - 2022</p>
            <p>This degree has a profile in algebra, geometry, ICT, physics, Russian language, English language. Mainly, I have grades 4, but algebra and ICT have grade 5.</p>
          </ListGroup.Item>
          <ListGroup.Item className={styles.listGroupItemCustom}>
            <h5>Hameenlinan University of Applied Sciences</h5>
            <p>Computer Application - 2025</p>
            <p>Learning basic languages of programming. Upgrading skills in team building.</p>
          </ListGroup.Item>
        </ListGroup>
        <a href="https://school56.org/" className={`btn ${styles.institutionLink}`} role="button">Academic Gymnasym №56</a>
        <br></br>
        <a href="https://www.hamk.fi/en/" className={`btn ${styles.institutionLink}`} role="button">Hameenlinan University of Applied Sciences</a>
      </Container>
    </div>
  );
};

export default EducationalBackground;
