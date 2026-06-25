import { useState } from "react";

function Profile() {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [user] = useState(storedUser || {});

  return (
    <div
      className="container"
      style={{
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "50px",
      }}
    >
      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow border-0">

            <div
              className="card-header text-center text-white"
              style={{
                background: "#2563eb",
              }}
            >
              <h3 className="mb-0">
                My Profile
              </h3>
            </div>

            <div className="card-body text-center p-4">

              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: "#e5e7eb",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "auto",
                  fontSize: "45px",
                }}
              >
                👤
              </div>

              <h4 className="mt-3">
                {user?.fullName || "Property Manager"}
              </h4>

              <p className="text-muted">
                Rental Management User
              </p>

              <hr />

              <div className="text-start">

                <p>
                  <strong>Full Name:</strong>{" "}
                  {user?.fullName || "Not Available"}
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  {user?.email || "Not Available"}
                </p>

                <p>
                  <strong>Role:</strong>{" "}
                  Property Manager
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  Active
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;