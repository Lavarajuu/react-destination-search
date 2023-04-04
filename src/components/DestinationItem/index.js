// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {name, imgUrl} = destinationItem
  return (
    <li className="each-item-container">
      <div>
        <img className="img" alt={name} src={imgUrl} />
        <p className="name">{name}</p>
      </div>
    </li>
  )
}
export default DestinationItem
