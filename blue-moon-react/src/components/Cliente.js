import React from 'react'
import Col from 'react-bootstrap/Col'

function Cliente(props) {
    return (
      <Col lg="" md="6" sm="12">
          <h2 className='titulo_cliente'>{ props.tituloCliente }</h2>
          <h4 className='txt_clientes'>{ props.textCliente }</h4>
          <img className='imagem_cliente' src={ props.imagemCliente } alt={ props.tituloCliente } />
      </Col>
    )
  }

export default Cliente