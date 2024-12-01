import React from 'react';
import styled from 'styled-components';
import MainImage from '../assets/A095F4CA-FA56-4887-A405-F677659B4AFD_1_105_c.jpeg';
import { Image, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function MainPage(): React.ReactElement {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate('/question');
  };

  return (
    <>
      <Wrapper>
        <Header>💁🏻예비집사 판별기💁🏻</Header>
        <ContentsWrapper>
          <Title>나에게 맞는 주인님은?!</Title>
          <LogoImage>
            <Image
              className="rounded-circle"
              src={MainImage}
              width="350px"
              height="350px"
            />
          </LogoImage>
          <Desc>mbti를 기반으로 하는 나랑 잘 맞는 강아지 찾기.</Desc>
          <Desc>내가 집사가 되서 강아지를 키운다면?</Desc>
          <Button
            className="btn-danger"
            onClick={handleClickButton}
            style={{ fontSize: 25, marginTop: 20, marginBottom: 20 }}
          >
            테스트 시작하기
          </Button>
        </ContentsWrapper>
      </Wrapper>
    </>
  );
}

export default MainPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #fffacd;
  font-family: 'Jalnan';
`;

const Header = styled.div`
  background-color: #ffa07a;
  font-size: 40pt;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: 'Jalnan';
`;
const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20pt;
`;
const Title = styled.div`
  margin-top: 20pt;
  font-size: 20pt;
`;
const LogoImage = styled.div`
  width: 200;
  height: 200;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 20pt;
`;
