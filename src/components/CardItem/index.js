// Write your code here.
import './index.css'

const CardDetails = props => {
  const {cards} = props
  const {title, description, imgUrl, className} = cards
  return (
    <li className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="image">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardDetails
