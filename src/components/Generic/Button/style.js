import styled from "styled-components"

const getType = ({type}) => {
    switch(type){
        case "light":
            return {
                background: "#fff",
                borderColor: "#E6E9EC",
                color: "var(--colorPrimary)"
            }
        case "dark":
            return {
                background: "transparent",
                borderColor: "#fff",
                color: "#fff"
            }
        default:
            return {
                background: "#0061DF",
                border: "0",
                color: "#fff"
            }
    }
}

export const ButtonComp = styled.button`
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    border-radius: 3px;
    height: ${({height}) => height ? height : "44px"};
    width: ${({width}) => width ? width : "130px"};
    column-gap: 8px;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    ${getType}
    :active{
        opacity: 0.7;
    }
`