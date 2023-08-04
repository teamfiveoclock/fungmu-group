import { useEffect } from "react";
import styled from "@emotion/styled";

import { images } from "../../constants/images";
import Typography from "../../components/ui/Typography";
import palette from "../../constants/palette";

const BackgroundDiv = styled.main`
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.4) 100%
    ),
    url(${images.ep1.group});
  width: 100%;
  height: 282px;
  padding-top: 70px;
`;

const Title = styled.h1`
  margin-top: 80px;
  text-align: center;
  font-size: 36px;
  font-weight: 500;
  color: #fff;
`;

const Content = styled.div`
  padding: 60px 0 105px;
  /* height: calc(100vh - 282px - 104px); */
  text-align: center;
`;

const StyledSpan = styled.span`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    left: -1px;
    right: -1px;
    bottom: -1px;
    height: 10px;
    background: ${palette.SKY_BLUE};
    opacity: 0.3;
    z-index: -1;
  }
`;

const IntroducePage = () => {
  useEffect(() => {
    document.title = "풍무그룹";
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <BackgroundDiv>
        <Title>회사소개</Title>
      </BackgroundDiv>
      <Content>
        <Typography
          medium
          color="NAVY"
          style={{
            fontSize: 32,
            fontFamily: "Montserrat",
          }}
        >
          “ALWAYS CRAZY FORM, FUNGMU”
        </Typography>
        <Typography gutter={{ top: 40 }} style={{ fontSize: 18 }}>
          풍무그룹은 1950년 제약회사로 시작해 발굴의 의지로 일궈낸 대한민국
          남바완 일류기업입니다.
          <br />
          <br />
          풍무그룹은 다음의 <StyledSpan>세 가지의 경영 원칙</StyledSpan>을
          지켜나갈 것입니다.
        </Typography>
        <div
          style={{
            margin: "20px auto 0",
            width: 800,
            padding: "18px 0",
            background: palette.GRAY10,
          }}
        >
          <span style={{ color: palette.SKY_BLUE }}>하나.</span> 문화와 과학을
          이끄는 기업으로서 제일 잘 나갈 것이며,
          <br />
          <span style={{ color: palette.SKY_BLUE }}>하나.</span> 효율적인 OCD
          관리로 법과 윤리적 기준을 넘지 않을 것이며
          <br />
          <span style={{ color: palette.SKY_BLUE }}>하나.</span> 미래를 위해
          더욱 발전하되 환경을 생각하는 그린-제로 기업이 될 것입니다.
        </div>
        <Typography gutter={{ top: 30 }} style={{ fontSize: 18 }}>
          '선진 과학과 문화 창조의 혁신' 경영이념 아래에
          <br />
          끊임없이 변화하고 융합하여 더 큰 기업가치를 창출하겠습니다.
          <br />
          <br />
          ONE & ONLY!
        </Typography>
        <Typography
          medium
          gutter={{ top: 10 }}
          style={{ color: "#333333", fontSize: 18 }}
        >
          풍무그룹 회장{"  "}
          <span style={{ color: "#000", fontSize: 22, marginLeft: 8 }}>
            {" "}
            곽곡두
          </span>
        </Typography>
      </Content>
    </>
  );
};

export default IntroducePage;
