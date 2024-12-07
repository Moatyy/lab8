import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    favoriteSeason: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    // First Name Validation
    if (!formData.firstName || formData.firstName.trim() === "") {
      newErrors.firstName = "First Name is required.";
    } else if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      newErrors.firstName = "First Name must contain only alphabets.";
    }

    // Last Name Validation
    if (!formData.lastName || formData.lastName.trim() === "") {
      newErrors.lastName = "Last Name is required.";
    } else if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      newErrors.lastName = "Last Name must contain only alphabets.";
    }

    // Email Validation
    if (!formData.email || formData.email.trim() === "") {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    // Password Validation
    if (!formData.password || formData.password.trim() === "") {
      newErrors.password = "Password is required.";
    } else if (
      !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must contain at least 1 uppercase letter, 1 number, 1 special character, and be 8+ characters long.";
    }

    // Favorite Season Validation
    if (!formData.favoriteSeason || formData.favoriteSeason === "") {
      newErrors.favoriteSeason = "Please select your favorite season.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const validationErrors = validate(); // Call the validation function
    if (Object.keys(validationErrors).length === 0) {
      setErrors({}); // Clear errors if validation passes
      setSubmitted(true); // Set submitted to true to display the Profile page
    } else {
      setErrors(validationErrors); // Show validation errors if any
    }
  };

  if (submitted) {
    return (
      <div>
        <h2>Profile Page</h2>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
        <p>Favorite Season: {formData.favoriteSeason}</p>
        {/* Link to the dashboard.html file */}
        <a href="/dashboard.html">Go to Dashboard</a>
      </div>
    );
  }

  return (
    <div>
      <h1>User Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
        {errors.firstName && <div>{errors.firstName}</div>}

        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
        {errors.lastName && <div>{errors.lastName}</div>}

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        {errors.email && <div>{errors.email}</div>}

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {errors.password && <div>{errors.password}</div>}

        <select
          value={formData.favoriteSeason}
          onChange={(e) =>
            setFormData({ ...formData, favoriteSeason: e.target.value })
          }
        >
          <option value="">Select Favorite Season</option>
          <option value="Spring">Spring</option>
          <option value="Fall">Fall</option>
          <option value="Winter">Winter</option>
        </select>
        {errors.favoriteSeason && <div>{errors.favoriteSeason}</div>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
