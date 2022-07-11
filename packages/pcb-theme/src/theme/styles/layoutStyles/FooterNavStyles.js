import { styled, css } from 'frontity';
import Link from "@frontity/components/link";
import * as Variables from '../Variables';
import * as Mixins from '../Mixins';

export const footerSection = (width) => css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: ${width}rem;
`;

export const Nav = styled.nav`
  ${footerSection(18)};
  ${Mixins.addHeadingFont(400, 3)};
`;

export const Title = styled.span`
  border-bottom: ${Variables.footerBorder};
`;

export const NavList = styled.ul`

`;

export const NavItem = styled.li`
  ${Mixins.liCleanUp()};
  font-size: 2.5rem;
`;

export const StyledLink = styled(Link)`
  ${Mixins.aCleanUp(Variables.colorWhite)};
  &:hover {
    color: ${Variables.colorGold};
  }
`;