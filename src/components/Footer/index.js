import React from 'react';
import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  border: 0;
  right: 0;
  margin-bottom: 20px;
  div {
    background-color: #00000070;
    border-radius: 4px;
    padding: 10px 15px;
    display: flex;
    align-items: right;
    border-right: 3px dashed ${({ theme }) => theme.colors.red};
    border-bottom: 3px dashed ${({ theme }) => theme.colors.red};
    margin-right: 10px;
  }
  section {
    text-align: center;
  }
  img {
    width: 58px;
    margin-top: 20px;
    margin-right: 20px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }

  }
  @media screen and (max-width: 500px) {
    margin-bottom: 2px;
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <div>
        <a target="_blank" rel="noreferrer" href="https://www.alura.com.br/">
          <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
        </a>
        <p>
          <section>
            Orgulhosamente criado durante
            {' '}
            a
            {' '}
          </section>
          <section>
            <a target="_blank" rel="noreferrer" href="https://www.alura.com.br/">
              <span>Imersão React da Alura</span>
            </a>
          </section>
        </p>
      </div>
    </FooterWrapper>
  );
}
