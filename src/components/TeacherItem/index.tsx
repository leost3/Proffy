import './styles.css'

import React from 'react'

import whastappIcon from '../../assets/icons/whatsapp.svg'




function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/36447683?s=400&u=493d7bacc1f21021efde8da04230c81f2a015f09&v=4"
          alt="Leo"
        />

        <div>
          <strong>Leonardo Studart</strong>
          <span>Javascript</span>
        </div>
      </header>
      <p>
        Software Engineer
        <br /> <br />
        Full Stack Developer 
        <br /> <br />
        In love with techonology
      </p>

      <footer>
        <p>
          Price/hour
          <strong>CAD 75,00</strong>
        </p>
        <button type="button">
          <img src={whastappIcon} alt="whatsapp" />
          Get in touch
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
