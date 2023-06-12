import { Button } from "./style";

const IconButton = ({on, icon, width, height, style}) => {
    return (
        <Button onClick={on} width={width} height={height} style={style}>{icon}</Button>
    )
}

export default IconButton;