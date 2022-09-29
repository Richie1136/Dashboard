import { useStateContext } from "../../contexts/ContextProvider"

const Button = ({ color, bgColor, text, borderRadius, size, icon, bgHoverColor, width }) => {
  const { setIsClicked, initialState } = useStateContext()

  return (
    <button className={`text-${size} p-3 w=${width} hover: drop-shadow-xl hover:bg-${bgHoverColor}`} type="button" onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color: color, borderRadius: borderRadius }}>
      {icon} {text}
    </button>

  )
}

export default Button