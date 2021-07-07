import React from 'react';

import Button from '../Button'
import { Container, PainelBox } from './styles';
import { DataPainel } from './DataPainel'

function Painel() {
    return (
        <Container>
            <section>
            {
                DataPainel.map((item, index) => {
                    return <PainelBox key={index}>
                        <h4>{item.indice}</h4>
                        <div>
                            <p>{item.valor}</p>
                            <span>{item.posicao}</span>
                        </div>
                    </PainelBox>
                })
            }
            </section>
            <Button />
        </Container>
    );
}

export default Painel;