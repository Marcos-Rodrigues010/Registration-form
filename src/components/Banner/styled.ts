import styled from 'styled-components';

export const Banner = styled.div`
    width:100%;
    height:500px;
    display:flex;
    justify-content:center;
    background-image:linear-gradient(to right, #dfe8e9 50%, #c7ddda);
    background-repeat: no-repeat no-repeat;
    background-position: right center, center;

    .banner--container{
        width:1140px;
        height:inherit;
        display:flex;
        align-items:center;

        .banner--text{
            font-size:40px;
            line-height:25px;
            color:#03045e;

            .banner--logo{
                font-size:40px;
                display:flex;
                align-items:center;
            }
        }
    }
`;