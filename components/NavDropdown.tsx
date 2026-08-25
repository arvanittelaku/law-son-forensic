"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export type NavDropdownItem = { href: string; label: string };

type NavDropdownProps = {
  label: string;
  href: string;
  items: NavDropdownItem[];
  align?: "left" | "right";
  variant?: "light" | "dark";
};

export function NavDropdown({
  label,
  href,
  items,
  align = "left",
  variant = "light",
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isDark = variant === "dark";

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const menuPosition =
    align === "right" ? "right-0 left-auto" : "left-0 right-auto";

  const triggerClass = isDark
    ? "inline-flex min-h-touch max-w-[11rem] items-center gap-1 rounded px-2 py-2 text-sm font-medium text-white/80 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-copper xl:max-w-none xl:px-3"
    : "inline-flex min-h-touch max-w-[11rem] items-center gap-1 rounded px-2 py-2 text-sm font-medium text-body transition hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-copper xl:max-w-none xl:px-3";

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={triggerClass}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(!open)}
      >
        <Link
          href={href}
          className={`truncate ${isDark ? "hover:text-white" : "hover:text-ink"}`}
          onClick={(e) => e.stopPropagation()}
        >
          {label}
        </Link>
        <span
          className={`shrink-0 text-xs ${isDark ? "text-copper/80" : "text-sage"}`}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>
      {open && (
        <div className={`absolute top-full z-50 pt-1 ${menuPosition}`}>
          <ul
            role="menu"
            className="max-h-[min(70vh,24rem)] min-w-[min(100vw-2rem,16rem)] overflow-y-auto rounded-card border border-border bg-white py-2 shadow-elevated sm:min-w-[260px]"
          >
            <li role="none">
              <Link
                href={href}
                role="menuitem"
                className="block px-4 py-2.5 text-sm font-semibold text-ink hover:bg-stone"
                onClick={() => setOpen(false)}
              >
                All {label}
              </Link>
            </li>
            {items.map((item) => (
              <li key={item.href} role="none">
                <Link
                  href={item.href}
                  role="menuitem"
                  className="block break-words px-4 py-2.5 text-sm text-body hover:bg-stone hover:text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
