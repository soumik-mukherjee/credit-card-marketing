import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FixedSpace = styled.div`
 width: 20px;
`;

const KeyText = styled.div`
  padding: 2%;
  font-family: Rubik;
  font-size: 14px;
  color: #8798ad;
  font-weight: 500;
  letter-spacing: -0.47px;
  line-height: 23px;
  white-space: nowrap;
`;

const CircleMarker = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${(props) => props.color};
  border-radius: 16px;
  padding: 1%;
`;

const Item = ({ longName, lineColor }) => {
  return (
    <>
      <CircleMarker color={lineColor} />
      <KeyText>{longName}</KeyText>
      <FixedSpace />
    </>
  );
};

const Legend = (props) => {
  const { data } = props;

  if (data && data.metrics && Array.isArray(data.metrics)) {
    return (
      <Container>
        {data.metrics.map((metric) => (
          <Item longName={metric.longName} lineColor={metric.lineColor} />
        ))}
      </Container>
    );
  } else {
    return <Container />;
  }
};

export default Legend;
