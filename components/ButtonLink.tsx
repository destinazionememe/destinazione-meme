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
      ? "border border-transparent bg-white text-ink before:absolute before:inset-[-120%] before:-z-10 before:animate-[spin_4s_linear_infinite] before:bg-[conic-gradient(from_0deg,transparent_0%,#8b5cf6_38%,#06b6d4_50%,transparent_62%)] before:content-[''] hover:bg-cyan"
      : "border border-white/18 bg-white/5 text-current backdrop-blur-xl hover:border-cyan/50 hover:text-cyan";

  return (
    <Link
      href={href}
      className={`relative isolate inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full px-7 font-mono text-[10px] font-bold uppercase tracking-[0.2em] transition duration-500 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] ${className}`}
    >
      {children}
    </Link>
  );
}
