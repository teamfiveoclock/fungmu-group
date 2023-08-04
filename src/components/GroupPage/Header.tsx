import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Flex from '../ui/Flex';
import Navigator from './Navigator';
import palette from '../../constants/palette';
import { Link } from 'react-router-dom';
import { ReactComponent as GroupLogoWhiteIcon } from '../../assets/group_logo_white.svg';
import { ReactComponent as GroupLogoBlueIcon } from '../../assets/group_logo_blue.svg';

const StyledHeader = styled.header<{ isMain: boolean; isHover: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  z-index: 100;
  height: 70px;
  transition: all 0.5s ease;

  ${({ isMain, isHover }) =>
    (!isMain || isHover) &&
    css`
      background-color: #fff;
      opacity: 0.9;
      border-bottom: 1px solid #002368;
    `};
`;

const Header = ({
  isMain,
  activeTab,
}: {
  isMain: boolean;
  activeTab: string;
}) => {
  const [isHover, setIsHover] = useState<string>();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHeaderHover, setIsHeaderHover] = useState(false);
  const isHeaderChanged =
    isHover !== undefined || scrollPosition > 20 || isHeaderHover;

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    // window.scrollY를 사용하여 스크롤 위치를 가져옴
    const position = window.scrollY;
    setScrollPosition(position);
  };

  // 컴포넌트가 마운트되거나 업데이트 될 때마다 스크롤 이벤트 리스너 등록
  useEffect(() => {
    if (isMain) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMain]);

  console.log('isHeaderChanged: ', isHeaderChanged);

  return (
    <StyledHeader
      isMain={isMain}
      isHover={isHeaderChanged}
      onMouseOver={() => setIsHeaderHover(true)}
      onMouseLeave={() => setIsHeaderHover(false)}
    >
      <Flex
        justify='space-between'
        align='center'
        style={{
          maxWidth: 1440 - 120,
          margin: '0 auto',
          position: 'relative',
          height: 70,
        }}
      >
        <Link
          to='/'
          style={{
            height: 28,
          }}
        >
          {!isMain || isHeaderChanged ? (
            <GroupLogoBlueIcon />
          ) : (
            <GroupLogoWhiteIcon />
          )}
        </Link>
        <Navigator
          activeTab={activeTab}
          isMain={isMain}
          isHover={isHover}
          isHeaderChanged={isHeaderChanged}
          onChangeIsHover={setIsHover}
        />
        <span
          style={{
            color: isMain && !isHeaderChanged ? palette.ETC_WHITE : '#000',
            fontSize: 16,
            // position: 'absolute',
            // right: 0,
            transition: 'all 0.5s ease',
          }}
        >
          <span
            style={{
              color:
                isMain && !isHeaderChanged
                  ? palette.ETC_WHITE
                  : palette.SKY_BLUE,
              fontWeight: 500,
              textDecoration: 'underline',
              transition: 'all 0.5s ease',
            }}
          >
            장풍무
          </span>
          님 환영합니다.
        </span>
      </Flex>
    </StyledHeader>
  );
};

export default Header;
