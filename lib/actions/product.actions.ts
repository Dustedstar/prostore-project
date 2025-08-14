"use server";
import { convertToPlainObject } from "../utils";
import { prisma } from "@/prisma/client";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

// Latest products

export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(data);
}
