import { ButtonBaseProps } from "@material-ui/core";
import { ButtonComponent } from "./styles";

const Button: React.FC<ButtonBaseProps> = ({ children, type, onClick }) => {
  return (
    <ButtonComponent type={type} onClick={onClick}>
      {children}
    </ButtonComponent>
  );
};

export default Button;
