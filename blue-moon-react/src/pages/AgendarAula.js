import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCheck, FaTimes } from "react-icons/fa";
import "../App.css";

// Assets
import Logo from "../imagens/marca/LogotipoBMBlueV2.png";

const Agendamento = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    nascimento: '',
    aula: '',
    mensagem: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleConfirm = () => {
    console.log('Dados enviados:', formData);
    setShowModal(false);
    
    //Resetar formulário
    setFormData({
      nome: '',
      email: '',
      nascimento: '',
      aula: '',
      mensagem: ''
    });
  };

  return (
    <div className="agendar-wrapper">
      <button 
        onClick={() => navigate(-1)} 
        className="back-button"
        aria-label="Voltar"
      >
        <FaArrowLeft size={20} />
      </button>

      <div className="agendar-content">
        <div className="logo-container">
          <img src={Logo} alt="Blue Moon School of Jazz" className="logo-img" />
        </div>

        <form className="agendar-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome Completo</label>
            <input 
              type="text" 
              id="nome" 
              className="form-input" 
              placeholder="Digite seu nome completo"
              value={formData.nome}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input 
              type="email" 
              id="email" 
              className="form-input" 
              placeholder="Digite seu melhor e-mail"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <Row className="form-row">
            <Col md={6}>
              <div className="form-group">
                <label htmlFor="nascimento">Data de Nascimento</label>
                <input 
                  type="date" 
                  id="nascimento" 
                  className="form-input" 
                  value={formData.nascimento}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group">
                <label htmlFor="aula">Tipo de Aula</label>
                <select 
                  id="aula" 
                  className="form-input"
                  value={formData.aula}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="violao">Violão</option>
                  <option value="piano">Piano</option>
                  <option value="canto">Canto</option>
                  <option value="teoria">Teoria Musical</option>
                </select>
              </div>
            </Col>
          </Row><br></br>
          <button type="submit" className="submit-button">
            Agendar Aula
          </button>
        </form>

        {/* Modal de Confirmação */}
        {showModal && (
          <div className="modal-overlay">
            <div className="confirmation-modal">
              <div className="modal-header">
                <h3>Confirmar Agendamento</h3>
              </div>
              <div className="modal-body">
                <p>Suas informações estão corretas? Você selecionou aula de <strong>{formData.aula || '[Tipo de Aula]'}</strong>.</p>
                <div className="modal-details">
                  <p><strong>Nome:</strong> {formData.nome}</p>
                  <p><strong>E-mail:</strong> {formData.email}</p>
                  {formData.nascimento && <p><strong>Data Nasc.:</strong> {new Date(formData.nascimento).toLocaleDateString('pt-BR')}</p>}
                  {formData.mensagem && <p><strong>Mensagem:</strong> {formData.mensagem}</p>}
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  className="modal-btn cancel-btn"
                  onClick={() => setShowModal(false)}
                >
                  <FaTimes /> Cancelar
                </button>
                <button 
                  className="modal-btn confirm-btn"
                  onClick={handleConfirm}
                >
                  <FaCheck /> Confirmar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Agendamento;