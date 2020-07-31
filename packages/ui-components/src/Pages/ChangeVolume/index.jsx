import React from "react";
import styled from "styled-components";
import { ChartCard, RubikRegular, Memo } from "@project/ui-components";
import IconTick from "../../Assets/Images/IconTick.png";
import IconLightning from "../../Assets/Images/IconLightning.png";
import IconPlot from "../../Assets/Images/IconPlot.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1%;
  justify-content: space-around;
`;

const Title = styled.div`
  padding: 1% 1% 2% 1%;
  font-family: Rubik;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: -0.47px;
  line-height: 23px;
  white-space: nowrap;
`;

const TitleBar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.01%;
  width: 100%;
`;

const AutoSpace = styled.div`
  flex-grow: 1;
`;

const ChartCardContainer = styled.div`
`;

const MemoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0% 0% 2% 0%;
  width: 1348px;
`;

const sampleData = {
  seriesLength: 6,
  metrics: [
    {
      name: "LoC",
      longName: "Lines of Code",
      lineColor: "#2E5BFF",
      circleFillColor: "#FFF",
      maxScaleValue: 200,
      series: [50, 60, 90, 120, 40, 175],
    },
    {
      name: "Stories",
      longName: "Stories",
      lineColor: "#8C54FF",
      circleFillColor: "#FFF",
      maxScaleValue: 50,
      series: [6, 8, 15, 32, 3, 48],
    },
  ],
};

const ChangeVolume = () => {
  return (
    <Container>
      <RubikRegular />
      <TitleBar>
        <Title>Change Volume</Title>
        <AutoSpace />
      </TitleBar>
      <MemoContainer>
        <Memo
          infoText="300k LoC"
          detailText="Total changed this cycle"
          memoIcon={IconPlot}
        />
        <Memo
          infoText="110 stories"
          detailText="Total released this cycle"
          memoIcon={IconLightning}
        />
        <Memo
          infoText="60k/week"
          detailText="Avg code changes this cycle"
          memoIcon={IconTick}
        />
        <Memo
          infoText="22/week"
          detailText="Avg stories released this cycle"
          memoIcon={IconTick}
        />
      </MemoContainer>
      <ChartCardContainer>
        <ChartCard
          title="CHANGE ACTIVITY MAP"
          chartData={sampleData}
          chartHeight="300"
          chartWidth="1200"
          showLegend
        ></ChartCard>
      </ChartCardContainer>
    </Container>
  );
};

export default ChangeVolume;
