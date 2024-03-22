import styled from '@emotion/styled';

export const SideNav = styled.nav`
  grid-area: sidenav;
  background: #fafbfc;
  padding: 30px;

  li a {
    display: block;
    min-width: 60px;
    max-width: 100px;
    margin: 0 auto 30px auto;
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 5px 5px 15px 0px rgba(44, 44, 44, 0.15);
    transition: 0.1s ease-in-out;
  }

  li a:hover {
    background: #4f3b6e;
  }
`;
