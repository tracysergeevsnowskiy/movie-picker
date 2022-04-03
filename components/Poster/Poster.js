import Image from 'next/image';
import styled from 'styled-components';
import { imgBaseUrl, imgPatternUrl } from '../../pages/api/config';

const TapeCoverImage = styled.div`
  margin-top: 255px;
  margin-right: 10px;
  transform: rotate(90deg);
`;

export const Poster = ({ poster }) => {
  const imageName = poster.replace(imgPatternUrl, '');
  const imgSrc = imgBaseUrl + imageName;

  return (
    <TapeCoverImage>
      <Image src={imgSrc} alt={'Movie poster'} width={190} height={285} />
    </TapeCoverImage>
  );
};
