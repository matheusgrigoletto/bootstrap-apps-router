import * as S from './styles';

type MainProps = {
  title?: string;
  description?: string;
};

export const Main = ({
  title = 'Bootstrap',
  description = 'TypeScript, ReactJS, NextJS & Styled Components',
}: MainProps) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
);
