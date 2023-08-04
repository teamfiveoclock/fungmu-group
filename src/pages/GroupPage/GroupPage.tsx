import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { images } from '../../constants/images';
import palette from '../../constants/palette';

const BackgroundDiv = styled.main`
  background: url(${images.ep1.group});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  padding-top: 68px;
`;

const TitleWrapper = styled.div`
  max-width: 1440px;
  margin: 140px auto 0;

  height: 100vh;
  padding-top: 68px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const SmallTitle = styled.span`
  position: relative;
  color: ${palette.ETC_WHITE};
  z-index: 1;
  font-size: 24px;
  font-weight: 500;
  margin: 0 0 0 288px;

  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    left: -2px;
    right: -2px;
    bottom: -2px;
    height: 20px;
    background: ${palette.NAVY};
    z-index: -1;
  }
`;

const GroupPage = () => {
  const [zoomed, setZoomed] = useState(false);
  useEffect(() => {
    document.title = '풍무그룹';
    window.scrollTo({ top: 0 });

    setZoomed(true);
  }, []);

  return (
    <>
      <BackgroundDiv
        style={{
          transform: zoomed ? 'scale(1.2)' : 'scale(1.0)',
          transition: 'all 5s ease',
        }}
      ></BackgroundDiv>
      <TitleWrapper>
        <SmallTitle>풍무그룹</SmallTitle>
        <img
          src='https://crimescene-clue.s3.ap-northeast-2.amazonaws.com/images/fungmu_title.png'
          alt='fungmu_title'
          width={539}
          height={264}
          style={{
            display: 'block',
            margin: '20px 0 0 288px',
          }}
        />
      </TitleWrapper>
    </>
  );
};

export default GroupPage;
