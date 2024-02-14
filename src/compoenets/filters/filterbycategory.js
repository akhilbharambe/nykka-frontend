import React, { useState } from "react";

function FilterByCategory({onSelectCategory}) {
    console.log("onSelectCategory prop:", onSelectCategory);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setSelectedCategory(selected);
    // onSelectCategory(selectedCategory)
  };
 
  return (
    <form
      className="flex flex-col text-base text-black whitespace-nowrap max-w-[262px]"
      style={{ position: "absolute", top: "13%", left: "50%", transform: "translate(-50%, -50%)" }}
    >
      <header className="flex gap-2 justify-between px-4 py-3.5 bg-white rounded-lg border-2 border-violet-600 border-solid">
        <div className="grow my-auto">Filter By Category</div>
      </header>

      <div className="justify-center px-3 py-4 bg-white">
        <select
          name="category"
          className="w-full border rounded-md py-2 px-3 text-gray-700"
          aria-label="Select Category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All</option>
          <option value="makeup">Makeup</option>
          <option value="skincare">Skincare</option>
          <option value="haircare">Haircare</option>
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
          margin-bottom: 20px;
        }
      `}</style>
    </form>
  );
}

export default FilterByCategory;
