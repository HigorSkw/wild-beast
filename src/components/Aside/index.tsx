'use client';
import Image from 'next/image';
import anuncio1 from '../../../public/assets/anuncio-1.jpg';
import anuncio2 from '../../../public/assets/anuncio-2.jpg';
import * as Styled from './style';

export const AsideComponent = () => {
  return (
    <Styled.Aside>
      <Image
        alt="anuncio 1"
        src={anuncio1}
        className="anuncio-item"
        height={240}
      />
      <Image
        alt="anuncio 2"
        src={anuncio2}
        className="anuncio-item"
        height={240}
      />
    </Styled.Aside>
  );
};
