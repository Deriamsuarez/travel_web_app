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
} from "@nextui-org/react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname()

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const menu = [
    { label: "Inicio", href: "/dashboard" },
    { label: "Listado", href: "/list" },
    { label: "Reportes", href: "/reports" },
  ];

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
          key={`${item}-${index}`} >
            <Link color={`${pathname === item.href ? '' :"foreground"}`} href="#">
              {item.label}
            </Link>
          </NavbarItem>
        ))}

      </NavbarContent>
      <NavbarContent justify="end">
     
        <NavbarItem>
        <User
      name="Jane Doe"
      description="Manager"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
      }}
    />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
