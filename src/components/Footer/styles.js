import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background-color: var(--color-blue);
    border-top: 4px solid #002C63;
    padding: 15px 110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    

    @media screen and (max-width: 1024px){
        flex-direction: column;
        div+div{
            margin-top: 10px;
        }
    }
`;

export const FooterLink = styled(Link)`
    display: inline-block;
    font-size: 0.8rem;
    padding: 1px 15px;
    color: var(--color-white);
    border-right: 1px solid #fff;

    @media screen and (max-width: 748px){
        border-right: none;
    }
    
`

export const Icons = styled(Link)`
    font-size: 20px;
    margin-left: 7px;
    margin-top: 10px;
    color: #fff;

`