import React, { useState } from "react";

function FilterByGen({ onSelectGender }) {
  const [selectedGender, setSelectedGender] = useState("");
  console.log("gender prop:", onSelectGender);
  const handleGenderChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedGender(selectedValue);
    onSelectGender(selectedValue); 
  };

  return (
    <form
      className="flex flex-col text-base text-black whitespace-nowrap max-w-[262px]"
      style={{ position: "absolute", top: "10%", left: "20%" }}
    >
      <header className="flex gap-2 justify-between px-4 py-3.5 bg-white rounded-lg border-2 border-violet-600 border-solid">
        <div className="grow my-auto">Filter By Gender</div>
      </header>

      <div className="justify-center px-3 py-4 bg-white">
        <select
          name="gender"
          className="w-full border rounded-md py-2 px-3 text-gray-700"
          aria-label="Select Gender"
          value={selectedGender}
          onChange={handleGenderChange}
        >
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
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

export default FilterByGen;
