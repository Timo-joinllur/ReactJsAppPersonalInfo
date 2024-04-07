import React from 'react';
import timofeiBeresnevImage from './Timofei_Beresnev.jpg';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from './PersonalInfo.module.css'; // Import the CSS module

const PersonalInfo = () => {
  return (
    <Container className={`mt-5 ${styles.containerCustom}`}>
      <h2 className={styles.mpiTitle}>My Personal Info</h2>
      <Row className="align-items-center">
        <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
          <Image src={timofeiBeresnevImage} roundedCircle fluid className={styles.imageCustom} />
        </Col>
        <Col xs={12} md={8} className={styles.listGroupItemCustom}>
          <h2 className={styles.titleCustom}>Timofei Beresnev</h2>
          <p className={styles.textCustom}>Junior Game Developer</p>
          <p className={styles.textCustom}>Email: timo270904@gmail.com</p>
          <p className={styles.textCustom}>Phone: +358 40 529 1587</p>
        </Col>
      </Row>
    </Container>
  );
}

export default PersonalInfo;
