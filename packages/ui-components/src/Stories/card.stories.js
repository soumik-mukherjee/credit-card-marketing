import React from "react";
import { ChartCard, RubikRegular } from "@project/ui-components";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 1%;
  background-color: rgba(46, 91, 255, 0.07);
`;

export default { title: "Cards with Chart", component: ChartCard };

const sampleData = {
  seriesLength: 5,
  metrics: [
    {
      name: "LoC",
      lineColor: "#2E5BFF",
      circleFillColor: "#FFF",
      maxScaleValue: 200,
      series: [50, 60, 90, 120, 40],
    },
    {
      name: "Stories",
      lineColor: "#8C54FF",
      circleFillColor: "#FFF",
      maxScaleValue: 50,
      series: [6, 8, 15, 32, 3],
    },
  ],
};

export const withChart = () => (
  <Container>
    <RubikRegular />
    <ChartCard
      title="CHANGE ACTIVITY MAP"
      chartData={sampleData}
      chartHeight="600"
      chartWidth="1200"
    ></ChartCard>
  </Container>
);
