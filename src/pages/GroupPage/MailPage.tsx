import { useEffect } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import Flex from '../../components/ui/Flex';
import palette from '../../constants/palette';
import Typography from '../../components/ui/Typography';
import { ReactComponent as PrevIcon } from '../../assets/prev.svg';
import { ReactComponent as NextIcon } from '../../assets/next.svg';

const Sidebar = styled.div`
  flex: 0 0 288px;
  background: ${palette.GRAY10};
  padding: 80px 0 0 140px;
`;

const MailList = styled.div`
  flex: 1;
  /* padding: 92px 0 0 72px; */
  padding: 92px 72px 0 72px;
`;

const MailPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = '풍무그룹';
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Flex
      align='stretch'
      gutter={{ top: 70 }}
      style={{ minHeight: 'calc(100vh - 70px)' }}
    >
      <Sidebar>
        <Typography medium style={{ fontSize: 28 }}>
          메일함
        </Typography>
        <Flex dir='column' gap={12} gutter={{ top: 24 }}>
          <Typography
            style={{ fontSize: 18, color: '#333333', cursor: 'pointer' }}
          >
            받은 메일함
          </Typography>
          <Typography
            style={{ fontSize: 18, color: '#002368', cursor: 'pointer' }}
            onClick={() => {
              navigate('/mail');
            }}
          >
            보낸 메일함
          </Typography>
          <Typography
            style={{ fontSize: 18, color: '#333333', cursor: 'pointer' }}
          >
            휴지통
          </Typography>
        </Flex>
        <Typography
          style={{ fontSize: 18, cursor: 'pointer' }}
          gutter={{ top: 20 }}
        >
          1:1 상담
        </Typography>
        <Typography
          style={{ fontSize: 18, cursor: 'pointer' }}
          gutter={{ top: 20 }}
        >
          환경설정
        </Typography>
      </Sidebar>
      <MailList>
        <Flex gap={25} align='flex-end'>
          <Typography medium style={{ fontSize: 20 }}>
            보낸 메일함
          </Typography>
          <Typography style={{ fontSize: 14, color: '#888888' }}>
            안읽은 메일 22통 / 전체 메일 34통
          </Typography>
        </Flex>
        <Table />
      </MailList>
    </Flex>
  );
};

const TableContainer = styled.div`
  margin-top: 24px;
  border-top: 1px solid #888888;
  /* width: 880px; */
  width: 100%;
`;

const TableHeader = styled(Flex)`
  background: #f9f9f9;
  padding: 10px 24px;
`;

const TableBody = styled.div`
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
`;

const TableItem = styled(Flex)`
  border-top: 1px solid #d9d9d9;
  padding: 12px 24px;
  width: 100%;
`;

const TableTd = styled.div``;

const Checkbox = styled.div`
  width: 18px;
  height: 18px;
  border: 1px solid #dcdcdc;
  border-radius: 2px;
`;

const Pagination = styled(Flex)``;
const PaginationItem = styled.div`
  width: 24px;
  height: 24px;
  font-size: 14px;
  color: #333;
  text-align: center;

  &:first-of-type {
    background-color: ${palette.NAVY};
    border-radius: 2px;
    color: #fff;
  }
`;

const Table = () => {
  const navigate = useNavigate();

  const mails = [
    {
      id: 1,
      name: '주말론 대리 / 풍무항공',
      title: '[풍무항공] 12월 항공 스케줄 문의건',
      date: '2023년 11월 30일',
      active: false,
    },
    {
      id: 2,
      name: '정직한 차장 / 풍무그룹',
      title: '차기 켐트레일 시연회 일정 관련 회의건',
      date: '2023년 10월 17일',
      active: false,
    },
    {
      id: 3,
      name: '공지청 실장 / 풍무그룹',
      title: '공실장~ 나야 풍무~',
      date: '2023년 09월 06일',
      active: true,
    },
    {
      id: 4,
      name: '고인술 대리 / 풍무그룹',
      title: '신설 연구소 스폿 방문 일정 조율 요청건',
      date: '2023년 02월 01일',
      active: false,
    },
    {
      id: 5,
      name: '곽곡두 회장 / 풍무그룹',
      title: 'RE: 풍무 임직원 여러분, 임인년 신년 인사 올립니다',
      date: '2022년 01월 03일',
      active: false,
    },
    {
      id: 6,
      name: '조인상 부장 / 풍무그룹',
      title: '팀별 회계 기준표 요청 및 개인 월급 명세서 문의건',
      date: '2021년 03월 30일',
      active: false,
    },
    {
      id: 7,
      name: '곽곡두 회장 / 풍무그룹',
      title: 'RE: 2021 謹賀新年 새해 福 많이 받으십시오',
      date: '2021년 01월 04일',
      active: false,
    },
    {
      id: 8,
      name: '정직한 차장 / 풍무그룹',
      title: '풍드로이드14.918 upgrade ver.',
      date: '2020년 05월 16일',
      active: false,
    },
    {
      id: 9,
      name: '조인상 부장 / 풍무그룹',
      title: '장풍무올시다',
      date: '2018년 02월 16일',
      active: true,
    },
    {
      id: 10,
      name: '김획기 과장 / 풍무그룹',
      title: '사물인터넷(IoT) 가정용 전자기기 보급 마케팅 제안건',
      date: '2018년 01월 02일',
      active: false,
    },
  ];

  return (
    <TableContainer>
      <TableHeader align='center' gap={16}>
        <TableTd style={{ flex: '0 0 18px' }}>
          <Checkbox />
        </TableTd>
        <TableTd style={{ flex: '1 1 180px', textAlign: 'center' }}>
          받는사람
        </TableTd>
        <TableTd style={{ flex: '1 1 455px', textAlign: 'center' }}>
          제목
        </TableTd>
        <TableTd style={{ flex: '1 1 159px', textAlign: 'center' }}>
          날짜
        </TableTd>
      </TableHeader>
      <TableBody>
        {mails.map(({ id, name, title, date, active }) => (
          <TableItem key={id} align='center' gap={16}>
            <TableTd style={{ flex: '0 0 18px' }}>
              <Checkbox />
            </TableTd>
            <TableTd
              style={{ flex: '1 1 180px', color: '#333', textAlign: 'center' }}
            >
              {name}
            </TableTd>
            <TableTd
              style={{
                flex: '1 1 455px',
                // textDecoration: active ? "underline" : "",
                // cursor: active ? 'pointer' : '',
                cursor: 'pointer',
              }}
              onClick={() => {
                if (active) {
                  navigate(`/mail/${id}`);
                }
              }}
            >
              {title}
            </TableTd>
            <TableTd
              style={{ flex: '1 1 159px', color: '#333', textAlign: 'center' }}
            >
              {date}
            </TableTd>
          </TableItem>
        ))}
      </TableBody>
      <Pagination gutter={{ top: 24 }} justify='center'>
        <PrevIcon />
        <PaginationItem>1</PaginationItem>
        <PaginationItem>2</PaginationItem>
        <PaginationItem>3</PaginationItem>
        <PaginationItem>4</PaginationItem>
        <PaginationItem>5</PaginationItem>
        <NextIcon />
      </Pagination>
    </TableContainer>
  );
};

export default MailPage;
