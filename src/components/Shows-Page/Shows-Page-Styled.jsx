import { styled } from "styled-components";

export const ShowMainWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const ShowContainerStyled = styled.div`
  height: 390px;
  width: 260px;
  background-color: ${props => props.theme.showEleBackground};
  border: 0.5px solid #636363;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease 0s;
`

export const ShowImgContainerStyled = styled.div`
  height: 280px;
  width: 210px;
  text-align: center;
  color: ${props => props.theme.textColor};
`

export const ImgStyled = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`

export const TextStyled = styled.p`
  margin: 0;
`

export const ShowDetailsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.textColor};
  
  > ${TextStyled}:nth-child(1) {
    font-weight: 500;
    font-size: 18px;
  }

  > ${TextStyled}:nth-child(2) {
    font-size: 15px;

    >svg{
      fill: yellow;
      stroke-width: 0.5;
    }
  }

  > ${TextStyled}:nth-child(3) {
    font-size: 15px;
  }

`

export const KnowMoreBtnStyled = styled.button`
  font-size: 12px;
  font-weight: 500;
  background-color: rgb(93, 203, 243);
  color: black;
  cursor: pointer;
  border: none;
  border-radius: 2px;
`