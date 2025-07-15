import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Delivery(props) {
  return (
    <Container className='delivery'>
        <Row>
          <Col lg='6' md='6' sm='12' className='pe-0'>
            <img className='img_Delivery img-fluid' src={ props.imagemDelivery } alt={ props.altDelivery } />
          </Col>
          <Col lg='6' md='6' sm='12' className='ps-0'>
            <div className='atendimento_txt d-flex'>
              <h3 className='titulo_delivery text-center'>{ props.tituloDelivery }</h3>
              <h2 className='delivery_titulo text-center'>{ props.numeroDelivery }</h2>
            </div>
          </Col>
        </Row>
  
      </Container>
  )
}

export default Delivery