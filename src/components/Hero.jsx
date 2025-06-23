import './Hero.css';
import heroImage from '../assets/hero-image.jpg'; // Use any image for now

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Grow Your Business with Us</h1>
          <p>We help companies scale faster</p>
          <button className="hero-btn">Get Started</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Business growth" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
