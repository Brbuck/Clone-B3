import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Container = styled(Link)`
    background-color: var(--color-botao);
    color: var(--coolor-blue);
    font-size: 1rem;
    letter-spacing: 1.3px;
    padding: 15px 40px;
    border-radius: 25px;
    transition: all .4s;

    &:hover{
        background-color: var(--color-hover-botao);
    }
`;
