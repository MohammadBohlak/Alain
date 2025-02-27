import styled from "styled-components";

export const Loader = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  aspect-ratio: 1;
  --_g: no-repeat radial-gradient(farthest-side, var(--main-color) 70%, #0000);
  background: var(--_g) 0 0, var(--_g) 100% 0, var(--_g) 100% 100%,
    var(--_g) 0 100%;
  background-size: 40% 40%;
  animation: l38 0.5s infinite;
  @keyframes l38 {
    100% {
      background-position: 100% 0, 100% 100%, 0 100%, 0 0;
    }
  }
`;
