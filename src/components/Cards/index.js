import React from 'react';
import photo from '../../assets/b3.jpg'
import { CardsData } from './CardsData';
import { Card, Container } from './styles';

function Cards() {
  return (
      <Container>
          {
              CardsData.map((item, index) => {
                  return<Card key={index}>
                      <img src={photo} alt='imagem'>
                      </img>
                      <div>
                          <h2>{item.title}</h2>
                          <p>{item.conteudo}</p>
                      </div>
                  </Card>
              })
          }
      </Container>
  );
}

export default Cards;