import React from 'react'

import api from '../../services/api';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

export interface ITeacher {
  "id": number,
  "user_id": number,
  "subject": string,
  "cost": number,
  "name": string,
  "avatar": string;
  "whatsapp": number;
  "bio": string;
}

interface ITeacherItemProps {
  teacher: ITeacher
}

const TeacherItem: React.FC<ITeacherItemProps> = ({ teacher }) => {
  function handleCreateNewConnection(){
    api.post('connections', {
      user_id: teacher.user_id
    })
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name}/>

        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>Preço/Hora <strong>R$ {teacher.cost}</strong></p>
        <a target="_blank" onClick={handleCreateNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
          <img src={whatsAppIcon} alt="Whatsapp"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem;
