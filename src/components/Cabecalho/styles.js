import styled from 'styled-components';
import { Link } from 'react-router-dom'



export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 75px;
    background-color: var( --color-header);

    @media screen and (max-width: 1024px){
    padding: 0 35px;
    justify-content: space-between;

}  
`;

export const Icons = styled(Link)`
    display: none;
    font-size: 30px;
    color: var(--color-black);

    @media screen and (max-width: 1024px){
    display: block;
}
`

export const LeftMenus = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;

    >div{
        display: flex;
        align-items: center;
        padding: 0px 0px 0px 90px;
    }

    @media screen and (max-width: 1024px){
        .nav-menu {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 55vh;
            position: absolute;
            top: -100%;
            left: 0;
            opacity: 1;
            z-index: -10;
            transition: all 0.5s ease;
            
    }

  .nav-menu.active {
        background: #fff;
        top: 70px;
        opacity: 1;
        transition: all 0.6s ease;
        z-index: -10;
        padding: 0px 25px;
    }

}   
`
export const RightMenu = styled.div`
    display: flex;
    align-items: center;
`

export const Logo = styled(Link)`
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--color-blue);

    >sup{
        font-size: 10px;
    }
`

export const Menu = styled(Link)`
    color: var(--color-blue);
    font-size: 0.9rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    height: 74px;
    padding: 0px 14px;

    &:hover{
        background-color: #F0F8FF;
    }

    @media screen and (max-width: 1024px){
        width: 100%;
    }
`

export const Login = styled(Link)`
    display: flex;
    align-items: center;
    border-left: 1px solid var(--color-border);
    margin-left: 100px;
    padding: 0px 16px;

    &:hover{
        background-color: #F0F8FF;
    }

    div{
        font-size: 23px;
        color: var(--color-blue);
        padding: 22px 0px;
        margin-top: 3px;
    }

    p{
        font-family: Mulish;
        font-weight: bold;
        font-size: 0.8rem;
        line-height: 22px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        color: #002C63;
        margin-left: 12px;
        

    }

    @media screen and (max-width: 1024px){
        display: none;
    }
`