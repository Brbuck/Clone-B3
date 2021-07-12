import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
     width: 700px;
     padding: 30px;
     
  h1{
      width: 90px;
      color: var(--color-blue);
      font-size: 1.3rem;
      font-weight: 100;
      padding: 8px 5px;
      margin-bottom: 10px;
      border-bottom: 2px solid var(--color-orange);
      letter-spacing: 1px;
  }

  @media screen and (max-width: 748px){
      width: 100%;
      padding: 30px 5px;
  }
`;

export const NoticiasLink = styled(Link)`
    display: block;
    height: 100px;
    padding: 15px;
    border-bottom: 1px solid var(--color-border);
   
    span{
        
        color: var(--color-orange);
        font-size: 0.800em;
        line-height: 1.4rem;
    }

    p{
        color: var( --color-gray);
        font-size: 0.875em;

    }

    &:hover{
        background: var(--color-primary);
    }
    
    @media screen and (max-width: 580px){
        padding: 15px 5px;

        p{
            font-size: 0.875em;
        }
  }
`

export const Noticia = styled(Link)`
    margin-left: 10px;
    font-weight: 500;
    color: var(--color-light-blue);
    transition: all ease 0.3s;

    &:hover{
        color: var(--color-blue);
    }
` 
