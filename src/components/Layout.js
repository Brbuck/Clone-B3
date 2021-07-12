import React from 'react';

import styled from 'styled-components';

import Cabecalho from './Cabecalho';
import Main from './Main';
import Cards from './Cards';
import Footer from './Footer'
import Painel from './Painel';
import Slider from './Slider';

import { SliderData } from './Slider/SliderData';

const Container = styled.div`
    width: 100%;
    max-width: 1600px;
   
`;


function Layout() {
    return (
        <Container>
            <Cabecalho />
            <Painel />
            {/*<Slider slides={SliderData}/>*/}
            <Main />
            <Cards />
            <Footer />        
        </Container>

    );
}

export default Layout;