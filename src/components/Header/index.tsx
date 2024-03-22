'use client';

import * as S from './style';
import logo from '../../../public/assets/wildbeast.svg';
import Image from 'next/image';

export const HeaderComponent = () => {
  return (
    <S.Header>
      <Image src={logo} alt="WildBeastLogo" width={200} />
      <nav>
        <ul>
          <li>
            <a href="#">sobre</a>
          </li>
          <li>
            <a href="#">animais</a>
          </li>
          <li>
            <a href="#">contato</a>
          </li>
        </ul>
      </nav>
    </S.Header>
  );
};
