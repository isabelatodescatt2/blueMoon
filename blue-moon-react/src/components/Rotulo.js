import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Rotulo({rotulo}) {
  return (
    <Container fluid>
      <Row>
        <Col className='px-0'>
            <h1 className='rotulo'>{ rotulo }</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default Rotulo