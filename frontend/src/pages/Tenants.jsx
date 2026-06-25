function Tenants() {
    return (
      <div
        className="container"
        style={{ paddingTop: "120px", minHeight: "100vh" }}
      >
        <h1 className="mb-4">Tenants</h1>
  
        <div className="card shadow border-0">
          <div className="card-body">
  
            <table className="table">
  
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Property</th>
                </tr>
              </thead>
  
              <tbody>
                <tr>
                  <td>Rahul Sharma</td>
                  <td>rahul@gmail.com</td>
                  <td>Luxury Apartment</td>
                </tr>
  
                <tr>
                  <td>Priya Reddy</td>
                  <td>priya@gmail.com</td>
                  <td>Modern Studio</td>
                </tr>
              </tbody>
  
            </table>
  
          </div>
        </div>
      </div>
    );
  }
  
  export default Tenants;