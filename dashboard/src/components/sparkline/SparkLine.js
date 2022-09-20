import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'


const SparkLine = ({ currentColor, type, height, width, data, color, id }) => {
  return (
    <SparklineComponent tooltipSettings={{ visible: true, format: '${x}: data ${y}', trackLineSettings: { visible: true } }} type={type} xName='x' yName='y' dataSource={data} border={{ color: currentColor, width: 2 }} id={id} height={height} width={width} lineWidth={1} valueType="Numeric" fill={color}>
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  )
}

export default SparkLine