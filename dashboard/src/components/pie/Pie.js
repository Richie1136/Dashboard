import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationDataLabel, AccumulationLegend, PieSeries, Inject, AccumulationTooltip } from "@syncfusion/ej2-react-charts"

import { useStateContext } from "../../contexts/ContextProvider"

const Pie = ({ id, data, legendVisiblity, height }) => {
  const { currentMode } = useStateContext()

  return (
    <AccumulationChartComponent id={id} tooltip={{ enable: true }} background={currentMode === 'Dark' ? '#33373e' : '#fff'} legendSettings={{ visible: legendVisiblity, background: 'white' }} height={height}>
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective name="Sale" radius="70%" explode explodeOffset="10%" dataLabel={{ visible: true, name: 'text', position: 'Inside', font: { fontWeight: 600, color: '#fff' } }} dataSource={data} xName='x' yName="y" innerRadius="40%" startAngle={0} endAngle={360} />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
}

export default Pie