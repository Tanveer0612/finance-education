"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { href: "/about", label: "About" },
        { href: "/topics", label: "Academic Framework" },
        { href: "/contact-us", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-neutral-200">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-lg font-semibold tracking-tight text-neutral-900"
                >
                    FinEdu Research
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`transition ${
                                    isActive
                                        ? "text-indigo-600"
                                        : "text-neutral-600 hover:text-neutral-900"
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}

                    
                </nav>

                {/* Mobile Nav */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5 text-neutral-800" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="bg-white w-72">
                            {/* Accessibility Fix */}
                            <VisuallyHidden>
                                <SheetTitle>Navigation Menu</SheetTitle>
                            </VisuallyHidden>

                            <div className="flex flex-col gap-6 mt-12 text-lg font-medium">
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={`${
                                                isActive
                                                    ? "text-indigo-600"
                                                    : "text-neutral-700"
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    );
                                })}

                                <Button asChild className="mt-6">
                                    <Link href="/topics">
                                        Academic Framework
                                    </Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
