import { NextRequest, NextResponse } from "next/server";
const data = [
  {
    id: 1,
    name: "Sepatu 1",
    price: 100000,
  },
  {
    id: 2,
    name: "Sepatu 2",
    price: 200000,
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
