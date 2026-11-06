import Link from "next/link";
import { SidebarWidget } from "@/components/shared/sidebar-widget";

/** Widget sidebar: awan tag berlatar warna utama. */
export function TagWidget({
  title = "Tag Populer",
  tags,
}: {
  title?: string;
  tags: readonly string[];
}) {
  return (
    <SidebarWidget title={title}>
      <ul className="m-0 mt-[30px] flex list-none flex-wrap p-0">
        {tags.map((tag) => (
          <li key={tag} className="my-[3px] mr-1">
            <Link
              href="#"
              className="mx-0.5 bg-primary px-2.5 pt-[5px] pb-[7px] text-[12px] text-white"
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </SidebarWidget>
  );
}
