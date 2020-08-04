import React from 'react'

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://images.unsplash.com/photo-1592060456825-db77a2df7610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" alt="test"/>

        <div>
          <strong>test name</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lero Lero frasesss

        <br /> <br />

        O incentivo ao avanço tecnológico, assim como o comprometimento entre as equipes possibilita uma melhor visão global do orçamento setorial.
      </p>

      <footer>
        <p>Preço/Hora  <strong>R$ 20,00</strong></p>
        <button type="button">
          <img src={whatsAppIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;
