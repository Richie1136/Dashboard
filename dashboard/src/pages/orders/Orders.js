import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'

import { ordersData, ordersGrid } from '../../data/dummy'

import { Header } from '../../components'

const Orders = () => (
  <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category="Page" title="Orders" />
    <div className='dark:bg-secondary-dark-bg bg-white'>
      <GridComponent style={{ backgroundColor: 'black' }} id="gridcomp" dataSource={ordersData} allowPaging allowSorting>
        <ColumnsDirective >
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit]} />
      </GridComponent>
    </div>
  </div>
)

export default Orders