import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-200">
      {/* Header */}
      <header className="w-full py-6 px-4 md:px-12 bg-white/80 shadow-md flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-700">TaxPro</span>
        </div>
        <nav className="hidden md:flex gap-8 text-blue-700 font-medium">
          <a href="#layanan" className="hover:text-blue-900 transition">Layanan</a>
          <a href="#tentang" className="hover:text-blue-900 transition">Tentang</a>
          <a href="#kontak" className="hover:text-blue-900 transition">Kontak</a>
        </nav>
        <a href="#kontak" className="ml-4 px-4 py-2 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 transition text-sm font-semibold">Konsultasi Gratis</a>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-12 py-16 gap-8 flex-1">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6 leading-tight">Solusi Perpajakan <span className="text-blue-500">Profesional</span> untuk Bisnis Anda</h1>
          <p className="text-lg md:text-xl text-blue-900 mb-8">Kami membantu perusahaan dan UMKM mengelola pajak dengan mudah, aman, dan sesuai regulasi. Fokus pada bisnis Anda, urusan pajak serahkan pada kami.</p>
          <a href="#layanan" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">Lihat Layanan</a>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="https://images.unsplash.com/photo-1556742047-1b7b7c2b3c1a?auto=format&fit=crop&w=600&q=80" alt="Konsultasi Pajak" className="rounded-2xl shadow-lg w-full max-w-md object-cover" />
        </div>
      </section>

      {/* Layanan Section */}
      <section id="layanan" className="py-16 px-4 md:px-12 bg-white/80">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Layanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <span className="text-4xl mb-4">📄</span>
            <h3 className="font-bold text-xl mb-2 text-blue-700">Konsultasi Pajak</h3>
            <p className="text-blue-900">Pendampingan dan konsultasi perpajakan untuk perorangan dan perusahaan.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <span className="text-4xl mb-4">🧾</span>
            <h3 className="font-bold text-xl mb-2 text-blue-700">Pelaporan SPT</h3>
            <p className="text-blue-900">Bantuan pelaporan SPT Tahunan dan Masa, serta administrasi pajak lainnya.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <span className="text-4xl mb-4">💼</span>
            <h3 className="font-bold text-xl mb-2 text-blue-700">Perencanaan Pajak</h3>
            <p className="text-blue-900">Strategi perencanaan pajak agar bisnis Anda lebih efisien dan patuh regulasi.</p>
          </div>
        </div>
      </section>

      {/* Tentang Section */}
      <section id="tentang" className="py-16 px-4 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Tentang TaxPro</h2>
          <p className="text-blue-900 text-lg mb-4">TaxPro adalah konsultan pajak berpengalaman yang telah membantu ratusan klien dari berbagai sektor. Kami berkomitmen memberikan layanan terbaik, transparan, dan sesuai dengan peraturan perpajakan Indonesia.</p>
          <p className="text-blue-900">Tim kami terdiri dari konsultan bersertifikat dan profesional yang siap membantu Anda menghadapi tantangan perpajakan bisnis modern.</p>
        </div>
      </section>

      {/* Kontak Section */}
      <section id="kontak" className="py-16 px-4 md:px-12 bg-blue-50">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">Hubungi Kami</h2>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Nama" className="border border-blue-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input type="email" placeholder="Email" className="border border-blue-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <textarea placeholder="Pesan" rows={4} className="border border-blue-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition">Kirim Pesan</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-blue-700 bg-white/80 mt-auto">
        &copy; {new Date().getFullYear()} TaxPro. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
