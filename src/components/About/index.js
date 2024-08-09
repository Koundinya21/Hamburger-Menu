// Write your code here
import Header from '../Header'
import './index.css'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="about-img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="About"
        className="mobile-img-container"
      />
      <img
        alt="About"
        className="desktop-about-img"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
      />
    </div>
  </div>
)
export default About
// import Header from '../Header'

// import {
//   AboutContainer,
//   AboutImageContainer,
//   MobileAboutImage,
//   DesktopAboutImage,
// } from './styledComponents'

// const About = () => (
//   <AboutContainer>
//     <Header />
//     <AboutImageContainer>
//       <MobileAboutImage
//         src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
//         alt="About"
//       />
//       <DesktopAboutImage
//         src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
//         alt="About"
//       />
//     </AboutImageContainer>
//   </AboutContainer>
// )

// export default About
