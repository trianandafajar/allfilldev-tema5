# lenis

Smooth scroll, padanan `new Lenis()` di `designesia.js` template Intrio.

- Paket: `lenis` (impor dari `lenis/react`).
- Dipasang di `src/components/motion/smooth-scroll.tsx` (`<ReactLenis root>`), membungkus seluruh isi `<body>` di `src/app/layout.tsx`.
- Pakai `root` agar Lenis mengatur scroll `window`; `position: fixed` (header sticky, back-to-top) tetap normal.
- Dialog/Sheet Radix mengunci scroll body sendiri. Jika konten di dalam panel yang bisa di-scroll terasa tersendat, tambahkan atribut `data-lenis-prevent` pada elemen scroll tersebut.
- Untuk menonaktifkan smooth scroll, hapus `SmoothScroll` dari layout; tidak ada konfigurasi lain.
