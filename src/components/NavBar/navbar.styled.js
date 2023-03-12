import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Nav = styled.nav`
  padding: 15px 0;
  border-bottom: 2px solid burlywood;
  text-align: end;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  margin-right: 15px;
  color: black;
  &.active {
    font-weight: bold;
    color: burlywood;
  }
`;
