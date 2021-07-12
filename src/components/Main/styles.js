import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;

    @media screen and (max-width: 1024px){
        flex-direction: column;
        padding: 0px 90px;
    }

    @media screen and (max-width: 748px){
      padding: 0px 5px;
  }
`;
