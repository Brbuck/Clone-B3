import React from 'react';
import { NoticiasData } from './NoticiasData';

import { Container, NoticiasLink, Noticia } from './styles';

function Noticias() {
  return (
      <Container>
          <h1>Notícias</h1>
         {
             NoticiasData.map((item, index) => {
                 return <NoticiasLink item={item} key={index}>
                     <span>{item.data}</span>
                     <p>{item.noticia}</p>
                 </NoticiasLink>
             })
         }
         <br /><br />
         
         <Noticia>Mais notícias</Noticia>
      </Container>
  );
}

export default Noticias;