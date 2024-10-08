"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { Avatar } from "@nextui-org/avatar";
import { Image } from "@nextui-org/image";
import NextLink from "next/link";
import {
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
} from "@nextui-org/dropdown";
import { BellIcon } from "@heroicons/react/24/outline";

const siteConfig = {
  navItems: [
    { href: "/", label: "Home" },
    { href: "/learning", label: "Aprendizado" },
    { href: "/account", label: "Conta" },
  ],
  navMenuItems: [
    { label: "Home" },
    { label: "Aprendizado" },
    { label: "Conta" },
  ],
};

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block pl-2 pr-2 justify-center items-center">
          /
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      type="search"
    />
  );

  return (
    <NextUINavbar
      className="bg-background-dark-500 bg-opacity-70 backdrop-blur-md overflow-hidden"
      height={"5rem"}
      maxWidth="full"
      position="sticky"
    >
      <NavbarContent className="w-full flex justify-between items-center">
        {/* Logo */}
        <NavbarBrand as="li" className="flex items-center">
          <NextLink href="/">
            <Image
              isBlurred
              alt="Bytezero logo"
              src="https://nextui.org/images/album-cover.png"
              width={"50rem"}
            />
          </NextLink>
        </NavbarBrand>

        {/* Search input */}
        <NavbarItem className="flex-grow justify-center">
          {searchInput}
        </NavbarItem>

        <NavbarContent className="gap-4 items-center" justify="end">
          <NavbarItem className="hidden sm:flex items-center">
            <Dropdown>
              <DropdownTrigger>
                <button className="relative flex items-center mr-5">
                  <BellIcon className="h-8 w-8 text-secondary-600" />
                  <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
                </button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Notification actions">
                <DropdownItem key="1">Notificação 1</DropdownItem>
                <DropdownItem key="2">Notificação 2</DropdownItem>
                <DropdownItem key="3">Ver todas as notificações</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>

          <NavbarItem className="hidden sm:flex items-center">
            <Dropdown>
              <DropdownTrigger>
                <Avatar as="button" color="default" name="User" size="md" />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile actions">
                <DropdownItem key="profile">Perfil</DropdownItem>
                <DropdownItem key="settings">Configurações</DropdownItem>
                <DropdownItem key="logout">Sair</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
