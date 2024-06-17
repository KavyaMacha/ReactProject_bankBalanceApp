import './index.css'

const DenominationItem = ({denomination, onWithdraw}) => {
  const {value} = denomination

  const handleClick = () => {
    onWithdraw(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={handleClick}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
