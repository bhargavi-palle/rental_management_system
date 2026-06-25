function Properties() {
    return (
      <div
        className="container"
        style={{ paddingTop: "120px", minHeight: "100vh" }}
      >
        <h1 className="mb-4">Properties</h1>
  
        <div className="card shadow border-0">
          <div className="card-body">
            <h4>Property Management</h4>
  
            <p>
              Add, update and manage rental properties.
            </p>
  
            <table className="table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Location</th>
                  <th>Rent</th>
                  <th>Status</th>
                </tr>
              </thead>
  
              <tbody>
                <tr>
                  <td>Luxury Apartment</td>
                  <td>Bangalore</td>
                  <td>₹18000</td>
                  <td>Available</td>
                </tr>
  
                <tr>
                  <td>Modern Studio</td>
                  <td>Hyderabad</td>
                  <td>₹15000</td>
                  <td>Occupied</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  
  export default Properties;