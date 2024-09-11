import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: { colors: true }, // ดึงข้อมูลสีที่เชื่อมโยงมาด้วย
    });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching products' }, { status: 500 });
  }
}

export async function POST(req) {
  const body = await req.json();
  const { name, price, imageUrls, colors } = body;

  try {
    const product = await prisma.product.create({
      data: {
        name,
        price,
        imageUrls,
        colors: {
          create: colors, // สร้างสีใหม่ที่เชื่อมโยงกับสินค้า
        },
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ error: 'Error creating product' }, { status: 500 });
  }
}
