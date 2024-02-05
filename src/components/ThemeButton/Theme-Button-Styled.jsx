import { styled } from 'styled-components'

export const ThemeButtonContainer = styled.div`
    margin: 20px;
    position: absolute;
    top: 0;
    right: 0;
`

export const ThemeButton = styled.button`
    height: 50px;
    width: 90px;
    color: ${props => props.themeMode ? '#3194B5' : '#149CC9'};
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1px;
    background-color: ${props => props.themeMode ? '#cfdde3' : '#283541'};
    border: none;
    border-radius: 10px;
    gap:2px;
    font-size: 15px;
    cursor: pointer;
    transition: box-shadow 0.3s ease;

    &:hover{ 
        box-shadow: 0 5px 15px rgba(0, 251, 255, 0.474);
    }

    > svg{
        fill: #149CC9;
    }
`

