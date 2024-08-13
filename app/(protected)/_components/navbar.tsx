"use client";

import UserButton from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathnanme = usePathname();
  return (
    <div className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm">
      <div className="flex gap-x-2">
        <Button
          asChild
          variant={pathnanme === "/server" ? "default" : "outline"}
        >
          <Link href="/server">Server</Link>
        </Button>
        <Button
          asChild
          variant={pathnanme === "/settings" ? "default" : "outline"}
        >
          <Link href="/settings">Settings</Link>
        </Button>
        <Button
          asChild
          variant={pathnanme === "/client" ? "default" : "outline"}
        >
          <Link href="/client">Client</Link>
        </Button>
        <Button asChild variant={pathnanme === "/admn" ? "default" : "outline"}>
          <Link href="/admin">Admin</Link>
        </Button>
      </div>
      <UserButton />
    </div>
  );
};

export default Navbar;
