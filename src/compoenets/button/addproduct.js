import React, { useState } from "react";
import axios from "axios";

function ProductForm({ onClose , onProductAdded }) {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        name: productName,
        description: productDescription,
        gender: gender,
        category: category,
        price: price,
        picture: image
      };

      const token = localStorage.getItem("token");

      const response = await axios.post(
        "https://nykka-api.onrender.com/api/products",
        formData,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      console.log("Form submitted. Response:", response.data);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An error occurred while submitting the form.");
      }
    }
  };

  return (
    <div className="form-container">
      <form className="main-container" onSubmit={handleSubmit}>
        <div className="image-wrapper">
          <label htmlFor="image" className="label">
            Product Image URL:
          </label>
          <input
            type="text"
            id="image"
            className="input"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            aria-label="Product Image URL"
          />

          <label htmlFor="name" className="label">
            Product Name:
          </label>
          <input
            type="text"
            id="name"
            className="input"
            aria-label="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />

          <label htmlFor="description" className="label">
            Product Description:
          </label>
          <textarea
            id="description"
            className="input"
            aria-label="Product Description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          ></textarea>

          <label htmlFor="gender" className="label">
            Gender:
          </label>
          <select
            id="gender"
            className="input"
            aria-label="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label htmlFor="category" className="label">
            Category:
          </label>
          <select
            id="category"
            className="input"
            aria-label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="makeup">Makeup</option>
            <option value="skincare">Skincare</option>
            <option value="haircare">Haircare</option>
          </select>

          <label htmlFor="price" className="label">
            Price:
          </label>
          <input
            type="number"
            id="price"
            className="input"
            aria-label="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit" className="button">
          Add Product
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
      <style jsx>{`
        .form-container {
          position: fixed;
          top: 50%;
          right: 5%;
          transform: translate(-50%, -50%);
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          padding: 20px;
        }

        .main-container {
          max-width: 500px;
          width: 100%;
        }

        .image-wrapper {
          display: flex;
          flex-direction: column;
        }

        .label {
          font-weight: bold;
          margin-bottom: 5px;
        }

        .input {
          width: 100%;
          margin-bottom: 10px;
        }

        .button {
          padding: 10px;
          background-color: rgba(14, 24, 102, 1);
          color: var(--Colors-Neutral-White, #fff);
          border: none;
          border-radius: 5px;
          font-family: Inter, sans-serif;
          font-weight: 600;
          width: 100%;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

function AddProduct() {
  const [showForm, setShowForm] = useState(false);

  const handleAddProductClick = () => {
    setShowForm(!showForm);
  };
  
  
  
  
  
  return (
    <div>
      <button className="add-product-button" onClick={handleAddProductClick}>
        Add Product
      </button>
      {showForm && <ProductForm onClose={handleAddProductClick} />}
      <style jsx>{`
        .add-product-button {
          position: fixed;
          top: 15%;
          right: 10%;
          padding: 10px 20px;
          font-size: 16px;
          background-color: rgba(14, 24, 102, 1);
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default AddProduct;
