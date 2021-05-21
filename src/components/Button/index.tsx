import { ButtonComponent } from "./styles";

interface IButton {
  label: string;
}

const Button: React.FC<IButton> = ({ label }) => {
  return <ButtonComponent>{label}</ButtonComponent>;
};

export default Button;
