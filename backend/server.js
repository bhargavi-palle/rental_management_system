const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("./models/User");
const Property = require("./models/Property");
const Tenant = require("./models/Tenant");
const Payment = require("./models/Payment");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Cloud Connected Successfully");
  })
  .catch((error) => {
    console.log("MongoDB Connection Failed", error);
  });

app.get("/", (req, res) => {
  res.send("Rental Management Backend Running");
});

/* ==========================
   USER REGISTER
========================== */

app.post("/api/register", async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const exists = await User.findOne({ email });

    if (exists) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "Registration Successful",
    });
  } catch (error) {
    res.status(500).json({
      message: "Registration Failed",
      error: error.message,
    });
  }
});

/* ==========================
   USER LOGIN
========================== */

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Login Failed",
      error: error.message,
    });
  }
});

/* ==========================
   PROPERTY APIs
========================== */

app.get("/api/properties", async (req, res) => {
  try {
    const properties =
      await Property.find();

    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({
      message:
        "Failed to fetch properties",
      error: error.message,
    });
  }
});

app.post("/api/properties", async (req, res) => {
  try {
    const property =
      await Property.create(req.body);

    res.status(201).json({
      message:
        "Property Added Successfully",
      property,
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Failed to Add Property",
      error: error.message,
    });
  }
});

app.put(
  "/api/properties/:id",
  async (req, res) => {
    try {
      const property =
        await Property.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );

      res.status(200).json({
        message:
          "Property Updated Successfully",
        property,
      });
    } catch (error) {
      res.status(500).json({
        message:
          "Failed to Update Property",
        error: error.message,
      });
    }
  }
);

app.delete(
  "/api/properties/:id",
  async (req, res) => {
    try {
      await Property.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        message:
          "Property Deleted Successfully",
      });
    } catch (error) {
      res.status(500).json({
        message:
          "Failed to Delete Property",
        error: error.message,
      });
    }
  }
);

/* ==========================
   TENANT APIs
========================== */

app.get("/api/tenants", async (req, res) => {
  try {
    const tenants =
      await Tenant.find();

    res.status(200).json(tenants);
  } catch (error) {
    res.status(500).json({
      message:
        "Failed to fetch tenants",
      error: error.message,
    });
  }
});

app.post("/api/tenants", async (req, res) => {
  try {
    const tenant =
      await Tenant.create(req.body);

    res.status(201).json({
      message:
        "Tenant Added Successfully",
      tenant,
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Failed to Add Tenant",
      error: error.message,
    });
  }
});

app.put(
  "/api/tenants/:id",
  async (req, res) => {
    try {
      const tenant =
        await Tenant.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );

      res.status(200).json({
        message:
          "Tenant Updated Successfully",
        tenant,
      });
    } catch (error) {
      res.status(500).json({
        message:
          "Failed to Update Tenant",
        error: error.message,
      });
    }
  }
);

app.delete(
  "/api/tenants/:id",
  async (req, res) => {
    try {
      await Tenant.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        message:
          "Tenant Deleted Successfully",
      });
    } catch (error) {
      res.status(500).json({
        message:
          "Failed to Delete Tenant",
        error: error.message,
      });
    }
  }
);

/* ==========================
   PAYMENT APIs
========================== */

app.get("/api/payments", async (req, res) => {
  try {
    const payments =
      await Payment.find();

    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({
      message:
        "Failed to fetch payments",
      error: error.message,
    });
  }
});

app.post("/api/payments", async (req, res) => {
  try {
    const payment =
      await Payment.create(req.body);

    res.status(201).json({
      message:
        "Payment Added Successfully",
      payment,
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Failed to Add Payment",
      error: error.message,
    });
  }
});

app.put(
  "/api/payments/:id",
  async (req, res) => {
    try {
      const payment =
        await Payment.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );

      res.status(200).json({
        message:
          "Payment Updated Successfully",
        payment,
      });
    } catch (error) {
      res.status(500).json({
        message:
          "Failed to Update Payment",
        error: error.message,
      });
    }
  }
);

app.delete(
  "/api/payments/:id",
  async (req, res) => {
    try {
      await Payment.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        message:
          "Payment Deleted Successfully",
      });
    } catch (error) {
      res.status(500).json({
        message:
          "Failed to Delete Payment",
        error: error.message,
      });
    }
  }
);

app.listen(process.env.PORT, () => {
  console.log(
    `Server running on port ${process.env.PORT}`
  );
});