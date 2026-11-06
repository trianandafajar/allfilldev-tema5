import type { Office } from "@/content/offices";

/** Blok alamat kantor: kota (h4), alamat, telepon, email. */
export function OfficeInfo({ office }: { office: Office }) {
  return (
    <>
      <h4 className="mb-0">{office.city}</h4>
      {office.address}
      <br />
      {office.phone}
      <br />
      {office.email}
      <br />
    </>
  );
}
