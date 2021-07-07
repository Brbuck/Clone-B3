import styled from 'styled-components';

export const Container = styled.div`
    height: 80px;
    border: 3px solid var(--color-black);
    background-color: var(--color-painel);
    display: flex;
    align-items: center;
    justify-content: space-around;

    >section{
        display: flex;
        align-items: center;
    }

    
`;

export const PainelBox = styled.div`
    padding: 0px 28px 0px 18px;
    border-right: 1px solid var(--color-border);
    display: flex;
    flex-direction: column;
    width: 225px;

    h4{
        color: var(--color-light-blue);
        margin-bottom: 10px;
        font-weight: 200;
    }

    >div{
        display: flex;
        justify-content: space-between;
        align-items: center;

        p{
            font-size: 1.3rem;
            color: var(--color-primary);
        }

        span{
            font-size: .9rem;
            color: var(--color-primary);
        }

    }

    @media screen and (max-width: 1024px){
        width: 150px;
        text-align: center;

        h4{
            margin-bottom: 5px;
        }

        div{
            flex-direction: column;

            p{
                margin-bottom: 5px;
            }
        }
    }
`
