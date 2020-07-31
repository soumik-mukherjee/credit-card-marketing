import React from "react";
import styled from "styled-components";
import LineChart from "./LineChart";
import Legend from "./Legend";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-shadow: 0 10px 20px 0 rgba(46,91,255,0.07);
  padding: 4%;
  background-color: white;
  border-radius: 8px;
`;

const Title = styled.div`
  padding: 1%;
  font-family: Rubik;
  font-size: 14px;
  color: #8798ad;
  font-weight: 500;
  letter-spacing: -0.47px;
  line-height: 23px;
  white-space: nowrap;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: center;
`;

const AutoSpace =  styled.div`
  flex-grow: 1;
`;

const ChartCard = (props) => {
  const { title, chartData, chartHeight, chartWidth, showLegend } = props;
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <AutoSpace />
        {showLegend? <Legend data={chartData}/>: null}
      </Header>
      <LineChart
        lineWeight="4"
        height={chartHeight}
        width={chartWidth}
        data={chartData}
      ></LineChart>
    </Container>
  );
};

export default ChartCard;
