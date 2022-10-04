import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from "@syncfusion/ej2-react-charts"

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from "../../data/dummy"

import { useStateContext } from "../../contexts/ContextProvider"

const Stacked = ({ width, height }) => {

  const { currentMode } = useStateContext()

  return (
    <ChartComponent legendSettings={{ backgroundColor: 'white' }} tooltip={{ enable: true }} id="charts" background={currentMode === 'Dark' ? '#33373e' : '#fff'} primaryXAxis={stackedPrimaryXAxis} primaryYAxis={stackedPrimaryYAxis} chartArea={{ border: { width: 0 } }} width={width} height={height}>
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries?.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked