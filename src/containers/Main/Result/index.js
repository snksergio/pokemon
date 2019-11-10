import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../../../components/Progressbar';
import {
  ResultStyled,
  PokeInfo,
  Head,
  HeadTitle,
  HeadThumb,
  ProgressContainer,
  Back,
} from './style';

const ResultView = ({ data }) => {
  return (
    <>
      {data.map(item => (
        <ResultStyled key={item.id}>
          <Back>
            <span>Anterior</span>
            Pikachu
          </Back>
          <Head>
            <HeadThumb>
              <img
                src="https://www.serebii.net/pokemongo/pokemon/004.png"
                alt=""
              />
            </HeadThumb>
            <HeadTitle data-number={item.numero}>
              <h1>{item.nome}</h1>
              <ul>
                <li>Fire</li>
                <li>Flying</li>
              </ul>
            </HeadTitle>
          </Head>
          {item.caracteristicas.map(childitem => (
            <PokeInfo key={childitem.tipo}>
              <li>
                <h2>Weight</h2>
                <span>{childitem.peso}</span>
              </li>
              <li>
                <h2>Height</h2>
                <span>{childitem.altura}</span>
              </li>
              <li>
                <h2>Type</h2>
                <span>{childitem.tipo}</span>
              </li>
            </PokeInfo>
          ))}
          <ProgressContainer>
            {item.estatisticas.map(childEstatistica => (
              <ProgressBar
                key={childEstatistica.titulo}
                title={childEstatistica.titulo}
                value={childEstatistica.valor}
                percent={childEstatistica.porcentagem}
              />
            ))}
          </ProgressContainer>
        </ResultStyled>
      ))}
    </>
  );
};

ResultView.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      numero: PropTypes.string,
      nome: PropTypes.string,
      tipo: PropTypes.string,
      caracteristicas: PropTypes.array,
      estatisticas: PropTypes.array,
    }),
  ).isRequired,
};

export default ResultView;
