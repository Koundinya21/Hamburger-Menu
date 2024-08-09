// Write your code here
import './index.css'
import Header from '../Header'

const NotFound = () => (
  <div className="not-found-container">
    <Header />
    <div className="not-found-content-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="image"
      />
      <h1 className="heading">Lost Your Way?</h1>
      <p className="description">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
)

export default NotFound
