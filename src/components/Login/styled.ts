import styled from 'styled-components';

export const LoginArea = styled.div`

    @keyframes fade {
        from{
            opacity:0;
        }
        to{
            opacity:1;
        }
    }

    width:100vw;
    max-width:1200px;
    height:100vh;
    background-color: transparent;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:1;
    margin:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    animation: fade;
    animation-duration:0.4s;

    .loginArea--blur{
        width:100%;
        height:100%;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }

    .loginArea--content{
        position:absolute;
        display:flex;
        flex-direction:column;
        align-items:center;
        margin-top:30px;

        h1{
            font-size:60px;
            margin-bottom:100px;
            color:#0077b6;
        }

        .loginArea--avatar{
            font-size:150px;
            color:#023e8a;
        }

        .loginArea--inputs{
            width:100%;
            display:flex;
            flex-direction:column;
            align-items:center;

            .loginArea--input{
                width:80%;
                border:0;
                outline:0;
                padding:8px;
                margin-bottom:10px;
                background-color:#023e8a;
                color:#FFF;
                border-radius:8px;

                ::-webkit-input-placeholder {
                    color: #FFF;
                 }
                 
                 ::-moz-placeholder {  /* Firefox 19+ */
                    color: #FFF;  
                 }
                 
                 :-ms-input-placeholder {  
                    color: #FFF;  
                 }
            }

            .loginArea--btn{
                width:80%;
                border:0;
                outline:0;
                padding:8px;
                margin-bottom:10px;
                color:#FFF;
                border-radius:8px;
            }

            #sigIn-btn{
                background-color:#ffb703;
            }

            #cancel-btn{
                background-color:#e63946;
            }
        }

    }
`;