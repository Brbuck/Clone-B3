import React from 'react';
//import {BsToggleOn} from "react-icons/bs";

import {AiOutlineRise} from "react-icons/ai";
import {RiHotelFill} from "react-icons/ri";
import {AiOutlineAlignLeft} from "react-icons/ai";
import {RiBarChart2Fill} from "react-icons/ri";
import {RiFileSearchFill} from "react-icons/ri";

import { Container, MenuLink, Card } from './styles';
import Photo from '../../assets/Bb3.jpg'
function AcessoRapido() {
  return (
      <Container>
         <div>
         <h3>Acesso rápido</h3>
          <MenuLink to="#">
              <div><AiOutlineRise /></div>
              <p>Acesso aos sístemas</p>
          </MenuLink>
          <MenuLink>
              <div><RiHotelFill/></div>
              <p>Empresas listadas</p>
          </MenuLink>
          <MenuLink>
              <div><AiOutlineAlignLeft/></div>
              <p>Oficíos e comunidade</p>
          </MenuLink>
          <MenuLink>
              <div><RiBarChart2Fill/></div>
              <p>Boletím diario</p>
          </MenuLink>
          <MenuLink>
              <div><RiFileSearchFill/></div>
              <p>Buscas de corretoras</p>
          </MenuLink>
         </div>
          <Card>
                <img src={Photo} alt='imagem'/>
                <div>
                    <p>Área logada do investidor na B3</p>
                    <span>Acesse seus investimentos!</span>
                </div>
          </Card>
      </Container>
  );
}

export default AcessoRapido;