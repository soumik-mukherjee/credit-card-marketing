import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  box-shadow: 0 10px 20px 0 rgba(46,91,255,0.07);
  padding: 2%;
  background-color: white;
  border-radius: 8px;
`;

const Info = styled.div`
  padding: 4%;
  color: #2e384d;
  font-family: Rubik;
  font-size: 40px;
  font-weight: 300;
  letter-spacing: -0.6px;
  line-height: 57px;
`;

const MemoIcon = styled.div`
  height: 48px;
  width: 48px;
  background-image: url(${props => props.icon})
`;

const Details = styled.div`
  padding: 2%;
  height: 22px;
  width: 216px;
  color: #8798AD;
  font-family: Rubik;
  font-size: 15px;
  line-height: 22px;
`;

const Memo = (props) => {
  const { infoText, memoIcon, detailText } = props;
  return (
    <Container>
      <MemoIcon icon={ memoIcon } />
      <Info>{ infoText }</Info>
      <Details>{ detailText }</Details>
    </Container>
  );
};

export default Memo;
