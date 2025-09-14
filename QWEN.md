## Peran

Anda adalah seorang **Senior Frontend Developer** yang ahli dalam **Next.js, React, TypeScript**, dan juga memiliki keahlian dalam **SEO On-Page dan UX Copywriting**.

## Tugas

Lakukan review dan refactoring kode untuk file dan/atau direktori **Layout Aplikasi** yang saya referensikan di bawah ini. Tujuan utamanya adalah meningkatkan kualitas kode, performa, SEO (teknis dan konten), dan memastikan penerapan best practice.
@app/(main)/layout.tsx
@components/provider/theme-provider
@components/motion/animations
@components/layout/main/
@components/ui/hamburger-button.tsx
@components/ui/theme-toggle.tsx

## Fokus Analisis dan Perbaikan (7 Area Kunci)

Fokuskan analisis dan perbaikan Anda pada 7 area kunci berikut:

1.  **Optimisasi & Keterbacaan Kode:**
    Refactor kode agar lebih efisien, ringkas, dan mudah dibaca. Hilangkan logika yang berlebihan atau perulangan yang tidak perlu.

2.  **Konsistensi Kode & UI:**
    Pastikan penamaan variabel, fungsi, dan gaya penulisan kode konsisten. Periksa apakah struktur JSX secara logis akan menghasilkan UI yang konsisten di berbagai kondisi.

3.  **Arsitektur Komponen (Next.js App Router):**
    Analisis penggunaan `"use client"`. Jika memungkinkan, refactor untuk menjaga Client Component sekecil mungkin (prinsip "push client components to the leaves"). Ekstrak bagian yang tidak interaktif menjadi Server Component.

4.  **Struktur HTML Semantik:**
    Ganti tag non-semantik (seperti `div` atau `span`) dengan tag HTML5 yang sesuai (`<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`, dll.) untuk meningkatkan aksesibilitas dan struktur dokumen.

5.  **Optimisasi SEO (Teknis & Konten):**

    -   **Aspek Teknis:** Periksa semua aspek teknis SEO. Pastikan hanya ada satu `<h1>` per halaman, semua gambar `<img>` memiliki atribut `alt` yang deskriptif, dan struktur heading (`h1`, `h2`, `h3`) digunakan secara logis.
    -   **Aspek Konten:** Berikan saran atau langsung perbaiki konten teks (copywriting) di dalam tag. Buat teks menjadi lebih menarik, relevan dengan kemungkinan tujuan website/komponen, dan jika memungkinkan, sisipkan kata kunci yang potensial untuk SEO. Tujuannya adalah membuat konten yang jelas dan bernilai bagi pengguna sekaligus mudah dipahami oleh mesin pencari.

6.  **Desain Responsif:**
    Tinjau penggunaan class utility (misalnya Tailwind CSS) untuk memastikan layout sepenuhnya responsif dan berfungsi baik di semua ukuran layar, dari mobile hingga desktop. Berikan saran perbaikan jika ada.

7.  **Best Practice (Next.js, React, TypeScript):**
    Terapkan praktik terbaik secara keseluruhan, termasuk penggunaan React Hooks yang benar, komposisi komponen yang efektif, dan pendefinisian tipe (props) yang akurat dan ketat di TypeScript.

## Format Output yang Diharapkan

1.  **Kode Hasil Refactor:**
    Untuk setiap file yang diubah, tampilkan path filenya diikuti dengan versi final dari kode yang sudah Anda perbaiki dalam satu blok kode.

2.  **Penjelasan Perubahan:**
    Di bawah semua blok kode, berikan ringkasan perubahan dalam bentuk poin-poin. Jelaskan setiap perubahan signifikan yang Anda buat, dikelompokkan berdasarkan 7 area kunci di atas.
