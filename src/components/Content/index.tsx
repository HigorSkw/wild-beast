'use client';
import * as S from './style';
import Image from 'next/image';
import lobo from '../../../public/assets/wolf1.jpg';
import lobo2 from '../../../public/assets/wolf2.jpg';
import lobo3 from '../../../public/assets/wolf3.jpg';

export const ContentComponent = () => {
  return (
    <S.Content>
      <div className="titulo">
        <h1>Lobo Cinza</h1>
        <span>da família canis lupus</span>
      </div>

      <div className="caracteristicas">
        <div>
          <span className="numero">72</span>
          <span className="rotulo">kg</span>
        </div>
        <div>
          <span className="numero">13</span>
          <span className="rotulo">age</span>
        </div>
      </div>

      <p className="col-wide">
        É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior,
        cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos
        genéticos reafirmam que o lobo cinzento é ancestral do cão doméstico.
      </p>

      <Image alt="Wolf 1" src={lobo} className="imagem-1" />

      <p className="destaque">
        É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior,
        cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos.
      </p>

      <Image alt="Wolf 2" src={lobo2} className="imagem-2" />

      <p>
        O peso e tamanho dos lobos variam muito em todo o mundo, tendendo a
        aumentar proporcionalmente com a latitude, como previsto pela teoria de
        Christian Bergmann. Em geral, a altura, medida a partir dos ombros,
        varia de 60 a 95 centímetros.
      </p>

      <p>
        O peso varia geograficamente. Em média, os lobos europeus pesam 38,5 kg;
        os lobos da América do Norte, 36 kg; os lobos indianos e árabes, 25
        kg.[7] Embora raros, lobos com mais de 77 kg foram encontrados no
        Alasca, Canadá,[8] e na antiga União Soviética.
      </p>

      <blockquote className="citacao col-wide">
        <p>
          “Há algo no uivar do lobo que tira um homem do aqui e agora e o
          transporta para uma floresta da mente.”
        </p>
      </blockquote>

      <ul className="atributos">
        <li> Surgiu: 12.000 anos</li>
        <li> Tipo: Mamífero</li>
        <li> Idade Média: 13 anos</li>
        <li> Macho adulto: 80kg</li>
        <li> Fêmea adulta: 55kg</li>
        <li> Família: Lupus</li>
      </ul>

      <div className="informacoes">
        <p>
          É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior,
          cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos
          genéticos reafirmam que o lobo cinzento é ancestral do cão doméstico.
        </p>
        <p>
          É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior,
          cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos
          genéticos reafirmam que o lobo cinzento é ancestral do cão doméstico.
        </p>
      </div>

      <Image alt="Wolf 3" src={lobo3} className="col-wide" />
    </S.Content>
  );
};
