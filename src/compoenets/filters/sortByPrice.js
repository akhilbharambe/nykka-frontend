import React, { useState } from "react";

function SortByPrice({ onSelectPrice }) {
  const [selectedPrice, setSelectedPrice] = useState("");
  console.log("gender prop:", onSelectPrice);
  const handlePriceChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedPrice(selectedValue);
    // onSelectPrice(selectedValue); 
  };

  return (
    <form
      className="flex flex-col text-base text-black whitespace-nowrap max-w-[262px]"
      style={{ position: "absolute", top: "10%", right: "20%" }}
    >
      <header className="flex gap-2 justify-between px-4 py-3.5 bg-white rounded-lg border-2 border-violet-600 border-solid">
        <div className="grow my-auto">Sort by Price</div>
      </header>

      <div className="justify-center px-3 py-4 bg-white">
        <select
          name="gender"
          className="w-full border rounded-md py-2 px-3 text-gray-700"
          aria-label="Select Gender"
          value={selectedPrice}
          onChange={handlePriceChange}
        >
          <option value="">All</option>
          <option value="male">Ascending</option>
          <option value="female">Descending</option>
        </select>
      </div>

      <div className="w-full bg-white min-h-[10px]" />

      <style jsx>{`
      .products-container {
          margin-top: 20px;
        }
        .product {
          border: 1px solid #ccc;
          padding: 10px;
          margin-bottom: 10px;
        }
      `}</style>
    </form>
  );
}

export default SortByPrice;
