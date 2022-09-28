import { ChartComponent, SeriesCollectionDirective, SeriesDirective, BarSeries, Inject, DateTime, Legend, ColumnSeries, Tooltip, Category, DataLabel, RangeColorSettingsDirective, RangeColorSettingDirective } from "@syncfusion/ej2-react-charts"

import { stackedChartData, stackedPrimaryXAxis, stackedPrimaryYAxis, stacked, stackedCustomSeries } from "../../data/dummy"

import { useStateContext } from "../../contexts/ContextProvider"

import { Header } from "../../components"
import StackedChart from "../../components/stacked/Stacked"



const Stacked = () => {


  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Stacked" title="Revenue Breakdown" />
      <div className="w-full">
        <StackedChart />
      </div>
    </div>
  )
}

export default Stacked