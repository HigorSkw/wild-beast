import styled from '@emotion/styled';

export const Content = styled.main`
  grid-area: content;
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  .col-wide {
    grid-column: 1/ -1;
  }

  .imagem-1 {
    grid-row: span 2;
    align-self: flex-end;
  }

  .imagem-2 {
    align-self: flex-end;
  }

  p {
    font-size: 1.2em;
    line-height: 1.6;
    letter-spacing: -0.005em;
    color: rgba(0, 0, 0, 0.7);
  }

  .informacoes p + p {
    margin-top: 30px;
  }

  .titulo {
    color: #b07dfb;

    h1 {
      font-size: 3.75em;
      line-height: 1;
      font-weight: 700;
    }

    span {
      font-size: 0.875em;
      font-style: italic;
    }
  }

  .caracteristicas {
    display: flex;
    align-items: flex-start;
  }

  .caracteristicas span {
    display: block;
  }

  .caracteristicas > div {
    width: 80px;
    text-align: center;
    background: linear-gradient(135deg, #8844ee, #b07dfb);
    border-radius: 5px;
    box-shadow: 5px 5px 15px 0px rgba(44, 44, 44, 0.15);
    position: relative;
  }

  .caracteristicas > div:first-of-type {
    margin-right: 30px;
  }

  .numero {
    color: #b07dfb;
    font-size: 3em;
    line-height: 1;
    margin: 10px auto;
  }

  .rotulo {
    background: white;
    border-radius: 0 0 5px 5px;
    color: #b07dfb;
    padding: 5px 0;
    position: relative;
    top: 2px;
  }

  .destaque {
    font-size: 0.875em;
    color: #b07dfb;
    max-width: 16em;
  }

  .citacao,
  .atributos {
    grid-area: anuncios;
    border-radius: 5px;
    box-shadow: 5px 5px 15px 0px, rgba(0, 0, 0, 0.15);
    background: linear-gradient(135deg, #8844ee, #b07dfb);
    align-self: flex-start;
  }

  .citacao p {
    font-size: 1.5em;
    font-style: italic;
    text-align: center;
    color: white;
    max-width: 500px;
    margin: 0 auto;
  }

  .atributos li {
    color: white;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.125em;
    padding: 15px;
    border-bottom: 2px solid #b07dfb;
  }

  .atributos li + li {
    border-top: 2px solid #b07dfb;
  }
`;
