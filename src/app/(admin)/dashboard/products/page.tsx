"use client";

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
    <div>
      <button
        className="bg-blue-500 p-3 text-white m-5 rounded-lg"
        onClick={() => revalidate()}
      >
        Revalidate
      </button>
    </div>
  );
}
