import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [properties, setProperties] = useState([]);
  const [tenants, setTenants] = useState([]);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const propertyRes = await axios.get(
        "https://rental-management-system-j8qk.onrender.com/api/properties"
      );

      const tenantRes = await axios.get(
        "https://rental-management-system-j8qk.onrender.com/api/tenants"
      );

      const paymentRes = await axios.get(
        "https://rental-management-system-j8qk.onrender.com/api/payments"
      );

      setProperties(propertyRes.data);
      setTenants(tenantRes.data);
      setPayments(paymentRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  const totalRevenue = payments.reduce(
    (sum, payment) => sum + Number(payment.amount || 0),
    0
  );

  const occupancyRate =
    properties.length > 0
      ? ((tenants.length / properties.length) * 100).toFixed(0)
      : 0;

  return (
    <div
      className="container"
      style={{
        paddingTop: "120px",
        minHeight: "100vh",
      }}
    >
      <h1 className="mb-4 fw-bold">
        Rental Management Dashboard
      </h1>

      {/* Stats Cards */}

      <div className="row">

        <div className="col-md-3 mb-4">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <h2>{properties.length}</h2>
              <p className="text-muted mb-0">
                Properties
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <h2>{tenants.length}</h2>
              <p className="text-muted mb-0">
                Tenants
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <h2>₹{totalRevenue}</h2>
              <p className="text-muted mb-0">
                Revenue
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <h2>{occupancyRate}%</h2>
              <p className="text-muted mb-0">
                Occupancy
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Properties */}

      <div className="card shadow border-0 mb-4">
        <div className="card-body">
          <h4 className="mb-3">
            Recent Properties
          </h4>

          {properties.length === 0 ? (
            <p>No properties added yet.</p>
          ) : (
            <div className="table-responsive">
              <table className="table">

                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Rent</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {properties.slice(0, 5).map((property) => (
                    <tr key={property._id}>
                      <td>{property.propertyName}</td>
                      <td>{property.location}</td>
                      <td>₹{property.rent}</td>
                      <td>{property.status}</td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          )}
        </div>
      </div>

      {/* Tenants */}

      <div className="card shadow border-0 mb-4">
        <div className="card-body">
          <h4 className="mb-3">
            Recent Tenants
          </h4>

          {tenants.length === 0 ? (
            <p>No tenants added yet.</p>
          ) : (
            <div className="table-responsive">
              <table className="table">

                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Property</th>
                  </tr>
                </thead>

                <tbody>
                  {tenants.slice(0, 5).map((tenant) => (
                    <tr key={tenant._id}>
                      <td>{tenant.tenantName}</td>
                      <td>{tenant.email}</td>
                      <td>{tenant.propertyName}</td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          )}
        </div>
      </div>

      {/* Payments */}

      <div className="card shadow border-0">
        <div className="card-body">
          <h4 className="mb-3">
            Recent Payments
          </h4>

          {payments.length === 0 ? (
            <p>No payments recorded yet.</p>
          ) : (
            <div className="table-responsive">
              <table className="table">

                <thead>
                  <tr>
                    <th>Tenant</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {payments.slice(0, 5).map((payment) => (
                    <tr key={payment._id}>
                      <td>{payment.tenantName}</td>
                      <td>₹{payment.amount}</td>
                      <td>{payment.status}</td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default Dashboard;