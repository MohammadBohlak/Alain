import styled from "styled-components";
import { Input } from "../formInput/formInput.styles";
import { PrimaryText } from "../../common/text/PrimaryText.styles";

export const StyledForm = styled.div`
  padding: 4rem;
  box-shadow: -1px -1px 5px var(--main-color),
    2px 2px 5px var(--secondary-color);
  border-radius: 10% 0 10% 0;
  margin: var(--section-spacing) 0;
  ${PrimaryText} {
    text-align: center;
  }
`;
export const ContainerToast = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  @media (max-width: 400px) {
    bottom: auto;
    right: 10px;
    top: 75px;
    width: 80vw;
  }
`;
