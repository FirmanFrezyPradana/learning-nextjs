"use client";

import React from "react";

export default function AdminProduk() {
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products",
      {
        method: "POST",
      }
    );
    console.log("succes");
  };
  return (
    <div className="w-3/6 h-96 bg-gray-300 rounded-[12px] flex justify-center items-center">
      <button
        className="bg-blue-500 p-3 mr-5 text-white m-5 rounded-lg"
        onClick={() => revalidate()}
      >
        Revalidate
      </button>
    </div>
  );
}
