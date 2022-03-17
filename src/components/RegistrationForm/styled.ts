import styled from 'styled-components';

export const Form = styled.form`
    width:500px;
    height:500px;
    border-radius:20px;
    margin:auto;
    transform: translateY(-80px);
    z-index:1000;
    background-color:#FFF;
    display:flex;
    flex-direction:column;
    padding:10px;

    .form--input{
        width:95%;
        border:0;
        outline:0;
        padding:5px;
        margin-bottom:20px;
        background-color:#e6e6e6;
        border-radius:5px;
    }

    select{
        width:95%;
        padding:5px;
        margin-bottom:50px;
    }

    .BtnsArea{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }

    .form--btnSubmit{
        width:95%;
        padding:12px;
        border-radius:8px;
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:#03045e;
        color:#FFF;
        border:0;
        outline:0;
        margin-bottom:20px;

        &:hover{
            background-color:#04067c;
        }
    }

    .requiredField{
        border:1px solid #FF0000;
    }
`;