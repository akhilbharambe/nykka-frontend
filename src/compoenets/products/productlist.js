import React, { useEffect, useState } from "react";
import FilterByGen from "../filters/filterByGen";
import FilterByCategory from "../filters/filterbycategory";
import SortByPrice from "../filters/sortByPrice";
import axios from "axios";
import AddProduct from "../button/addproduct";

function Products(props) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://nykka-backend.onrender.com/api/products");
        setProducts(response.data);
        setFilteredProducts(response.data); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const filterByGender = (gender) => {
    setSelectedGender(gender);
    if (gender === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.gender === gender);
      setFilteredProducts(filtered);
    }
  };

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const handleEdit = (productId) => {
    console.log("Edit product with id:", productId);
    // Handle edit action here
  };

  const handleDelete = async (productId) => {
    try {
      const token = localStorage.getItem("token");
  
      await axios.delete(`https://nykka-backend.onrender.com/api/products/${productId}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
  
      const updatedProducts = products.filter((product) => product._id !== productId);
      setProducts(updatedProducts);
      setFilteredProducts(updatedProducts);
      
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  const sortProductsByPrice = (order) => {
    if (order === "ascending") {
      const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
      setFilteredProducts(sorted);
    } else if (order === "descending") {
      const sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
      setFilteredProducts(sorted);
    }
  };



  // Function to handle price sorting change
  const handlePriceChange = (order) => {
    setSelectedPrice(order);
    sortProductsByPrice(order);
  };

  

  return (
    <div className="container">
      <FilterByGen onSelectGender={filterByGender} />
      <FilterByCategory onSelectCategory={filterByCategory} />
      <SortByPrice onSelectPrice={handlePriceChange} />
      <table className="table">
        <thead>
          <tr>
            <th>Products</th>
            <th>Gender</th>
            <th>Category</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.gender}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>
                <button onClick={() => handleEdit(product.id)}>Edit</button>
                <button onClick={() => handleDelete(product._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
      .container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .table {
          width: 70%;
          border-collapse: collapse;
        }

        .table th,
        .table td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }

        .table th {
          background-color: #f2f2f2;
        }
      `}</style>
    </div>
  );
}

export default Products;
