"use server";
import { auth } from "@/features/auth/models/auth";
import db from "@/shared/prisma/db";
import { AuthError } from "next-auth";
import { CartError } from "./errors";

export async function addToCart(variantId: string) {
  const session = await auth();

  if (!session) {
    throw new AuthError("Для добавления товара в корзину авторизуйтесь");
  }

  await db.$transaction(async (tx) => {
    const existingProduct = await tx.cartProduct.findFirst({
      where: {
        productVariantId: variantId,
        cart: {
          userId: session.user.id,
        },
      },
    });

    if (existingProduct) {
      throw new CartError("Товар уже в корзине");
    }

    const cart = await tx.cart.findUnique({
      where: { userId: session.user.id },
      select: { id: true },
    });

    if (!cart) {
      throw new CartError("Корзина не найдена");
    }

    await tx.cartProduct.create({
      data: {
        productVariantId: variantId,
        cartId: cart.id,
      },
    });
  });

  return { success: true };
}
