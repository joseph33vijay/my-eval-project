const services = [
    {
      title: 'Custom Web Development',
      description: 'Fast, responsive websites tailored to your needs.',
    },
    {
      title: 'UI/UX Design',
      description: 'Modern, intuitive designs focused on user experience.',
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your site’s visibility and search rankings.',
    },
  ];
  
  function Card() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="card p-6 shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Card;
  