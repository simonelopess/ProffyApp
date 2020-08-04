import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="subject" />
          </div>
        </form>
      </PageHeader>
      <main>
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
            <br /> Apaixonado por explodir coisas em laboratório e por mudar a
            vida das pessoas através de experiências. Mais de 200.000 pessoas já
            passaram por uma das minhas explosões.
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
      </main>
    </div>
  );
}

export default TeacherList;
