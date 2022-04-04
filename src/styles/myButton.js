import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const karla = "'Karla', serif";

const PrimaryButton = styled(Button)(() => ({
  borderRadius: "25px",
  fontSize: "12px",
  fontFamily: karla,
  padding: "10px 30px",
}));

export default PrimaryButton;
