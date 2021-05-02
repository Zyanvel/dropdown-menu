import React from 'react';
import './App.scss';
import Dropdown from './Dropdown';

const pokemons = [
  {
    id: 1,
    value: 'Pikachu',
  },
  {
    id: 2,
    value: 'Piplup',
  },
  {
    id: 3,
    value: 'Eevee',
  },
  {
    id: 4,
    value: 'Chikorita',
  },
  {
    id: 5,
    value: 'Milotic',
  },
  {
    id: 6,
    value: 'Flygon',
  },
  {
    id: 7,
    value: 'Arcanine',
  },
];

function App() {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Zyan's favorite pokemons :D{' '}
      </h1>
      <Dropdown title="Select pokemon" items={pokemons} multiSelect />
    </div>
  );
}

export default App;
