import styled from "styled-components";
import { PrimaryText } from "../../components/common/text/PrimaryText.styles";
import { SecondaryText } from "../../components/common/text/SecondaryText.styles";
import { Col, Row } from "react-bootstrap";

export const StyledHome = styled.section`
  #services,
  #ourProjects {
    scroll-margin-top: 100px; /* تعيين مسافة التمرير العلوية */
  }
`;
export const HomeSection = styled(Row)`
  margin-top: var(--section-spacing);
`;
export const HomeText = styled(Col)`
  @media screen and (max-width: 768px) {
    ${PrimaryText} {
      text-align: center;
    }
  }
  ${SecondaryText} {
    padding-right: 10px;
    position: relative;
  }
  ${SecondaryText}::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border: 5px solid var(--main-color);
    border-right-color: transparent;
    border-bottom-color: transparent;
    rotate: -45deg;
    right: -9px;
    top: 11px;
  }
`;
export const HomeImg = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 100%;
    aspect-ratio: 1 / 1; /* نسبة الطول إلى العرض (1:1) */
    width: 350px;
    max-height: 100%;
  }
  img.circle {
    border-radius: 50%;
    align-self: center;
  }
  img.square {
    border-radius: 20px;
    object-fit: cover;
    align-self: flex-start;
  }
  @media screen and (max-width: 768px) {
    img{
      width: 300px;
    }
    img.circle,
    img.square {
      align-self: center;
    }
  }
`;
