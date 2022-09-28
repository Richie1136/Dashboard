import { ChartComponent, SeriesCollectionDirective, SeriesDirective, PieSeries, Inject, DateTime, Legend, ColumnSeries, Tooltip, Category, DataLabel } from "@syncfusion/ej2-react-charts"

import { pieChartData } from "../../data/dummy"

import { useStateContext } from "../../contexts/ContextProvider"

import { Header } from "../../components"
import Pie from "../../components"



const PieChart = () => {

  const { currentMode } = useStateContext()

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Bar" title="Olympic Medal Counts - RIO" />
      <div className="w-full">
        <Pie id='chart-pie' data={pieChartData} legendVisiblity height='full' />

      </div>
    </div>
  )
}

export default PieChart