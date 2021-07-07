import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 30px 15px;

  h3{    
    width: 160px;
      color: var(--reputation-2);
      font-size: 1.3rem;
      padding: 8px 5px;
      margin-bottom: 0.5rem;
      border-bottom: 2px solid var(--color-orange);
      letter-spacing: 1px;
      font-weight: normal;
      text-rendering: optimizeLegibility;
      font-family: 'Montserrat', sans-serif;
  
  }
`;

export const MenuLink = styled(Link)`
    display: flex;
    align-items: center;
    padding:  15px;
    border-bottom: 1px solid var(--color-border) ;
    width: 300px;

    div{
        font-size: 25px;
        color: var(--color-black);
    }

    p{
        font-size: 0.950rem;
        color: var(--color-gray);
        margin-left: 10px;
        
    }

    &:hover{
        background-color: var(--color-primary);
    }

`

export const Card = styled(Link)`
    width: 290px;
    height: 310px;
    border-radius: 6px;
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, .2);

    img{
        width: 290px;
        height: 160px;
        border-radius: 6px 6px 0px 0px;
    }

    div{
        padding: 15px;

        p{
            font-family: 'Montserrat', sans-serif;
            font-size: 1.250rem;
            color: var(--color-blue);
            letter-spacing: 1px;
            line-height: 1.6;
            margin-bottom: 0.5rem;
        }

        span{
            color: var(--color-gray);
            font-family: inherit;
            font-size: 0.938rem;
            line-height: 1.6;
            margin-bottom: 1.25rem;
        }
    }
`