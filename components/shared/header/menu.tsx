import { Button } from "@/components/ui/button";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import { ModeToggle } from "../../../app/modeToggle";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-in">
            <UserIcon /> Sign In
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex">
            <SheetTitle className="ml-4 mt-2">Menu</SheetTitle>
            <div className="ml-4">
              <ModeToggle />
            </div>
            <Button asChild variant="ghost">
              <Link href="/cart" className="mx-5">
                <ShoppingCart /> Cart
              </Link>
            </Button>
            <Button asChild>
              <Link href="/sign-in" className="mx-5">
                <UserIcon /> Sign In
              </Link>
            </Button>
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
