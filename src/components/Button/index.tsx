import { ButtonBaseProps } from "@material-ui/core";
import { ButtonComponent } from "./styles";

const Button: React.FC<ButtonBaseProps> = ({ children }) => {
  return <ButtonComponent>{children}</ButtonComponent>;
};

export default Button;
