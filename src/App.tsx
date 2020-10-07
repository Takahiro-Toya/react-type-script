import React from 'react';
import { Header } from './components/header';
import { Home } from './pages/home';
import './styles.scss';

function App() {
  const height = document.getElementById('header');
  return (
    <div>
      <Header id="header"></Header>
      <article>
        <Home></Home>
      </article>
    </div>
  );
}

export default App;
