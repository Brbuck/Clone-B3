import React from 'react';

import { Container, FooterLink, Icons } from './styles';
import {RiArrowDownSFill} from 'react-icons/ri';
import {AiOutlineInstagram} from "react-icons/ai";
import {GrFacebook} from "react-icons/gr";
import {FaTwitterSquare} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai";
import {SiYoutube} from "react-icons/si";
import {SiGlassdoor} from "react-icons/si";


function Footer() {
  return (
      <Container>
          <div>
              <FooterLink>Termos de Uso e Privacidade</FooterLink>
              <FooterLink>Atendimento</FooterLink>
               <FooterLink>Canal de Denúncias</FooterLink>
               <FooterLink>  PT (BR) <RiArrowDownSFill /></FooterLink>
          </div>
          <div>
              <Icons><SiGlassdoor /></Icons>
              <Icons><AiOutlineInstagram /></Icons>
              <Icons><GrFacebook /></Icons>
              <Icons><FaTwitterSquare /></Icons>
              <Icons><AiFillLinkedin /></Icons>
              <Icons><SiYoutube /></Icons>
          </div>
      </Container>
  );
}

export default Footer;