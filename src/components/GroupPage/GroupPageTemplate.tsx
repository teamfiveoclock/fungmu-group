import { useEffect } from 'react';
import styled from '@emotion/styled';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '../../components/GroupPage/Header';
import Footer from '../../components/GroupPage/Footer';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const GroupPageTemplate = () => {
  const { pathname } = useLocation();

  const isMain = pathname === '/';

  const getActiveTab = () => {
    if (pathname === '/') return 'main';
    if (pathname === '/introduce') return 'introduce';
    if (pathname.startsWith('/mail')) return 'mail';

    return 'main';
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Container>
      <Header isMain={isMain} activeTab={getActiveTab()} />
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <Outlet />
        <Footer />
      </div>
    </Container>
  );
};

export default GroupPageTemplate;
