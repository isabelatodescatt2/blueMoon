import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DireitosAutorais() {
  
  const ano = new Date().getFullYear()

  const bgcolor = { backgroundColor: '#cccccc', padding: '20px 0', marginTop: '-7px'}

  const alinhar = { textAlign: 'center' }


  return (
    <Container fluid style={ bgcolor }>
        <Row>
            <Col style={ alinhar }>
                &copy; { ano } Pet Shop - Todos os Direitos Reservados
            </Col>
      </Row>
    </Container>
  )
}

export default DireitosAutorais