import Link from "next/link";
import { mainMenu } from "@/content/navigation";

/** Padanan #mainmenu (>= 993px): tautan datar tanpa dropdown. */
export function DesktopNav() {
  return (
    <ul className="m-0 flex list-none p-0 max-[992px]:hidden">
      {mainMenu.map((item) => (
        <li key={item.href} className="mr-[30px] last:mr-0">
          <Link
            href={item.href}
            className="inline-block py-[25px] pr-1.5 text-center text-[15px] uppercase leading-[30px] tracking-normal text-white transition-all duration-300"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
