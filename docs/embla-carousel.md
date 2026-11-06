# Carousel (Embla + shadcn)

Pengganti Owl Carousel dan Swiper pada template Intrio.

- Komponen dasar: shadcn `carousel` (`src/components/ui/carousel.tsx`), berbasis `embla-carousel-react`.
- Autoplay: paket `embla-carousel-autoplay`.
- `src/components/shared/item-carousel.tsx` (`ItemCarousel`) membungkus preset Owl yang dipakai template: `cols` 1-4 (>= 1000px; 600-999px = 2 kolom; di bawahnya 1), `gap` (default 30px, padanan `margin`), `loop`, `dots`, `autoplay` (ms), `center`. Setiap child menjadi satu slide.
- Untuk kebutuhan lain (panah, thumbnail) pakai `Carousel` shadcn langsung.
- Hero homepage tidak memakai Embla: `src/components/motion/hero-slider.tsx` membuat crossfade + zoom dengan CSS transition dan timer, sebagai pengganti Swiper effect `creative`. Hasilnya mirip, tidak identik piksel per piksel.
- Efek Owl `animateIn/animateOut` (fade, zoom) tidak ada di Embla; carousel dengan efek itu memakai slide biasa.
