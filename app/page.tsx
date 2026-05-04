import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-yellow-900/30">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#top" className="text-xl md:text-2xl font-serif font-bold bg-gradient-to-r from-yellow-200 to-yellow-600 bg-clip-text text-transparent">銀鱗丸</a>
          <ul className="hidden md:flex gap-6 text-sm">
            <li><a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors">銀鱗丸について</a></li>
            <li><a href="#price" className="text-gray-300 hover:text-yellow-400 transition-colors">料金</a></li>
            <li><a href="#gallery" className="text-gray-300 hover:text-yellow-400 transition-colors">写真</a></li>
            <li><a href="https://www.instagram.com/naruya.ginrinmaru" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>釣果情報</a></li>
            <li><a href="#schedule" className="text-gray-300 hover:text-yellow-400 transition-colors">スケジュール</a></li>
            <li><a href="#reserve" className="text-gray-300 hover:text-yellow-400 transition-colors">ご予約</a></li>
            <li><a href="#access" className="text-gray-300 hover:text-yellow-400 transition-colors">アクセス</a></li>
          </ul>
          <a href="tel:070-2829-4900" className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-black px-4 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
            <span className="hidden sm:inline">予約電話</span>
          </a>
        </nav>
        <div className="md:hidden border-t border-yellow-900/30 overflow-x-auto">
          <ul className="flex gap-4 px-4 py-2 text-xs whitespace-nowrap">
            <li><a href="#about" className="text-gray-300 hover:text-yellow-400">紹介</a></li>
            <li><a href="#price" className="text-gray-300 hover:text-yellow-400">料金</a></li>
            <li><a href="#gallery" className="text-gray-300 hover:text-yellow-400">写真</a></li>
            <li><a href="https://www.instagram.com/naruya.ginrinmaru" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300">釣果情報</a></li>
            <li><a href="#schedule" className="text-gray-300 hover:text-yellow-400">スケジュール</a></li>
            <li><a href="#reserve" className="text-gray-300 hover:text-yellow-400">予約</a></li>
            <li><a href="#access" className="text-gray-300 hover:text-yellow-400">アクセス</a></li>
          </ul>
        </div>
      </header>

      <section id="top" className="relative h-screen w-full overflow-hidden">
        <Image src="/images/hero-boat.jpg" alt="銀鱗丸" fill priority className="object-cover brightness-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <Image src="/images/logo.jpg" alt="銀鱗丸ロゴ" width={400} height={200} className="mb-6 md:mb-8 mix-blend-screen w-64 md:w-96 h-auto" />
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-black mb-8 md:mb-12 tracking-wider md:tracking-widest">
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">淡路島 育波港</span>
          </h1>
          <a href="tel:070-2829-4900" className="group relative inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-yellow-500 to-yellow-700 px-6 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold text-black rounded-full hover:scale-105 transition-transform shadow-2xl">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
            お電話でご予約
          </a>
          <p className="mt-4 text-xl md:text-2xl font-bold tracking-wider">070-2829-4900</p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </section>

      <section id="about" className="py-24 px-4 bg-gradient-to-b from-black to-gray-900 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-black text-center mb-4 tracking-widest">
            <span className="bg-gradient-to-r from-yellow-200 to-yellow-600 bg-clip-text text-transparent">銀鱗丸について</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-700 mx-auto mb-16"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div><Image src="/images/hero-boat.jpg" alt="銀鱗丸の船体" width={600} height={400} className="rounded-lg shadow-2xl" /></div>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">船長：柿本 稔也</h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-300">淡路島 育波漁港より出船</p>
              <p className="text-base md:text-lg leading-relaxed text-gray-300">イカナゴ・シラス漁を営みながら、タイラバを中心に出船しております。時期によりタコ釣りも出船します。</p>
              <p className="text-base md:text-lg leading-relaxed text-yellow-200 font-semibold">ご予約はお電話またはInstagramのDMへお願いいたします。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="price" className="py-24 px-4 bg-black scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-black text-center mb-4 tracking-widest">
            <span className="bg-gradient-to-r from-yellow-200 to-yellow-600 bg-clip-text text-transparent">釣りもの・料金</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-700 mx-auto mb-16"></div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-yellow-900/50">
              <h3 className="text-3xl font-bold text-yellow-400 mb-4">タイラバ</h3>
              <p className="text-gray-300 leading-relaxed">銀鱗丸のメインターゲット。明石・淡路の潮流が育てたマダイを狙います。</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-yellow-900/50">
              <h3 className="text-3xl font-bold text-yellow-400 mb-4">タコ</h3>
              <p className="text-gray-300 leading-relaxed">淡路島名物のタコ釣り。タコエギを使った釣りで、女性やお子様にも楽しんでいただけます。</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-900/40 to-yellow-900/40 border-2 border-red-700 rounded-lg p-4 mb-8 text-center">
            <p className="text-yellow-300 font-bold text-sm sm:text-base md:text-xl">🔔 2026年5月1日より新料金になります</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-900/20 to-black border-2 border-yellow-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-center mb-6 text-yellow-400">午前 乗合</h3>
              <div className="text-center">
                <p className="text-gray-500 line-through text-xl mb-2">¥8,000</p>
                <p className="text-4xl md:text-5xl font-black text-yellow-400">¥9,000</p>
                <p className="text-sm text-gray-400 mt-2">お一人様</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/20 to-black border-2 border-yellow-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-center mb-6 text-yellow-400">午後 乗合</h3>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-black text-yellow-400 mt-0 md:mt-9">¥7,000</p>
                <p className="text-sm text-gray-400 mt-2">お一人様</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-black border-2 border-green-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-center mb-6 text-green-400">午前 チャーター</h3>
              <div className="text-center">
                <p className="text-gray-500 line-through text-xl mb-2">¥60,000</p>
                <p className="text-4xl md:text-5xl font-black text-green-400">¥63,000</p>
                <p className="text-sm text-gray-400 mt-2">6名様まで</p>
                <p className="text-sm text-yellow-300 mt-3 font-bold">1人追加ごとに +¥9,000</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/20 to-black border-2 border-orange-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-center mb-6 text-orange-400">午後 チャーター</h3>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-black text-orange-400">¥49,000</p>
                <p className="text-sm text-gray-400 mt-2">6名様まで</p>
                <p className="text-sm text-yellow-300 mt-3 font-bold">1人追加ごとに +¥7,000</p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-12 text-lg">今後とも変わらぬご愛顧のほど<br />よろしくお願い申し上げます</p>
        </div>
      </section>

      <section id="gallery" className="py-24 px-4 bg-gradient-to-b from-black to-gray-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-black text-center mb-4 tracking-widest">
            <span className="bg-gradient-to-r from-yellow-200 to-yellow-600 bg-clip-text text-transparent">釣果ギャラリー</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-700 mx-auto mb-16"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY_IMAGES.map((name) => (
              <div key={name} className="relative aspect-square overflow-hidden rounded-lg group">
                <Image src={`/images/${name}.jpg`} alt="釣果" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-24 px-4 bg-black scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-black text-center mb-4 tracking-widest">
            <span className="bg-gradient-to-r from-yellow-200 to-yellow-600 bg-clip-text text-transparent">出船スケジュール</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-700 mx-auto mb-16"></div>
          <div className="bg-gray-900 rounded-lg p-4 md:p-8 border border-yellow-900/50">
            <p className="text-center text-gray-400 mb-4">最新の出船スケジュールはこちら</p>
            <div className="aspect-video w-full overflow-hidden rounded">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=harrierkks%40gmail.com&ctz=Asia%2FTokyo"
                style={{ border: 0 }}
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">※スマホの方は横スクロールで月切替できます</p>
          </div>
        </div>
      </section>

      <section id="reserve" className="py-24 px-4 bg-gradient-to-b from-black via-yellow-950/20 to-black scroll-mt-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-black mb-4 tracking-widest">
            <span className="bg-gradient-to-r from-yellow-200 to-yellow-600 bg-clip-text text-transparent">ご予約・お問い合わせ</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-700 mx-auto mb-16"></div>
          <p className="text-xl mb-8 text-gray-300">ご予約は<span className="text-yellow-400 font-bold">お電話またはInstagram DM</span>でお願いします</p>
          <a href="tel:070-2829-4900" className="group inline-flex flex-col items-center gap-2 bg-gradient-to-br from-yellow-500 to-yellow-700 px-12 py-8 rounded-2xl shadow-2xl hover:scale-105 transition-transform">
            <span className="text-black font-bold text-lg">電話で予約する</span>
            <span className="text-black text-3xl sm:text-4xl md:text-5xl font-black tracking-wider">070-2829-4900</span>
          </a>
          <p className="mt-8 text-gray-400">受付時間：9:00〜20:00（出船中は折り返しになる場合がございます）</p>
        </div>
      </section>

      <section id="access" className="py-24 px-4 bg-black scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-black text-center mb-4 tracking-widest">
            <span className="bg-gradient-to-r from-yellow-200 to-yellow-600 bg-clip-text text-transparent">アクセス</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-700 mx-auto mb-16"></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-yellow-400">出港地</h3>
              <p className="text-lg text-gray-300">育波漁港</p>
              <p className="text-gray-400">〒656-1602</p>
              <p className="text-gray-400">兵庫県淡路市育波地先</p>
              <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 mt-4">
                <p className="text-yellow-200 font-bold mb-1">道順</p>
                <p className="text-gray-300">北淡インターから5分</p>
                <p className="text-gray-300">港手前にローソンがあります</p>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mt-8">お問い合わせ</h3>
              <p className="text-lg text-gray-300">船長：柿本 稔也</p>
              <a href="tel:070-2829-4900" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 inline-block">070-2829-4900</a>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden border border-yellow-900/50">
              <iframe src="https://www.google.com/maps?q=釣り船+銀鱗丸+ギンリンマル+淡路市育波&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-black border-t border-yellow-900/30">
        <div className="max-w-5xl mx-auto text-center">
          <Image src="/images/logo.jpg" alt="銀鱗丸" width={200} height={100} className="mx-auto mb-6 mix-blend-screen" />
          <p className="text-gray-400 mb-2">淡路島育波漁港 遊漁船 銀鱗丸</p>
          <p className="text-gray-500 text-sm">© 2026 銀鱗丸 All Rights Reserved.</p>
          <p className="text-gray-600 text-xs mt-4">Site by YTS Apps</p>
        </div>
      </footer>
    </main>
  );
}

