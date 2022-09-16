import { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import avatar from '../../data/avatar.jpeg'
import { Cart, Chat, Notification, UserProfile } from '../index'
import { useStateContext } from '../../contexts/ContextProvider'


const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button className='relative text-xl rounded-full p-3 hover:bg-light-gray' type='button' onClick={customFunc} style={{ color }}>
        <span className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' style={{ background: dotColor }}>
          {icon}
        </span>
      </button>
    </TooltipComponent>
  )
}

const NavBar = () => {

  const { activeMenu, setActiveMenu } = useStateContext()



  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title="Menu" customFunc={() => setActiveMenu((prev) => !prev)} color="blue" icon={<AiOutlineMenu />} />
    </div>
  )
}

export default NavBar