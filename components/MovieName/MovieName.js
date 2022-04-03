import React, { useEffect, useState } from 'react';
import { baseUrl, apiKey } from '../../pages/api/config';
import styled from 'styled-components';

const StyledName = styled.div`
  font-family: 'Roboto';
  color: '#000';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 75px;
  text-align: center;
`;
export const MovieName = () => {
  const [movieName, setMovieName] = useState(null);
  useEffect(() => {
    fetch(`${baseUrl}/films/468373`, {
      method: 'GET',
      headers: {
        'X-API-KEY': apiKey,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((json) => setMovieName(json.nameRu))
      .catch((err) => console.log(err));
  }, [movieName]);

  return <StyledName>{movieName}</StyledName>;
};