const GALLERY_IMAGES = [
  "03A7AFDF-0A43-4339-8883-F22CD42AE720",
  "159A204A-28DB-451F-B110-17DBF018BE94",
  "2082ED9D-4A5E-471A-8F7C-9C1EC6B0C856",
  "2EEF3257-DE07-4E25-919F-B9B1E706DB02",
  "41EF70D5-1BAF-4E48-B6BC-5E1148907044",
  "5E91651C-2737-4ADF-B4C7-F3FCCDFB18B2",
  "5EB1BAB5-39E2-450F-BF5B-DDC750A1AEE0",
  "5EE91F94-56D2-4E32-A438-E5A2E540036F",
  "791266F5-C457-4219-A48E-03A5DC6D6E74",
  "821BFAEE-A9C1-402D-A8EC-6805DBCCCC67",
  "851CB06E-B03C-43ED-A85B-3AD9934AEADF",
  "A94911DE-CBD9-45AF-8DD3-99447C879C8B",
  "ACA59B05-D9B0-4F87-B7D4-37210868A1B6",
  "B376F98F-D159-4D16-AB61-407B3CC10EC2",
  "D366C883-CAFC-44B0-B4A7-945223F4729A",
  "D487A07D-E22B-4C3D-83A6-6F0EBE673E23",
  "DC8650FF-24B5-4521-87B7-80D41F477641",
  "DD0F11B5-F535-48DB-9B5B-063EBBD4A32B",
  "E79BFFE1-6C31-4321-830E-45BE051BFABA",
];