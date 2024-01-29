import { NextRequest, NextResponse } from "next/server";
const data = [
  {
    id: 1,
    title: "Sepatu 1",
    price: 100000,
    image : "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_441,c_limit/01ffec46-0c01-4981-8808-a4cd35a57e96/dunk-low-retro-shoes-69h36X.png"
  },
  {
    id: 2,
    title: "Sepatu 2",
    price: 200000,
    image : "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_441,c_limit/03141f2d-3ccd-49a3-9066-69a15695854c/dunk-low-retro-shoes-4vdSPt.png"
  },
];

// export async function GET() { // biasa
export async function GET(request: NextRequest) {
  //membuat request
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduk = data.find((item) => item.id === Number(id));
    if (detailProduk) {
      return NextResponse.json({
        status: 200,
        message: "succes",
        data: detailProduk,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }
  return NextResponse.json({ status: 200, message: "succes", data });
}
