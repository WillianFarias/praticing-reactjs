import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header title="No">
        <ul>
          <li>Login</li>
          <li>Tênis</li>
          <li>Yeezy</li>
        </ul>
      </Header>

      <Header title="Word!">
      <ul>
          <li>Login</li>
          <li>Jordan</li>
          <li>Yeezy</li>
        </ul>
      </Header>
    </>
  );
}

export default App;