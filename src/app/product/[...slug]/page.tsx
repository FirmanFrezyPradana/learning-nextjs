// //untuk mengangkap 1 props saja
// type DetailProductPageProps = {params : {slug : string}}
// // untuk menangkap banyak props pada folder [slug] ubah menjadi [...slug] maka seluruh parameter akan mudak ditangkap
// export default function DetailProduk(props:DetailProductPageProps){
//     const {params} = props;
//     return(
//         <div className="">

//             <h1>
//             detail produk page
//             </h1>
//             <p>{params.slug[0]}</p>
//             <p>{params.slug[1]}</p>
//             <p>{params.slug[2]}</p>
//             </div>
//     )
// }
type ProductPageProps = {params : {slug : string[]}}
async function getData() {
    const res = await fetch("https://fakestoreapi.com/products");
    if(!res.ok){
        throw new Error("Filed to fetch data")
    }
    return res.json();
}
export default async function ProductPage(props : ProductPageProps) {
    const {params} = props;
    const products = await getData();
    // console.log(products);
    return(
        <div>
            {/* <h1>{params.slug ? "Detail Product Page" : "Product page"}</h1> */}
            {products.length > 0 && products.map((product:any)=>{
                <div key={product.id}>
                    <h4>(product.title)</h4>
                </div>
            })}
        </div>
    );
};