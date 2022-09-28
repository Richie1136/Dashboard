import { ChartComponent, SeriesCollectionDirective, SeriesDirective, BarSeries, Inject, DateTime, Legend, ColumnSeries, Tooltip, Category, DataLabel, RangeColorSettingsDirective, RangeColorSettingDirective, AccumulationChartComponent, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective } from "@syncfusion/ej2-react-charts"

import { PyramidData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from "../../data/dummy"

import { useStateContext } from "../../contexts/ContextProvider"

import { Header } from "../../components"



const Pyramid = () => {

  const { currentMode } = useStateContext()

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Color Mapping" title="USA CLIMATE - WEATHER BY MONTH" />
      <div className="w-full">
        <AccumulationChartComponent id='Pyramid Chart' height="420px" background={currentMode === 'Dark' ? '#FFD580' : '#fff'} primaryXAxis={ColorMappingPrimaryXAxis} primaryYAxis={ColorMappingPrimaryYAxis} legendSettings={{ mode: 'Range', background: 'white' }} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }}>
          <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={PyramidData}
              dataLabel={{ visible: true, position: 'Inside', name: 'text' }}
              name="Food" xName="x" yName="y" type="Pyramid"
              width="45%" height="80%" explode
              emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
              neckWidth="15%" gapRatio={0.03} cornerRadius={{ topLeft: 10, topRight: 10 }} />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  )
}

export default Pyramid