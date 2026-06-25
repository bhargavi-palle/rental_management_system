function Payments() {
    return (
      <div
        className="container"
        style={{ paddingTop: "120px", minHeight: "100vh" }}
      >
        <h1 className="mb-4">Payments</h1>
  
        <div className="card shadow border-0">
          <div className="card-body">
  
            <table className="table">
  
              <thead>
                <tr>
                  <th>Tenant</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
  
              <tbody>
                <tr>
                  <td>Rahul Sharma</td>
                  <td>₹18000</td>
                  <td>Paid</td>
                </tr>
  
                <tr>
                  <td>Priya Reddy</td>
                  <td>₹15000</td>
                  <td>Pending</td>
                </tr>
              </tbody>
  
            </table>
  
          </div>
        </div>
      </div>
    );
  }
  
  export default Payments;