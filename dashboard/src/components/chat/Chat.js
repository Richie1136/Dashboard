import { Button } from '../index'
import { MdOutlineCancel } from 'react-icons/md'
import { chatData } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'


const Chat = () => {

  const { currentColor } = useStateContext()

  return (
    <div className='nav-item absolute right-5 md:right-52 top-16 bg-white dfark:bg-[#42464D] p-8 rounded-lg w-96'>
      <div className='flex-justify-between items-center'>
        <div className='flex-grap-3'>
          <p className='font-semibold text-lg dark:text-gray-200'>Messages</p>
          <button type='button' className='text-white text-xs rounded p-1 px-2 bg-orange'>
            5 New
          </button>
        </div>
      </div>

    </div>
  )
}

export default Chat