import styled from 'styled-components';

export const UserList = styled.div`
    
width:100%;
max-width:1200px;
height:100vh;
background-color:#dfe8e9;

.top{
    width:100%;
    height:50%;
    border-radius:0 0 30px 30px;
    background-color:#03045e;
    z-index:2;
    text-align:center;
    padding-top:30px;

    h1{
        font-size:50px;
        color:#FFF;
    }
}

    .down{
        background-color:#dfe8e9;
    }
    
    .userList--Area{
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

        .userList--item{
            background-color:#e6e6e6;
            border-radius:20px;
            margin-bottom:20px;
            padding:8px;
            color:#03045e;
        }
    }
`;