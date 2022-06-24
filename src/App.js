import React from 'react';
import CardList from './components/CardList';
import { foodData } from './data';

function App() {
  return (
    <div className='app'>
      <h1 className='app__title'>Ты сегодня покормил кота?</h1>
      <CardList data={foodData} />
    </div>
  );
}

export default App;