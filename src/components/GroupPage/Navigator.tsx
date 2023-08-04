import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import palette from '../../constants/palette';

const NavbarWrapper = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;

  .material-symbols-outlined {
    vertical-align: middle !important;
    font-weight: 1000 !important;
  }
`;

const NavList = styled.ul`
  display: flex;
  column-gap: 60px;
  height: 100%;
`;

const NavItem = styled.li<{ clickable: boolean; _active: string }>`
  display: flex;
  align-items: center;
  color: #fff;
  /* border-top: 4px solid transparent;
  border-bottom: 4px solid transparent; */
  transition: all 0.5s ease;
  position: relative;

  cursor: pointer;

  a {
    cursor: pointer;
  }

  &::after {
    position: absolute;
    content: '';
    bottom: 0;
    height: 4px;
    width: 0;
    background-color: ${palette.NAVY};
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.3s ease;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }

  ${({ _active }) =>
    _active === 'true' &&
    css`
      /* border-bottom: 4px solid ${palette.NAVY}; */
      &::after {
        width: 100%;
      }
    `}

  ${({ clickable }) =>
    clickable &&
    css`
      /* cursor: pointer;

      a {
        cursor: pointer;
      } */

      /* &:hover {
        border-bottom: 4px solid ${palette.NAVY};
      } */
    `}
`;

const NavLink = styled(Link)`
  position: relative;
  height: 70px;
  line-height: 70px;
  color: ${palette.GRAY40};
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  /* cursor: default; */
`;

const NavSpan = styled.span`
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  /* cursor: default; */
`;

const Navigator = ({
  isMain,
  activeTab,
  isHover,
  isHeaderChanged,
  onChangeIsHover,
}: {
  isMain: boolean;
  activeTab: string;
  isHover?: string;
  isHeaderChanged: boolean;
  onChangeIsHover: (isHover?: string) => void;
}) => {
  return (
    <NavbarWrapper>
      <NavList>
        <NavItem
          clickable
          _active={activeTab === 'introduce' ? 'true' : 'false'}
          onMouseOver={() => onChangeIsHover('introduce')}
          onMouseLeave={() => onChangeIsHover(undefined)}
        >
          <NavLink
            to='/introduce'
            style={{
              color:
                isMain && !isHeaderChanged && isHover !== 'introduce'
                  ? '#fff'
                  : '#000',
            }}
          >
            회사소개
          </NavLink>
        </NavItem>
        <NavItem
          _active={'false'}
          clickable={false}
          onMouseOver={() => onChangeIsHover('history')}
          onMouseLeave={() => onChangeIsHover(undefined)}
        >
          <NavSpan
            style={{
              color:
                isMain && !isHeaderChanged && isHover !== 'history'
                  ? '#fff'
                  : '#000',
            }}
          >
            연혁
          </NavSpan>
        </NavItem>
        <NavItem
          _active={'false'}
          clickable={false}
          onMouseOver={() => onChangeIsHover('personnel')}
          onMouseLeave={() => onChangeIsHover(undefined)}
        >
          <NavSpan
            style={{
              color:
                isMain && !isHeaderChanged && isHover !== 'personnel'
                  ? '#fff'
                  : '#000',
            }}
          >
            조직 및 인원
          </NavSpan>
        </NavItem>
        <NavItem
          _active={'false'}
          clickable={false}
          onMouseOver={() => onChangeIsHover('communication')}
          onMouseLeave={() => onChangeIsHover(undefined)}
        >
          <NavSpan
            style={{
              color:
                isMain && !isHeaderChanged && isHover !== 'communication'
                  ? '#fff'
                  : '#000',
            }}
          >
            소통과 참여
          </NavSpan>
        </NavItem>
        <NavItem
          _active={'false'}
          clickable={false}
          onMouseOver={() => onChangeIsHover('notice')}
          onMouseLeave={() => onChangeIsHover(undefined)}
        >
          <NavSpan
            style={{
              color:
                isMain && !isHeaderChanged && isHover !== 'notice'
                  ? '#fff'
                  : '#000',
            }}
          >
            공지사항
          </NavSpan>
        </NavItem>
        <NavItem
          clickable
          _active={activeTab === 'mail' ? 'true' : 'false'}
          onMouseOver={() => onChangeIsHover('mail')}
          onMouseLeave={() => onChangeIsHover(undefined)}
        >
          <NavLink
            to='/mail'
            style={{
              color:
                isMain && !isHeaderChanged && isHover !== 'mail'
                  ? '#fff'
                  : '#000',
            }}
          >
            메일함
          </NavLink>
        </NavItem>
      </NavList>
    </NavbarWrapper>
  );
};

export default Navigator;
