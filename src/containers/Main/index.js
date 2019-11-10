import React, { useState } from 'react';
import { Container } from './style';
import SearchView from './Search';
import ResultView from './Result';

const Main = () => {
  const data = [
    {
      id: 1,
      nome: 'Charizard',
      numero: '006',
      tipo: 'Fire',
      caracteristicas: [
        {
          peso: '6.0 Kg',
          altura: '5’70”',
          tipo: 'Fire',
        },
      ],
      estatisticas: [
        { titulo: 'HP', valor: '030', porcentagem: 30 },
        { titulo: 'ATK', valor: '080', porcentagem: 80 },
        { titulo: 'DEF', valor: '040', porcentagem: 40 },
        { titulo: 'SPD', valor: '080', porcentagem: 80 },
      ],
    },
  ];
  const filters = ['Fire', 'Water', 'Green', 'Rock', 'Poison', 'Ghost'];
  const [inputValue, SetInputValue] = useState('');
  const onChangeHandler = event => {
    SetInputValue(event.target.value);
  };
  return (
    <Container>
      <SearchView
        onChange={onChangeHandler}
        value={inputValue}
        dataFilter={filters}
      />
      <ResultView data={data} />
    </Container>
  );
};

export default Main;
