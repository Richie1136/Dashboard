import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, ColumnSeries, Tooltip, Category, DataLabel, RangeColorSettingsDirective, RangeColorSettingDirective } from "@syncfusion/ej2-react-charts"

import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from "../../data/dummy"

import { useStateContext } from "../../contexts/ContextProvider"

import { Header } from "../../components"



const ColorMappingChart = () => {

  const { currentMode } = useStateContext()

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Color Mapping" title="USA CLIMATE - WEATHER BY MONTH" />
      <div className="w-full">
        <ChartComponent id='Color Mapping Chart' height="420px" background={currentMode === 'Dark' ? '#FFD580' : '#fff'} primaryXAxis={ColorMappingPrimaryXAxis} primaryYAxis={ColorMappingPrimaryYAxis} legendSettings={{ mode: 'Range', background: 'white' }} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }}>
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective>
            <SeriesDirective dataSource={colorMappingData[0]} name="USA" xName="x" yName="y" type="Column" cornerRadius={{ topLeft: 10, topRight: 10 }} />
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item} />)}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default ColorMappingChart