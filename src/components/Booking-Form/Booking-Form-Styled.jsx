import styled from 'styled-components';

export const FormHeadingStyled = styled.h2``

export const BookingFormStyled = styled.div`
    width: 320px;
    height: 420px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: rgb(19, 19, 19);
    border-radius: 10px;
    z-index: 99;
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    padding: 20px;
`

export const MainFormStyled = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
`
export const ConfirmButtonStyled = styled.button`
    color: rgb(235, 235, 235);
    background-color: #ff3b5f;
    border-radius: 8px;
    height: 40px;
    width: 100px;
    border: none;
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
`
export const FormInputStyled = styled.input`
    width: 290px;
    height: 45px;
    border-radius: 50px;
    border: none;
    padding: 15px;
    color: black;
`

export const FormLabelStyled = styled.label``

export const FormEleWrapper = styled.div``

export const CancelBookingStyled = styled.p`
    cursor: pointer;
    text-decoration: underline;
`