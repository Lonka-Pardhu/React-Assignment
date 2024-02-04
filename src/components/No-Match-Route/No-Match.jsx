import { NoMatchErrStyled, ErrTitleStyled, ErrTextStyled } from "./No-Match-Styled";

const NoMatch = () => {
  return (
    <NoMatchErrStyled >
      <ErrTitleStyled>404: Page Not Found</ErrTitleStyled>
      <ErrTextStyled>Lorem ipsum dolor sit amet, consectetur adip.</ErrTextStyled>
    </NoMatchErrStyled>
  );
}

export default NoMatch