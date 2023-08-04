import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import palette from '../../constants/palette';
import Flex from '../ui/Flex';
import { ReactComponent as GroupLogoFooterIcon } from '../../assets/group_logo_footer.svg';

const Wrapper = styled.div`
  height: 104px;
  width: 100%;
  background-color: ${palette.GRAY90};

  position: relative;
  z-index: 10;
`;

const InnerWrapper = styled(Flex)`
  width: 1040px;
  margin: 0 auto;
  padding: 40px 0;
  color: #fff;
  height: 104px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <InnerWrapper align='center' justify='space-between'>
        <Flex align='center' gap={57}>
          <Link
            to='/'
            style={{
              height: 20,
            }}
          >
            <GroupLogoFooterIcon />
          </Link>
          <Flex gap={8} align='center' style={{ color: '#ccc' }}>
            <span>개인정보처리방침</span>
            <span>|</span>
            <span>이용약관</span>
          </Flex>
        </Flex>
        <span style={{ fontSize: 12, opacity: 0.5 }}>
          Copyright ⓒ 2023 풍무그룹 All Right Reserved
        </span>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Footer;
