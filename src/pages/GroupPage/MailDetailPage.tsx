import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import palette from '../../constants/palette';
import Flex from '../../components/ui/Flex';
import Typography from '../../components/ui/Typography';
import { ReactComponent as DownIcon } from '../../assets/down.svg';
import { ReactComponent as UpIcon } from '../../assets/up.svg';

const Sidebar = styled.div`
  flex: 0 0 288px;
  background: ${palette.GRAY10};
  padding: 80px 0 0 140px;
`;

const MailDetail = styled.div`
  flex: 1;
  padding: 92px 72px 0 72px;
`;

const Content = styled.div`
  margin-top: 24px;
  border-top: 1px solid #888;
  padding: 40px 0 80px 40px;
  white-space: pre-wrap;
`;

const OtherMails = styled.div`
  border-top: 1px solid #d9d9d9;
`;

const MailDetailPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id: 3 | 9 = (Number(params.id) as 3 | 9) || 3;

  const mailDetail = {
    3: {
      title: '공실장~ 나야 풍무~',
      name: '공지청 감사실장 / 풍무그룹',
      date: '2023년 9월 6일',
      content:
        '지청아 나야~ 장팀장~\n지난번 갔던 홍어삼합집 적당히 톡 쏘는게 아주 굿이었어~\n\n다름이 아니고 내가 얘기했던 진승무원 건 사실무근이라던데~?^^\n그 친구가 힘드니깐 괜히 선배한테 뒤집어 씌운 거 같더라?\n\n그리고 혹시라도 사내 폭력 알려져서 회사에 좋을 거 없잖아~\n잘 생각해서 마무리하시길 바라네~~\n\nP.S 벌써 9월이네~ 알지? 가을하면 미꾸라지!^^\n전라도 전통 비법 양념에다가 미꾸라지를 그~냥 통째로 넣어서 끓인! 토속 추어탕집이 있는데~\n아주 기가 막혀! 같이 한번 가자구~\n\n아무튼 바쁜데 일 잘하고! 건행~^^♠',
      prev: {
        name: '정직한 차장 / 풍무그룹',
        title: '차기 켐트레일 시연회 일정 관련 회의건',
        date: '2023년 10월 17일',
      },
      next: {
        name: '고인술 대리 / 풍무그룹',
        title: '신설 연구소 스폿 방문 일정 조율 요청건',
        date: '2023년 02월 01일',
      },
    },
    9: {
      title: '장풍무올시다',
      name: '조인상 부장 / 풍무그룹',
      date: '2018년 2월 16일',
      content:
        '조부장\n저번에 낚시 너무 좋았어~ 나이스야 나이스~^^\n\n딴 게 아니고 이번에 신입 승무원으로 지원한 진예원이라고 있는데 잘 좀 부탁해!\n나 우리 조부장만 믿어!^^ ♧\n\n나중에 또 낚시 한번 가자구~\n그럼 오늘도 수고~^^♣',
      prev: {
        name: '정직한 차장 / 풍무그룹',
        title: '풍드로이드14.918 upgrade ver.',
        date: '2020년 05월 16일',
      },
      next: {
        name: '김획기 과장 / 풍무그룹',
        title: '사물인터넷(IoT) 가정용 전자기기 보급 마케팅 제안건',
        date: '2018년 01월 02일',
      },
    },
  };

  const { title, name, date, content, prev, next } = mailDetail[id];

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
          <Typography style={{ fontSize: 18, color: '#333333' }}>
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
          <Typography style={{ fontSize: 18, color: '#333333' }}>
            휴지통
          </Typography>
        </Flex>
        <Typography style={{ fontSize: 18 }} gutter={{ top: 20 }}>
          1:1 상담
        </Typography>
        <Typography style={{ fontSize: 18 }} gutter={{ top: 20 }}>
          환경설정
        </Typography>
      </Sidebar>
      <MailDetail>
        <div>
          <Typography medium style={{ fontSize: 20 }}>
            {title}
          </Typography>
          <Flex justify='space-between' align='center' gutter={{ top: 12 }}>
            <Flex gap={12} align='center'>
              <Typography medium style={{ color: '#333', fontSize: 14 }}>
                수신
              </Typography>
              <Typography medium style={{ color: palette.NAVY, fontSize: 14 }}>
                {name}
              </Typography>
            </Flex>
            <Typography style={{ color: '#333', fontSize: 14 }}>
              {date}
            </Typography>
          </Flex>
          <Content>{content}</Content>
          <OtherMails>
            <Flex style={{ padding: '12px 0' }} align='center' gap={8}>
              <UpIcon style={{ flex: '0 0 24px' }} />
              <Typography
                style={{ flex: '0 0 152px', color: '#333', fontSize: 14 }}
              >
                {prev.name}
              </Typography>
              <Typography style={{ flex: '1 1 572px', fontSize: 14 }}>
                {prev.title}
              </Typography>
              <Typography
                style={{
                  flex: '0 0 128px',
                  color: '#333',
                  fontSize: 14,
                  textAlign: 'end',
                }}
              >
                {prev.date}
              </Typography>
            </Flex>
            <Flex
              style={{ padding: '12px 0', borderTop: '1px solid #f5f5f5' }}
              align='center'
              gap={8}
            >
              <DownIcon style={{ flex: '0 0 24px' }} />
              <Typography
                style={{ flex: '0 0 152px', color: '#333', fontSize: 14 }}
              >
                {next.name}
              </Typography>
              <Typography style={{ flex: '1 1 572px', fontSize: 14 }}>
                {next.title}
              </Typography>
              <Typography
                style={{
                  flex: '0 0 128px',
                  color: '#333',
                  fontSize: 14,
                  textAlign: 'end',
                }}
              >
                {next.date}
              </Typography>
            </Flex>
          </OtherMails>
        </div>
      </MailDetail>
    </Flex>
  );
};

export default MailDetailPage;
