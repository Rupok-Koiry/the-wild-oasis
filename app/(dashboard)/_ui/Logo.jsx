import styled from "styled-components";
import { useDarkMode } from "../_context/DarkModeContext";
import Link from "next/link";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
  margin: 0 auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  return (
    <Link href="/">
      <StyledLogo>
        <Img src={src} alt="Logo" />
      </StyledLogo>
    </Link>
  );
}

export default Logo;
