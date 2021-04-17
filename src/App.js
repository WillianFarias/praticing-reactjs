import React, { useState } from 'react';
//useState permite aplicar o conceito de estado a variaveis 

import './App.css';
import backgroundImg from './assets/background.jpeg';

import Header from './components/Header';

function App() {

  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  function handleAddProject() {
    //projects.push(`Novo projeto ${Date.now()}`);
    //aplicando imutabilidade
    setProjects([...projects, `Novo projeto ${Date.now()}`]);

    console.log(projects);
  }

  return (
    //fragment
    //O react exige que o elemento principal tenha um key
    <>
      <Header title = "Projects" />

      <img width={300} src= { backgroundImg }/>
      {projects.map(project => <li key={project}>{ project }</li>)}

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  )
}

export default App;