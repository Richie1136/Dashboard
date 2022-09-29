import { MdOutlineCancel } from "react-icons/md"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { useStateContext } from "../../contexts/ContextProvider"
import { cartData } from "../../data/dummy"
import { Button } from '../index'

const Cart = () => {

  const { currentColor } = useStateContext()

  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0">
      <div className="float-right h-screen duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484b52] bg-white md:w-400 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <Button icon={<MdOutlineCancel />} color="rgb(153,171,180)" bgHoverColor="light-gray" size="2xl" borderRadius="50%" />
        </div>
        {cartData?.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
                <img className="rounded-lg h-80 w-24" src={item.image} alt='Cart' />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">{item.category}</p>
                  <div className="flex gap-4 mt-2 items-center">
                    <p className="font-semibold text-lg">{item.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart