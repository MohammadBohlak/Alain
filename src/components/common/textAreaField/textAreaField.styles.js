import styled from "styled-components";
import { Input } from "../../contactPageCompnents/formInput/formInput.styles";

export const TextArea = styled(Input).attrs({
    as: 'textarea',
  })`
    width: 100%;
    padding: 0 8px;
    outline: none;
    height: 80px;
    font-size: 2.5rem;
  `;
  