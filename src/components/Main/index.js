import React from 'react';

import AcessoRapido from '../AcessoRapido';
import Noticias from '../Noticias'

import { Container } from './styles';

function Main() {
    return (
        <Container>
            <Noticias />
            <AcessoRapido />
        </Container>
    );
}

export default Main;