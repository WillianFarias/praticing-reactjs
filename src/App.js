import React, { useState, useEffect } from 'react';
//useEffect utilizado para dispara funcoes, seja quando a alteracoes em tela ou nao

import api from './services/api';
import './App.css';
import backgroundImage from './assets/img.jpeg';

import Header from './components/Header';

function App() {

  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response);
    });
  }, []);

  function handleAddProject(){
    //projects.push(`Novo projeto ${Date.now()}`);
    setProjects([...projects, `Novo projeto ${Date.now()}`]);

    console.log(projects);
  }

  return (
    <>
      <Header title="Projects!" />

      <img src={backgroundImage} width={300} />

      <ul>
        {projects.map(project => <li key={project}> {project} </li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  );
}

export default App;