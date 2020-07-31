import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import {
  select,
  line,
  axisBottom,
  scaleLinear,
  //curveCardinal,
  axisLeft,
  axisRight,
} from "d3";

const StyledSvg = styled.svg`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding: 2%;
  overflow: visible;

  g {
    font-family: Rubik;
    font-size: 15px;
    color: #b0bac9;
    font-weight: 400;
    letter-spacing: -0.47px;
    line-height: 22px;
  }
`;

const LineChart = (props) => {
  const { data, height, width } = props;
  const chartSvgRef = useRef();

  useEffect(() => {
    const chartSvgNode = select(chartSvgRef.current);
    const xScale = scaleLinear()
      .domain([0, data.seriesLength - 1])
      .range([0, width]);

    const xAxis = axisBottom(xScale)
      .ticks(data.seriesLength)
      .tickFormat((index) => `Week ${index}`);

    chartSvgNode
      .select(".x-axis")
      .style("transform", `translateY(${height}px)`)
      .call(xAxis);

    let yScales = [];
    data.metrics.forEach((metric, index) => {
      const { series, maxScaleValue } = metric;

      const yScale = scaleLinear()
        .domain([0, maxScaleValue])
        .range([height, 0]);

      yScales.push(yScale);

      const getX = (value, index) => xScale(index);

      const getY = (value) => yScale(value);

      const pathName = `path${index}_${metric.name}`;
      const circleName = `circle${index}_${metric.name}`;

      const chartLine = line()
        .x(getX)
        .y(getY);
      //.curve(curveCardinal);

      chartSvgNode
        .selectAll(pathName)
        .data([series])
        .join("path")
        .attr("d", chartLine)
        .attr("fill", "none")
        .attr("fill-opacity", "0.1")
        .attr("stroke", metric.lineColor)
        .attr("stroke-width", "2");
      chartSvgNode
        .selectAll(circleName)
        .data(series)
        .join("circle")
        .attr("cx", getX)
        .attr("cy", getY)
        .attr("r", "4")
        .style("fill", metric.circleFillColor)
        .style("stroke", metric.lineColor)
        .style("stroke-width", "2");
    });
    const yAxisRight = axisRight(yScales[1]);
    const yAxisLeft = axisLeft(yScales[0]).tickFormat((loc) => `${loc}k`);

    chartSvgNode.select(".y-axis-left").call(yAxisLeft);

    chartSvgNode
      .select(".y-axis-right")
      .style("transform", `translateX(${width}px`)
      .call(yAxisRight);

    // render gridlines for x-axis
    chartSvgNode
      .select(".x-axis-gridlines")
      .style("transform", `translateY(${height}px)`)
      .style("stroke-opacity", "0.7")
      .style("stroke-dasharray", "10,10")
      .style("shape-rendering", "crispEdges")
      .call(
        axisBottom(xScale)
          .ticks(data.seriesLength)
          .tickSize(-height)
          .tickFormat("")
      );

    // render gridlines for y-axis
    chartSvgNode
      .select(".y-axis-gridlines")
      .style("stroke-opacity", "0.7")
      .style("stroke-dasharray", "5,5")
      .style("shape-rendering", "crispEdges")
      .style("transform", `translateX(${width}px`)
      .call(
        axisLeft(yScales[0])
          .tickSize(width)
          .tickFormat("")
      );
  }, [data, height, width]);
  return (
    <StyledSvg ref={chartSvgRef} height={height} width={width}>
      <g className="x-axis" />
      <g className="y-axis-left" />
      <g className="y-axis-right" />
      <g className="x-axis-gridlines" />
      <g className="y-axis-gridlines" />
    </StyledSvg>
  );
};

export default LineChart;
