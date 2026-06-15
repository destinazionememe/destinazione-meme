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
      ? "border border-blood bg-blood text-white hover:border-ink hover:bg-ink"
      : "border border-current text-current hover:bg-white hover:text-ink";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center px-6 text-xs font-bold uppercase tracking-[0.18em] transition duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${className}`}
    >
      {children}
    </Link>
  );
}
