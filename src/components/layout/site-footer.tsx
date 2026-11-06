import Image from "next/image";
import Link from "next/link";
import { Col, Row } from "@/components/layout/grid";
import { SocialLinks } from "@/components/shared/social-links";
import { company } from "@/content/company";
import { legalPaths, sitePages } from "@/config/site";
import { companyMenu, type NavLink } from "@/content/navigation";
import { services } from "@/content/services";

const footerServices: NavLink[] = services
  .slice(0, 6)
  .map(({ title, href }) => ({ label: title, href }));

const legalLinks: NavLink[] = legalPaths.map((path) => ({
  label: sitePages.find((page) => page.path === path)?.title ?? path,
  href: path,
}));

function FooterWidget({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div>
      <h2 className="hs-5 !mb-[10px]">{title}</h2>
      <ul className="m-0 mb-[38px] list-none p-0 max-[992px]:mb-[42px]">
        {links.map((link) => (
          <li key={link.label} className="my-[3px]">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactItem({ label, value }: { label: string; value: string }) {
  return (
    <>
      <div className="text-[15px] opacity-50">{label}</div>
      <h3>{value}</h3>
      <div className="h-5" />
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="on-dark relative bg-dark-1 pt-[100px]">
      <div className="container">
        <Row gy={4} justify="between">
          <Col md={6}>
            <Image
              src="/images/logo-white.webp"
              alt={company.name}
              width={170}
              height={45}
              className="mb-2 h-auto w-[170px] max-w-[170px]"
            />
            <div className="block h-[30px] w-full" />
            <Row gx={4}>
              <Col sm={6}>
                <FooterWidget title="Perusahaan" links={companyMenu} />
              </Col>
              {footerServices.length > 0 && (
                <Col sm={6}>
                  <FooterWidget title="Layanan" links={footerServices} />
                </Col>
              )}
            </Row>
            <SocialLinks className="max-[767px]:mb-[22px] min-[768px]:max-[992px]:mb-[21px] max-[992px]:text-center min-[993px]:pb-[17px]" />
          </Col>
          <Col md={6} className="max-[992px]:pb-[30px]">
            <div className="flex items-center justify-between">
              <h2>Hubungi Kami</h2>
              <Image
                src="/images/ui/up-right-arrow.webp"
                alt=""
                width={60}
                height={60}
                className="w-[60px] opacity-50"
              />
            </div>
            <div>
              <ContactItem label="Email" value={company.email} />
              <ContactItem label="Telepon" value={company.phone} />
              <ContactItem label="Lokasi Kantor" value={company.address} />
            </div>
          </Col>
        </Row>
      </div>
      <div className="mt-[50px] border-t border-white/10 py-5">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center">
            <span>{company.copyright}</span>
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
