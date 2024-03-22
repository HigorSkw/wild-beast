'use client';
import Image from 'next/image';
import cervo from '../../../public/assets/icones/cervo.svg';
import abelha from '../../../public/assets/icones/abelha.svg';
import gato from '../../../public/assets/icones/gato.svg';
import leao from '../../../public/assets/icones/leao.svg';
import ovelha from '../../../public/assets/icones/ovelha.svg';
import vaca from '../../../public/assets/icones/vaca.svg';
import * as S from './style';

export const SideNavComponent = () => {
  return (
    <S.SideNav>
      <ul>
        <li>
          <a href="#">
            <Image alt="Cervo" src={cervo} />
          </a>
        </li>
        <li>
          <a href="#">
            <Image alt="Abelha" src={abelha} />
          </a>
        </li>
        <li>
          <a href="#">
            <Image alt="Gato" src={gato} />
          </a>
        </li>
        <li>
          <a href="#">
            <Image alt="Leão" src={leao} />
          </a>
        </li>
        <li>
          <a href="#">
            <Image alt="Ovelha" src={ovelha} />
          </a>
        </li>
        <li>
          <a href="#">
            <Image alt="Vaca" src={vaca} />
          </a>
        </li>
      </ul>
    </S.SideNav>
  );
};
