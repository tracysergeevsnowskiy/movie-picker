import styled from 'styled-components';

const MovieContainer = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 58px;
  line-height: 65px;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #000;
`;

const ExtraInfo = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 29px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #000;
`;

export const MovieName = ({ movieName, year }) => {
  return (
    <>
      <MovieContainer>{movieName}</MovieContainer>
      <ExtraInfo>{year}</ExtraInfo>
    </>
  );
};
