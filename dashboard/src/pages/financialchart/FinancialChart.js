import { ChartComponent, SeriesCollectionDirective, SeriesDirective, BarSeries, Inject, DateTime, Legend, ColumnSeries, Tooltip, Category, DataLabel, HiloSeries, Logarithmic, Crosshair, Zoom } from "@syncfusion/ej2-react-charts"

import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from "../../data/dummy"

import { useStateContext } from "../../contexts/ContextProvider"

import { Header } from "../../components"

const date1 = new Date('2017, 1, 1')

const filterValue = (value) => {
  if (value.x >= date1) {
    return value.x, value.high, value.low
  }
}

const returnValue = financialChartData.filter(filterValue)

const FinancialChart = () => {

  const { currentMode } = useStateContext()

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Financial" title="AAPL Historical" />
      <div className="w-full">
        <ChartComponent id='Financial Chart' height="420px" background={currentMode === 'Dark' ? '#FFD580' : '#fff'} crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }} primaryXAxis={FinancialPrimaryXAxis} primaryYAxis={FinancialPrimaryYAxis} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }}>
          <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
          {/* <FinancialChart /> */}
          <SeriesCollectionDirective>
            <SeriesDirective dataSource={returnValue} xName="x" yName="low" name="Apple Inc." type="Hilo" low="low" high="high" />
          </SeriesCollectionDirective>
        </ChartComponent>

      </div>
    </div>
  )
}

export default FinancialChart