import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { ObjectId } from "mongodb";

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const product = await prisma.product.findUnique({
      where: { id },
      include: { colors: true }, // ดึงข้อมูลสีที่เชื่อมโยงมาด้วย
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching product" },
      { status: 500 }
    );
  }
}

export async function GET(req) { //ตะกร้าสินค้า
  try {
    const cartItems = await prisma.cart.findMany({
      include: { product: true },
    });

    return NextResponse.json(cartItems);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching cart items" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;

  // ตรวจสอบว่า ID ที่ส่งมาถูกต้องหรือไม่
  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }

  try {
    // ตรวจสอบว่าสินค้ามีอยู่จริงก่อนที่จะลบ
    const product = await prisma.product.findUnique({
      where: { id },
      include: { colors: true }, // รวม colors เพื่อให้สามารถลบได้
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // ลบ colors ที่เชื่อมโยงกับสินค้าก่อน
    await prisma.color.deleteMany({
      where: { productId: id },
    });

    // ลบสินค้าหลังจากลบ colors สำเร็จแล้ว
    await prisma.product.delete({
      where: { id },
    });

    return NextResponse.json({
      message: "Product and related colors deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { error: "Error deleting product", details: error.message },
      { status: 500 }
    );
  }
}
