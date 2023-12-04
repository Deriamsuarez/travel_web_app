import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Avatar,
  User,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import useLogout from "@/hooks/useLogout";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { name, email } = useSelector((sl) => sl.auth);

  const pathname = usePathname();



  const menu = [
    { label: "Inicio", href: "/dashboard" },
    { label: "Listado", href: "/tours" },
    { label: "Reportes", href: "/reports" },
  ];

  const logout = useLogout()

  return (
    <Navbar isBordered maxWidth="2xl" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img src="/logo.png" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menu.map((item, index) => (
          <NavbarItem
            isActive={pathname === item.href}
            key={`${item}-${index}`}
          >
            <Link
              color={`${pathname === item.href ? "" : "foreground"}`}
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <User
              className="cursor-pointer"
                name={name}
                description={email}
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem
              onClick={() => logout()}
                startContent={<LockClosedIcon className="w-5" />}
                key="delete"
                className="text-danger"
                color="danger"
              >
                Cerrar sesión
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menu.map((item, index) => (
          <NavbarMenuItem key={item.label}>
            <Link
              color={`${pathname === item.href ? "" : "foreground"}`}
              href={item.href}
              className="w-full"
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
