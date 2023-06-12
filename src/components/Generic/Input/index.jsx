import { forwardRef } from "react";
import { Container, Wrapper, Icon, Area } from "./style";

const Input = forwardRef(
  (
    {
      typeInput,
      value,
      defaultValue,
      placeholder,
      icon,
      className,
      name,
      onPress,
      width,
      height,
      elem = "input",
      style,
    },
    ref
  ) => {
    return (
      <Wrapper
        className={className}
        typeInput={typeInput}
        width={width}
        height={height}
        style={style}
      >
        {Icon && <div className="icon">{icon}</div>}
        {elem === "input" ? (
          <Container
            ref={ref}
            type={"text"}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            name={name}
            onKeyPress={onPress}
          />
        ) : elem === "area" ? (
          <Area
            ref={ref}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            name={name}
            onKeyPress={onPress}
          ></Area>
        ) : (
          <></>
        )}
      </Wrapper>
    );
  }
);

export default Input;
