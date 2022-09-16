import './App.css';
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { LineChart, AreaChart, PieChart, BarChart, FinancialChart, ColorMappingChart, Pyramid, Stacked, Employees, Orders, Calendar, Customers, KanBan, Ecommerce, ColorPicker, Editor } from './components/index'
import { NavBar, Footer, SideBar, ThemeSettings } from './components/index'

function App() {

  const isMenuActive = false

  return (
    <div className='flex relative dark:bg-main-dark-bg'>
      <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
        <TooltipComponent content="Settings" position='Top'>
          <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
            style={{ backgroundColor: 'blue', borderRadius: '50%' }}
          >
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>
      {isMenuActive ? (
        <div className='w-72 fixed sidebar dark:bg-secondary-daek-bg bg-white'>
          <SideBar />
        </div>
      ) : (
        <div className='w-0 secondary-dark-bg'>
          <SideBar />
        </div>
      )}
      <div className={
        `dark-bg-main-bg bg-main-bg min-h-screen w-full ${isMenuActive ? 'md:ml-72' : 'flex-2'}`
      }>
        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
          <NavBar />
        </div>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Ecommerce />} />
          <Route path='/ecommerce' element={<Ecommerce />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/employees' element={<Employees />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/kanban' element={<KanBan />} />
          <Route path='/editor' element={<Editor />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/color-picker' element={<ColorPicker />} />
          <Route path='/line' element={<LineChart />} />
          <Route path='/area' element={<AreaChart />} />
          <Route path='/bar' element={<BarChart />} />
          <Route path='/pie' element={<PieChart />} />
          <Route path='/financial' element={<FinancialChart />} />
          <Route path='/color-mapping' element={<ColorMappingChart />} />
          <Route path='/pyramid' element={<Pyramid />} />
          <Route path='/stacked' element={<Stacked />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
