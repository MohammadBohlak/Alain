import styled from "styled-components";
import { PrimaryText } from "../../common/text/PrimaryText.styles";

export const StyledInformationUs = styled.div`
margin-top: var(--section-spacing);
display: flex;
flex-direction: column;
${PrimaryText}{
}
picture {
  width: 25%;
  display: block;
  margin: auto;
}
p {
  font-weight: bold;
  text-align: right;
  font-size: 2rem;
  color: #444;
}
`;