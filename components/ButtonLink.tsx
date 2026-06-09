import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const className =
    variant === "primary"
      ? "bg-blood text-white hover:bg-ember"
      : "border border-white/15 text-white hover:border-white/35 hover:bg-white/5";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-5 text-sm font-bold uppercase tracking-wide transition ${className}`}
    >
      {children}
    </Link>
  );
}
