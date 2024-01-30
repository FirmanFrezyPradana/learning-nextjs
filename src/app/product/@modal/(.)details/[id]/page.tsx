import Modal from "@/Components/code/Modal";
import { getData } from "@/services/product";

export default async function detail(props: any) {
  const { params } = props;
  const product = await getData(
    `http://localhost:3000/api/product?id=` + params.id
  );
  console.log(product.data);
  return (
    <Modal>
      <img
        src={product.data.image}
        alt=""
        className="w-full object-cover aspect-square col-span-2"
      />
      <div className="bg-white p-4 px-6">
        <h3>{product.data.title}</h3>
        <p>price : ${product.data.prince}</p>
      </div>
    </Modal>
  );
}
