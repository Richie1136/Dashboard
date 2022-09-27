import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, Inject, DateTime, Legend, Tooltip } from "@syncfusion/ej2-react-charts"

import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from "../../data/dummy"



const LineCharts = () => {
  return (
    <ChartComponent id='line-chart' height="420px" primaryXAxis={LinePrimaryXAxis} primaryYAxis={LinePrimaryYAxis}>
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineCharts