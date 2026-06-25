import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const stats = [
    {
      number: "250+",
      title: "Properties Managed",
    },
    {
      number: "120+",
      title: "Happy Tenants",
    },
    {
      number: "₹12L+",
      title: "Monthly Revenue",
    },
    {
      number: "95%",
      title: "Occupancy Rate",
    },
  ];

  const properties = [
    {
      title: "Luxury Apartment",
      location: "Bangalore",
      price: "₹18,000/month",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    {
      title: "Modern Studio",
      location: "Hyderabad",
      price: "₹15,000/month",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    },
    {
      title: "Family Residence",
      location: "Chennai",
      price: "₹25,000/month",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
  ];

  return (
    <div>

      {/* HERO SECTION */}
      <section className="hero-section">

        <div className="hero-overlay">

          <div className="container">

            <div className="hero-content">

              <h1>
                Manage Your Properties
                <br />
                With Complete
                <span> Peace of Mind</span>
              </h1>

              <p>
                RentalHub is your all-in-one solution for managing
                properties, tenants and rental payments efficiently.
                Save time, reduce manual work and grow your rental
                business with confidence.
              </p>

              <div className="hero-buttons">

                <button
                  className="btn btn-success btn-lg"
                  onClick={() => navigate("/login")}
                >
                  Get Started
                </button>

                <button
                  className="btn btn-outline-light btn-lg"
                  onClick={() => navigate("/register")}
                >
                  Register
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="container stats-section">

        <div className="row">

          {stats.map((item, index) => (
            <div className="col-md-3 mb-4" key={index}>

              <div className="stat-card">

                <h2>{item.number}</h2>

                <p>{item.title}</p>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* FEATURED PROPERTIES */}

      <section className="container py-5">

        <h2 className="section-title">
          Featured Properties
        </h2>

        <p className="section-subtitle">
          Discover our most popular rental properties
        </p>

        <div className="row">

          {properties.map((property, index) => (
            <div className="col-md-4 mb-4" key={index}>

              <div className="property-card">

                <img
                  src={property.image}
                  alt={property.title}
                  className="property-image"
                />

                <div className="property-body">

                  <h4>{property.title}</h4>

                  <p>{property.location}</p>

                  <h5>{property.price}</h5>

                  <button className="btn btn-success">
                    View Details
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* WHY CHOOSE */}

      <section className="container pb-5">

        <div className="why-card">

          <h2>Why Choose RentalHub?</h2>

          <div className="row mt-4">

            <div className="col-md-3">
              <h5>🏠 Properties</h5>
              <p>Manage unlimited properties easily.</p>
            </div>

            <div className="col-md-3">
              <h5>👨‍💼 Tenants</h5>
              <p>Track all tenant records securely.</p>
            </div>

            <div className="col-md-3">
              <h5>💳 Payments</h5>
              <p>Monitor rent payments and dues.</p>
            </div>

            <div className="col-md-3">
              <h5>📊 Reports</h5>
              <p>Get complete business insights.</p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;