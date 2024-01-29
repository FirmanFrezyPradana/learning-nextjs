//untuk mengangkap 1 props saja
type DetailProductPageProps = {params : {slug : string}}
// untuk menangkap banyak props pada folder [slug] ubah menjadi [...slug] maka seluruh parameter akan mudak ditangkap
export default function DetailProduk(props:DetailProductPageProps){
    const {params} = props;
    return(
        <div className="">

            <h1>
            detail produk page
            </h1>
            <p>{params.slug[0]}</p>
            <p>{params.slug[1]}</p>
            <p>{params.slug[2]}</p>
            </div>
    )
}
