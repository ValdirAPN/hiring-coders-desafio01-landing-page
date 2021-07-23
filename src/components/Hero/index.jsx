import * as S from './styles';

export function Hero() {
  return (
    <S.Container>
      <img src="https://static.zara.net/photos///2021/V/0/2/p/5521/547/401/2/w/424/5521547401_1_1_1.jpg?ts=1619787420021" alt="" />
      <div className="textContent">
        <h1>
          Basic <br />
          Colours <br />
          Comeback
        </h1>
        <p>
          Less is more never out of date. In the last of this years, basic colours will comeback,
          discover our collections and choose your style.
        </p>
      </div>
    </S.Container>
  );
}