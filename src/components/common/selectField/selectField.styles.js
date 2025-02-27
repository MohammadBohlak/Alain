import styled from "styled-components";
import { Input } from "../../contactPageCompnents/formInput/formInput.styles";

export const Select = styled(Input).attrs({
  as: "select",
})`
  width: 100%;
  padding: 0 8px;
  outline: none;
  font-size: 2.5rem;
`;
