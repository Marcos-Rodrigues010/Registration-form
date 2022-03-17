import styled from 'styled-components';

export const Header = styled.header`
    width:100%;
    height:60px;
    background-image:linear-gradient(to right, #dfe8e9 50%, #c7ddda);
    display:flex;
    justify-content:center;
    align-items:center;

    .header--container{
        background-color:transparent;
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:1140px;
        height:50px;

        .header--logoArea{
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:20px;
            color:#03045e;
            

            .header--svg{
                font-size:20px;
                margin-right:2px;
                color:#03045e;
            }
        }

        .header--loginBtn{
            width:80px;
            height:35px;
            padding:10px;
            background-color:#e63946;
            color:#FFF;
            text-align:center;
            border-radius:8px;
            cursor:pointer;

            &:hover{
                background-color:#e31c2d;
            }
        }

        .header--userLoggedInfo{
            position:relative;

            span{
                margin-left:3px;
            }

            .header--logoutBtn{
                position:absolute;
                display:flex;
                justify-content:center;
                padding:8px;
                overflow:hidden;
                transition:all ease 0.3s;

                .logoutBtn{
                    width:100px;
                    padding:3px;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    border-radius:5px;
                    background-color:#03045e;
                    color:#FFF;
                    cursor:pointer;
                }
            }
        }
    }
`;