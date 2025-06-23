import './Card.css';

function Card() {
  const services = [
    {
      icon: '🚀',
      title: 'Launch Fast',
      description: 'Quickly bring your product to market with our expert team.',
    },
    {
      icon: '⚙️',
      title: 'Easy Integrations',
      description: 'Connect with your favorite tools in just a few clicks.',
    },
    {
      icon: '📈',
      title: 'Analytics & Insights',
      description: 'Track, analyze, and optimize your performance effortlessly.',
    },
  ];

  return (
    <section className="card-section">
      <h2 className="card-heading">Our Services</h2>
      <div className="card-grid">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <div className="card-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Card;
