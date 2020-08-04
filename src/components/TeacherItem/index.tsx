import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/11641279?s=460&u=0cf37608d66c4a30c53de48f0c65df6f1606aeca&v=4"
          alt=""
        />
        <div>
          <strong>Simone Lopes</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada. <br />
        <br /> Apaixonado por explodir coisas em laboratório e por mudar a vida
        das pessoas através de experiências. Mais de 200.000 pessoas já passaram
        por uma das minhas explosões.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$80,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
