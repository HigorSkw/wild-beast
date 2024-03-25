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
    transition: 0.1s ease-out;
  }

  li a:hover {
    background: #4f3b6e;
  }

  @keyframes seta {
    from {
      right: 30px;
    }
    to {
      right: 20px;
    }
  }

  @media (max-width: 760px) {
    padding: 0 30px;
    position: relative;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;

    ::after {
      content: '→';
      position: absolute;
      top: 5px;
      right: 30px;
      color: rgba (0, 0, 0, 0.3);
      animation: seta 0.5 ease-in 0s infinite alternate;
    }

    ul {
      display: flex;
    }
    ul li {
      flex: 1 0 60px;
    }

    li a {
      margin: 30px 30px 30px 0;
    }
  }
`;
