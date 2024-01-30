import { getData } from "@/services/product";
import Link from "next/link";

type ProductPageProps = { params: { slug: string[] } };

// // script ini dipindah services/products/index
// async function getData() {
//   // const res = await fetch("https://fakestoreapi.com/products", {
//   //   cache: "no-store",
//   // }); // fetch data dari luar
//   const res = await fetch("http://localhost:3000/api/product", {
//     cache: "no-store",
//     next: {
//       //validasi berdasarkan button/tombol
//       tags: ["products"],
//       //validasi berdasarkan wakatu
//       // revalidate : 30 //digunakan untuk validasi waktu update gambar setiap 30 detik data diupdate
//     },
//   }); // fetch data dari localhost

//   if (!res.ok) {
//     throw new Error("Filed to fetch data");
//   }
//   return res.json();
// }
export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;
  const products = await getData("http://localhost:3000/api/product");
  // console.log(products);
  return (
    <div className=" grid grid-cols-3 mt-5 mx-4 grid-rows-3">
      {/* ambl data dari local */}

      {products.data.length > 0 &&
        products.data.map((product: any) => (
          //ambil data dari internet

          // {products.length > 0 &&
          //   products.map((product: any) => (
          <Link
            href={`/product/detail/${product.id}`}
            key={product.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-3"
          >
            <img
              className="p-8 rounded-t-lg object-cover h-96 w-full"
              src={product.image}
              alt="product image"
            />
            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h5>

              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
