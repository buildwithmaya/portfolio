import  profleImage from '../assets/portfolioImage.png';
import './Home.css';
import Card from '../Components/Card/Card.jsx';
import '../Components/Card/cardData.js';
import { CARD_INFORMATION } from '../Components/Card/cardData.js';
export default function Home() {
  return (
   <>
    <section className="hero">
        <div className='top-section'>
            <div className="hero-left">
                <h2>Hello I'm</h2>
                <strong>Sheelah Mogaka</strong>
                <p>Welcome to my portfolio website.<br></br> Explore my projects and get in touch!</p>

                <div className="hero-buttons">
                    <button className="primary" onClick={() => (window.location.href = 'projects')}>
                        View My Work
                    </button>
                    <button className="secondary" onClick={() => (window.location.href = 'contact')}>
                        Contact Me
                    </button>
                </div>
            </div>
            <div className="hero-right">
                <img src={profleImage} alt="Profile" className="profile-image" />
            </div>


        </div>
        
        <div className="cards-section">
            {CARD_INFORMATION.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>

    </section>
   </>
  );  
}