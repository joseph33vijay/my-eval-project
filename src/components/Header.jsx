import './Header.css'; // You’ll style it separately

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">MyLogo</div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
        <button className="signup-btn">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
