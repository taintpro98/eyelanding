import Link from "next/link";
import Image from "next/image";
import { Facebook, Youtube } from "lucide-react";

const footerLinks = {
  Product: [
    { href: "#features", label: "Features" },
    { href: "#product", label: "Product" },
    { href: "#pricing", label: "Pricing" },
  ],
  Company: [
    { href: "#", label: "About" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Careers" },
  ],
  Legal: [
    { href: "#", label: "Privacy" },
    { href: "#", label: "Terms" },
  ],
};

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61567715214647",
    label: "Facebook",
    icon: Facebook,
  },
  {
    href: "https://www.youtube.com/@alumieye",
    label: "YouTube",
    icon: Youtube,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2"
            >
              <span className="flex h-7 w-7 shrink-0 overflow-hidden rounded-full">
                <Image
                  src="/logo.png"
                  alt="ALumiEye"
                  width={28}
                  height={28}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="font-display text-lg font-semibold tracking-wide text-foreground">
                ALumiEye
              </span>
            </Link>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              AI-powered trading intelligence for serious traders.
            </p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" aria-hidden />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-foreground">
                  {category}
                </h3>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} ALumiEye. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
