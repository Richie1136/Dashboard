import { ChartComponent, SeriesCollectionDirective, SeriesDirective, BarSeries, Inject, DateTime, Legend, ColumnSeries, Tooltip, Category, DataLabel } from "@syncfusion/ej2-react-charts"

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from "../../data/dummy"

import { useStateContext } from "../../contexts/ContextProvider"

import { Header } from "../../components"



const BarChart = () => {

  const { currentMode } = useStateContext()

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Bar" title="Olympic Medal Counts - RIO" />
      <ChartComponent id='Bar Charts' height="420px" background={currentMode === 'Dark' ? '#FFD580' : '#fff'} primaryXAxis={barPrimaryXAxis} primaryYAxis={barPrimaryYAxis} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }}>
        <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default BarChart