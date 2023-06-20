import { ButtonComp } from "./style";

const Button = ({onClick, type, children, width, height, style}) => {
    return (
        <ButtonComp onClick={onClick} type={type} width={width} height={height} style={style}>{children}</ButtonComp>
    )
}

export default Button;