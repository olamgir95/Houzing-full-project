import { ButtonComp } from "./style";

const Button = ({on, type, children, width, height, style}) => {
    return (
        <ButtonComp onClick={on} type={type} width={width} height={height} style={style}>{children}</ButtonComp>
    )
}

export default Button;