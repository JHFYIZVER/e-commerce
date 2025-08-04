import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import Link from "next/link";
import React from "react";

const EmptyCart = () => {
  return (
    <Card className="text-center mx-auto">
      <CardHeader>
        <CardTitle>В корзине пока ничего нет</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription>
          Перейдите в каталог и добавте товар в корзмину
        </CardDescription>
        <CardAction>
          <Link
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3"
            href="/catalog"
          >
            В каталог
          </Link>
        </CardAction>
      </CardContent>
    </Card>
  );
};

export default EmptyCart;
