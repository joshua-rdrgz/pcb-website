import { styled, css } from 'frontity';
import Link from "@frontity/components/link";
import * as Variables from '../Variables';
import * as Mixins from '../Mixins';


export const Nav = styled.nav`
  color: ${Variables.colorWhite};
  margin-left: auto;
  margin-right: 3rem;
  margin-top: 2rem;
  @media (max-width: ${Variables.queryMD}) {
    height: 0;
    margin-top: 0;
    transform: scale(1, 0);
    transform-origin: top;
    transition: all 400ms ease-in-out;
  }
`;

export const MobileToggle = styled.input`
  display: none;
  &:checked ~ ${Nav} {
    max-height: auto;
    transform: scale(1, 1);
  }
  &:checked ~ ${Nav} a {
    opacity: 1;
  }
`;

export const MobileIcon = styled.span`
  visibility: hidden;
  &,
  &::before,
  &::after {
    display: block;
    background: white;
    height: 2px;
    width: 2rem;
    border-radius: 2px;
    position: relative;
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    transition: all 0.2s;
  }
  &::before {
    bottom: 0.7rem;
  }
  &::after {
    top: 0.7rem;
  }
  @media (max-width: ${Variables.queryMD}) {
    visibility: visible;
    margin-left: 0.9rem;
    margin-top: 1.9rem;
  }
`;

export const MobileBurger = styled.label`
  visibility: hidden;
  background-color: transparent;
  position: absolute;
  right: 0;
  margin-right: 3rem;
  margin-top: 1.5rem;
  height: 4rem;
  width: 4rem;
  &:hover ${MobileIcon}:before {
    bottom: 0.8rem;
  }
  &:hover ${MobileIcon}:after {
    top: 0.8rem;
  }
  ${MobileToggle}:checked + & ${MobileIcon} {
    background-color: transparent;
  }
  ${MobileToggle}:checked + & ${MobileIcon}::before {
    transform: rotate(135deg);
    top: 0;
  }
  ${MobileToggle}:checked + & ${MobileIcon}::after {
    transform: rotate(-135deg);
    top: 0;
  }
  @media (max-width: ${Variables.queryMD}) {
    visibility: visible;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  @media (max-width: ${Variables.queryLG}) {
    gap: 5rem;
  }
  @media (max-width: ${Variables.queryMD}) {
    background-color: ${Variables.colorBlackPureRGBA};
    flex-direction: column;
    gap: 0;
    width: 100vw;
  }
`;

export const NormalLink = styled.li`
  ${Mixins.liCleanUp};
  ${Mixins.addHeadingFont(700, 3)};
  text-align: center;
`;

export const ParentLink = styled.li`
  ${Mixins.liCleanUp};
  ${Mixins.addHeadingFont(700, 3)};
  text-align: center;
  position: relative;
  padding-bottom: 2rem;
  &:hover {
    color: ${Variables.colorGold};
  }
  @media (max-width: ${Variables.queryMD}) {
    padding-bottom: 0;
    & span {
      display: none;
    }
  }
`;

export const ParentIcon = styled.span`
  position: absolute;
  width: 4rem;
  height: 4rem;
  &::before, &::after {
    content: '';
    width: 1.5rem;
    height: 1.5px;
    background: white;
    display: inline-block;
    position: absolute;
    border-radius: 15px;
    top: 2.5rem;
    transition: all .2s;
  }
  &::before {
    transform: rotate(45deg);
    right: 2rem;
  }
  &::after {
    transform: rotate(135deg);
    right: 1rem;
  }
  ${ParentLink}:hover &::before {
    transform: rotate(135deg);
    background: ${Variables.colorGold};
  }
  ${ParentLink}:hover &::after {
    transform: rotate(45deg);
    background: ${Variables.colorGold};
  }
`;

export const ChildList = styled.ul`
  @media (min-width: ${Variables.queryMD}) {
    display: none;
    position: absolute;
    min-width: 20rem;
    z-index: 1000;
    margin-left: -6rem;
    margin-top: 1.5rem;
    box-shadow: ${Variables.boxShadow};
    background-color: ${Variables.colorGray1};
    border-radius: 0.5rem;
    ${ParentLink}:hover & {
      display: block;
    }
    &::before {
      content: "";
      display: block;
      border-color: transparent transparent ${Variables.colorGray1} transparent;
      border-style: solid;
      border-width: 1.5rem;
      position: absolute;
      top: -3rem;
      left: 50%;
      margin-left: -2rem;
    }
  }
  @media (max-width: ${Variables.queryLG}) {
    min-width: 16rem;
    margin-left: -4.5rem;
  }
  @media (max-width: ${Variables.queryMD}) {
    margin-left: 0;
  }
`;

export const ChildLink = styled.li`
@media (min-width: ${Variables.queryMD}) {
    ${Mixins.liCleanUp};
    ${Mixins.addHeadingFont(700, 2.5)};
    text-align: center;
    &:first-child {
      padding-top: 0.5rem;
    }
    &:last-child {
      padding-bottom: 1rem;
    }
  }
`;

export const CTA = styled.li`
  text-align: center;
  ${Mixins.liCleanUp};
  ${Mixins.addHeadingFont(700, 3)};
`;

// Mixin to make links responsive, keeping it here to not pollute the global Mixin file.
export const linkResponsive = () => css`
@media (max-width: ${Variables.queryMD}) {
  opacity: 0;
  transition: opacity 150ms ease-in-out;
  ${MobileToggle}:checked ~ ${Nav} & {
    opacity: 1;
    transition: opacity 250ms ease-in-out 250ms;
  }
}
`;

export const StyledLink = styled(Link)`
  ${Mixins.aCleanUp(Variables.colorWhite)};
  &:hover {
    color: ${Variables.colorGold};
  }
  ${linkResponsive};
`;

export const StyledCTA = styled(Link)`
  ${Mixins.aCleanUp(Variables.colorGold)};
  border: 2px solid ${Variables.colorGold};
  border-radius: 0.5rem;
  padding: 0.75rem;
  &:hover {
    color: ${Variables.colorWhite};
    border-color: ${Variables.colorRed};
  }
  @media (max-width: ${Variables.queryMD}) {
    border: none;
    padding: none;
    color: ${Variables.colorWhite} !important;
    &:hover {
      color: ${Variables.colorGold} !important;
    }
  }
  ${linkResponsive}
`;