function Footer() {
  return (
    <footer
      style={{
        background: "#111827",
        color: "white",
        marginTop: "50px",
      }}
    >
      <div className="container py-4">
        <div className="row">

          <div className="col-md-4">
            <h5>RentalHub</h5>
            <p>
              Modern property and tenant management platform.
            </p>
          </div>

          <div className="col-md-4">
            <h5>Quick Links</h5>

            <ul className="list-unstyled">
              <li>Home</li>
              <li>Properties</li>
              <li>Tenants</li>
              <li>Payments</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Contact</h5>

            <p>
              support@rentalhub.com
            </p>

            <p>
              +91 9000080000
            </p>
          </div>

        </div>

        <hr />

        <div className="text-center">
          © 2026 RentalHub. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;