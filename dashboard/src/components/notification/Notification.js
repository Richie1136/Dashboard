import { MdOutlineCancel } from "react-icons/md"
import { Button } from '../index'
import { chatData } from "../../data/dummy"
import { useStateContext } from "../../contexts/ContextProvider"


const Notification = () => {

  const { currentColor } = useStateContext()

  return (
    <div className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Notifications</p>
        </div>
      </div>
    </div>
  )
}

export default Notification