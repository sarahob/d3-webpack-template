import * as d3 from "d3";
import "./style.css";

import drawChart from "./chart.js";

function main() {
  d3.select("body").append("h1").text("Hello d3.js 👋");

  drawChart();
}

main();
