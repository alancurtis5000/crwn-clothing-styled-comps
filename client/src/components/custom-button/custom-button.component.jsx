import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => {
  return (
    <CustomButtonContainer className="custom-button" {...props}>
      {children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
