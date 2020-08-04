import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => (
  <article className="teacher-item">
    <header>
      <img
        src="https://avatars0.githubusercontent.com/u/48812482?s=460&u=75f719431366ee38440445ad0a5ffd2c8e0ea557&v=4"
        alt="Rodrigo Fernandes"
      />
      <div>
        <strong>Rodrigo Fernandes</strong>
        <span>Matemática</span>
      </div>
    </header>

    <p>
      Entusiasta das melhores tecnologias de matemática avançada.
      <br />
      <br />
      Apaixonado por explodir cabeças com aulas de cálculo 3 e por mudar a vida
      das pessoas através de experiências. Mais de 200.000 cabeças já explodiram
      por minha causa.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
      </button>
    </footer>
  </article>
);

export default TeacherItem;
