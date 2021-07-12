import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    gap: 15px;
    align-items: center;
    justify-items: center;
    padding: 40px 130px;
    background-color: var(--color-primary);
    border-top: solid 1px #e5e5e5;

    @media screen and (max-width: 500px){
        
        padding: 30px 5px;
    }

`;

export const Card = styled(Link)`
    width: 295px;
    height: 400px;
    border-radius: 6px;
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, .1);
    background-color: var(--color-white);

    &:hover{
        background-color: var(--color-hover-card);
    }

    img{
        height: 160px;
        width:295px ;
        border-radius: 5px 5px 0px 0px;
    }

    div{
        padding: 12px 18px;
        

        h2{
            letter-spacing: 0.7px;
            line-height: 1.6;
            font-size: 1.250rem;
            font-family: 'Montserrat', sans-serif;
            font-weight: normal;
            font-style: normal;
            color: #004685;
            margin-bottom: 0.5rem;
        }

        p{
            color: var(--color-gray);
            letter-spacing: 0.5px;
            font-family: inherit;
            font-size: 0.938rem;
            line-height: 1.6;
            margin-bottom: 1.25rem;
        }
    }

`