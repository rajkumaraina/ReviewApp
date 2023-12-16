import {Component} from 'react'

import './index.css'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]
const Profile = props => {
  const {item} = props
  const {imgUrl, username, companyName, description} = item
  return (
    <div className="profile">
      <img src={imgUrl} alt={username} className="profileImg" />
      <p className="userName">{username}</p>
      <p className="para">{companyName}</p>
      <p className="para">{description}</p>
    </div>
  )
}

class ReviewsCarousel extends Component {
  state = {index: 0}

  changeReviewAdd = () => {
    const {index} = this.state
    if (index < 3) {
      this.setState(prev => ({index: prev.index + 1}))
    } else {
      this.setState(prev => ({index: prev.index}))
    }
  }

  changeReviewSub = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prev => ({index: prev.index - 1}))
    } else {
      this.setState(prev => ({index: prev.index}))
    }
  }

  render() {
    const {index} = this.state
    const list = reviewsList[index]
    return (
      <div className="mainContainer">
        <h1 className="heading">Reviews</h1>
        <div className="profileContainer">
          <button
            onClick={this.changeReviewSub}
            className="button"
            type="button"
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrows"
            />
          </button>
          <Profile item={list} />
          <button
            onClick={this.changeReviewAdd}
            type="button"
            className="button"
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrows"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
