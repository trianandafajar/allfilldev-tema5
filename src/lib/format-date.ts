const formatter = new Intl.DateTimeFormat("id-ID", {
  day: "2-digit",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** Ubah tanggal ISO (`2025-01-10`) menjadi teks tampil, mis. "10 Januari 2025". */
export function formatDate(iso: string) {
  return formatter.format(new Date(`${iso}T00:00:00Z`));
}
