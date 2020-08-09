import './styles.scss'

import React from 'react'

import whastappIcon from '../../assets/icons/whatsapp.svg'
import api from '../../services/api'



export type TeacherType = {
  id:number,
  avatar:string,
  bio:string,
  cost:number,
  name:string,
  subject:string,
  whatsapp:number
}
interface TeacherItemProps {
  teacher: TeacherType
}

function TeacherItem({teacher: {id, avatar, bio, cost, name, subject, whatsapp}}: TeacherItemProps) {

  function createNewConnection() {
    api.post('connections', {
      user_id: id
    })
  }
  
  return (
    <article className="teacher-item">
      <header>
        <img
          src={avatar}
          alt="Leo"
        />

        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>
      <p>
        {bio}
      </p>

      <footer>
        <p>
          Price/hour
          <strong>CAD {cost}</strong>
        </p>
        <a target="_blank" onClick={createNewConnection} href="https://wa.me/+15145743434">
          <img src={whastappIcon} alt="whatsapp" />
          Get in touch
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;
