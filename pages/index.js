import Head from 'next/head';
import { MovieName } from '../components';
import { Poster } from '../components';
import styled from 'styled-components';

const BackgroundLayout = styled.div`
  width: 100%;
  height: 100%;
  background: #1f2326;
`;
export default function Home() {
  return (
    <BackgroundLayout>
      <Head>
        <title>Movie picker</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MovieName />
      <Poster />
    </BackgroundLayout>
  );
}
