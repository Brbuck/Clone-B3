import React, { useState } from 'react';

import { Container, Logo, Menu, LeftMenus, RightMenu,  Icons, Login } from './styles';
import {DataCabecalho} from './DataCabecalho';

import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { IoPersonCircleOutline } from "react-icons/io5";

function Cabecalho() {
    const [click, setClick] = useState(true)

    return (
        <Container>
            <LeftMenus>
                    <Logo>[B]<sup>3</sup></Logo>
                <div className={click ? 'nav-menu' : 'nav-menu active'}>
                    {DataCabecalho.map((item, index) => {
                        return <Menu to={item.path} key={index}>{item.title}</Menu>
                    })}
                </div>
            </LeftMenus>
            <RightMenu>
                <Login to='/area-do-investidor'>
                    <div><IoPersonCircleOutline /></div>
                    <p>Área do Investidor</p>
                </Login>
                <Icons onClick={(e) => setClick(!click)}>{click ? <FaBars /> : <AiOutlineClose />}</Icons>
            </RightMenu>
        </Container>
    );
}

export default Cabecalho;