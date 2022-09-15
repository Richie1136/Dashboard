import './App.css';
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

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
          SideBar
        </div>
      ) : (
        <div className='w-0 secondary-dark-bg'>
          SideBar
        </div>
      )}
      <div className={
        `dark-bg-main-bg bg-main-bg min-h-screen w-full ${isMenuActive ? 'md:ml-72' : 'flex-2'}`
      }>

      </div>
    </div >
  );
}

export default App;
