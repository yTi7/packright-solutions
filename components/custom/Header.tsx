import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@components/ui/navigation-menu";
import logo_light from "@public/logo_light.svg";
import Image from "next/image";
import { Button } from "@components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full justify-between px-8 py-4">
      <div
        className={`container mx-auto flex w-full items-center justify-between gap-4`}
      >
        <Image src={logo_light} alt="Packright Solutions Logo" height={30} />
        <NavigationMenu
          className={`absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block`}
        >
          <NavigationMenuList
            className={`rounded-md bg-black/40 text-white backdrop-blur`}
          >
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`bg-transparent hover:bg-transparent`}
              >
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/docs">Resources</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/docs">Company</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button className={``}>Contact</Button>
      </div>
    </header>
  );
}
