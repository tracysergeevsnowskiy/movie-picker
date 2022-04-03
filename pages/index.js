import Head from 'next/head';
import { baseUrl, apiKey } from './api/config';
import { useEffect, useState } from 'react';
import { MovieName } from '../components';
import { Cassette } from '../components';
import { Poster } from '../components';
import styled from 'styled-components';

const BackgroundLayout = styled.div`
  position: absolute;
  background: #e5e5e5;
  opacity: 0.9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CassetteContainer = styled.div`
  position: absolute;
  background-color: transparent;
`;

const PosterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const TitleContainer = styled.div`
  margin: 100px 0 0 0;
`;

export default function Home() {
  const [movieName, setMovieName] = useState('');
  const [poster, setPoster] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    const pickMovieToDisplay = (data) => {
      const movies = data.items;
      const pickedMovie = movies[Math.floor(Math.random() * movies.length)];

      setMovieName(pickedMovie.title);
      setPoster(pickedMovie.image);
      setYear(pickedMovie.year);
    };

    //TRULY NEED A BEST SOLUTION FOR API NOT THIS EITHER

    fetch(`${baseUrl}/Top250Movies/${apiKey}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((json) => pickMovieToDisplay(json))
      .catch((err) => console.log(err));
  }, [movieName, poster, year]);

  return (
    <BackgroundLayout>
      <Head>
        <title>Movie picker</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ContentContainer>
        <PosterContainer>
          <Poster poster={poster} />
        </PosterContainer>
        <CassetteContainer>
          <Cassette />
        </CassetteContainer>
        <TitleContainer>
          <MovieName movieName={movieName} year={year} />
        </TitleContainer>
      </ContentContainer>
    </BackgroundLayout>
  );
}
