import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energieberatung. Digital. Effizient.",
  description: "Schluss mit Chaos. Saniatlas bringt strukturierte Erfassung nach GEG.",
};

export default function Home() {
  return (
    <div className="bg-[#0a0a0c] text-slate-200 font-sans selection:bg-orange-500 selection:text-white min-h-screen overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center border-b border-white/5 bg-[#0a0a0c]/80 backdrop-blur-md">
        <div className="w-full max-w-[1100px] mx-auto px-5 md:px-10 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/lp_energy/logo.jpg" alt="Saniatlas Logo" className="h-10 w-10 object-contain rounded-[10px] shadow-sm shadow-blue-900/20" />
            <span className="text-2xl font-black tracking-tight text-white hidden sm:block">Saniatlas</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#problem" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">Problem</a>
            <a href="#loesung" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">Lösung</a>
            <a href="#features" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">Funktionen</a>
          </div>
          <a
            href="mailto:info@wamocon.com"
            className="hidden md:inline-flex items-center gap-2 rounded-xl bg-orange-600 px-5 py-2.5 text-sm font-bold text-white shadow-[0_4px_24px_rgba(249,115,22,0.3)] transition-all hover:-translate-y-0.5 hover:bg-orange-500 hover:shadow-[0_8px_32px_rgba(249,115,22,0.4)]"
          >
            Saniatlas entdecken
          </a>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-[120px] pt-20" id="hero">
          <div className="absolute inset-0 z-0"
            style={{ backgroundImage: "radial-gradient(ellipse 70% 55% at 50% 40%, rgba(249,115,22,0.12) 0%, transparent 65%), radial-gradient(ellipse 50% 60% at 20% 80%, rgba(249,115,22,0.06) 0%, transparent 50%), radial-gradient(ellipse 45% 50% at 80% 25%, rgba(200,80,10,0.08) 0%, transparent 50%)" }}>
          </div>
          <div className="absolute inset-0 z-0 opacity-100"
            style={{ 
              backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", 
              backgroundSize: "72px 72px", 
              maskImage: "radial-gradient(ellipse 60% 55% at 50% 50%, black 0%, transparent 70%)" 
            }}>
          </div>

          <div className="relative z-10 text-center max-w-[920px] px-5 flex flex-col items-center">
            <span className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-bold text-orange-500 tracking-widest uppercase mb-8 shadow-sm">
              Welle 4 der Entwicklung abgeschlossen
            </span>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-6 text-white drop-shadow-sm">
              Energieberatung.<br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Digital. Effizient.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-[640px] mx-auto leading-relaxed mb-12">
              Schluss mit Word, Excel und unstrukturierten Gebäudebegehungen. Saniatlas ist Ihr Werkzeugkoffer direkt am Smartphone.
            </p>
            <div>
              <a href="#loesung" className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-8 py-4 text-base font-bold text-white shadow-[0_4px_24px_rgba(249,115,22,0.3)] transition-all hover:-translate-y-1 hover:bg-orange-500 hover:shadow-[0_8px_32px_rgba(249,115,22,0.4)]">
                Plattform erleben
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 ml-1"><path d="M5 12h14"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-[150px] z-20 bg-gradient-to-b from-transparent to-[#0a0a0c]"></div>
        </section>

        {/* PROBLEM */}
        <section className="relative pt-24 pb-32" id="problem">
          <div className="max-w-[1100px] mx-auto px-5 md:px-10">
            <h2 className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tight mb-8 text-white">
              Energieberater scheitern an der<br />
              <span className="text-orange-500">Nacharbeit</span>
            </h2>
            <p className="text-lg max-w-[580px] leading-relaxed mb-16 text-slate-400">
              Der Berater ist kein Schreibtischarbeiter — er steht im Keller, in der Heizungsanlage, auf dem Dachboden. 
              Aber aktuell verliert er Stunden am Rechner.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="text-center p-8 rounded-2xl bg-orange-500/5 border border-orange-500/20">
                <span className="block text-5xl md:text-6xl font-black leading-none mb-3 text-orange-500">6</span>
                <span className="block text-lg font-bold mb-1 text-white">Stunden Nacharbeit</span>
                <span className="block text-xs text-slate-500">Pro Projekt (Berater-Feedback)</span>
              </div>
              <div className="text-center p-8 rounded-2xl bg-orange-500/5 border border-orange-500/20">
                <span className="block text-5xl md:text-6xl font-black leading-none mb-3 text-orange-500">0%</span>
                <span className="block text-lg font-bold mb-1 text-white">Foto-Zuordnung</span>
                <span className="block text-xs text-slate-500">Verloren in der Handy-Galerie</span>
              </div>
              <div className="text-center p-8 rounded-2xl bg-orange-500/5 border border-orange-500/20">
                <span className="block text-5xl md:text-6xl font-black leading-none mb-3 text-orange-500">1</span>
                <span className="block text-lg font-bold mb-1 text-white">App für alles</span>
                <span className="block text-xs text-slate-500">Die Lösung</span>
              </div>
            </div>
          </div>
        </section>

        {/* LÖSUNG / FEATURES */}
        <section className="relative py-32 bg-[#0e0e12] border-y border-white/5" id="loesung">
          <div className="max-w-[1100px] mx-auto px-5 md:px-10">
            <div className="md:grid md:grid-cols-12 gap-16 items-center">
              <div className="md:col-span-5 mb-12 md:mb-0">
                <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block">Saniatlas</span>
                <h3 className="text-3xl md:text-5xl font-black leading-tight text-white mb-6">Drei Probleme.<br/>Eine Lösung.</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  Die einzige App, die den Energieberater bei der Vor-Ort-Begehung vollständig begleitet — vom ersten Klick bis zum exportierbaren Bericht.
                </p>
              </div>
              <div className="md:col-span-7 flex flex-col gap-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4">
                   <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20 text-orange-500 text-2xl">📱</div>
                   <div>
                     <h4 className="text-xl font-bold text-white mb-2">Vor-Ort-Erfassung</h4>
                     <p className="text-slate-400">GEG-konformes Akkordeon-Formular (Gebäudehülle, Heizung, Fenster). Direkt am Smartphone im Keller ausfüllen inkl. Fotos.</p>
                   </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4">
                   <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20 text-orange-500 text-2xl">📋</div>
                   <div>
                     <h4 className="text-xl font-bold text-white mb-2">Projektverwaltung</h4>
                     <p className="text-slate-400">Status-Workflows, Adressverwaltung und Kunden-Termine. Wie eine native App auf dem Homescreen.</p>
                   </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4">
                   <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20 text-orange-500 text-2xl">🔐</div>
                   <div>
                     <h4 className="text-xl font-bold text-white mb-2">DSGVO & Sicherheit</h4>
                     <p className="text-slate-400">Europäische Server, Row-Level Security. Jeder Berater sieht strikt nur die eigenen Kundendaten.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AUSBLICK & FUNKTIONEN (ROADMAP) */}
        <section className="relative py-32 bg-[#0e0e12] border-y border-white/5" id="roadmap">
          <div className="max-w-[1100px] mx-auto px-5 md:px-10">
            <h2 className="text-3xl md:text-5xl font-black leading-tight text-white mb-6 text-center">
              Der Weg zur<br/>Komplettlösung.
            </h2>
            <p className="text-lg text-slate-400 max-w-[600px] mx-auto mb-20 text-center">
              Die Entwicklung von Saniatlas erfolgt in iterativen Wellen — streng nach dem Feedback der BAFA-Experten im Feld.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              
              {/* Welle 4 - Abgeschlossen */}
              <div className="bg-[#0a0a0c] border border-orange-500/30 rounded-3xl p-8 relative overflow-hidden flex flex-col shadow-[0_0_30px_rgba(249,115,22,0.05)] transform hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-400 to-orange-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl uppercase tracking-widest shadow-md">
                  Bereits nutzbar
                </div>
                <div className="text-orange-500 font-mono text-sm mb-2 opacity-90">Welle 4</div>
                <h3 className="text-xl font-bold text-white mb-6">Basis-Werkzeug</h3>
                <ul className="space-y-4 text-slate-300 text-sm flex-1 leading-relaxed">
                  <li className="flex gap-3"><span className="text-orange-500 mt-0.5 font-bold">✓</span> GEG-Begehungsformular (Alle 6 Bauteil-Abschnitte komplett)</li>
                  <li className="flex gap-3"><span className="text-orange-500 mt-0.5 font-bold">✓</span> Kamerazugriff & direkter Foto-Upload ohne Handy-Galerie-Umweg</li>
                  <li className="flex gap-3"><span className="text-orange-500 mt-0.5 font-bold">✓</span> Workflows für aktuelle Projekte (Neu &rarr; Abgeschlossen)</li>
                  <li className="flex gap-3"><span className="text-orange-500 mt-0.5 font-bold">✓</span> Vollautomatischer Supabase Cloud-Sync mit EEE-Daten</li>
                  <li className="flex gap-3"><span className="text-orange-500 mt-0.5 font-bold">✓</span> PWA: Installation direkt auf den Homescreen des Smartphones</li>
                </ul>
              </div>

              {/* Welle 5 - Aktuell */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden flex flex-col hover:border-white/20 transition-colors">
                <div className="absolute top-0 right-0 bg-white/10 text-white/50 text-[10px] font-bold px-3 py-1.5 rounded-bl-xl uppercase tracking-widest">
                  Aktuell im Fokus
                </div>
                <div className="text-slate-400 font-mono text-sm mb-2">Welle 5</div>
                <h3 className="text-xl font-bold text-white mb-6">Beratung & Report</h3>
                <ul className="space-y-4 text-slate-400 text-sm flex-1 leading-relaxed">
                  <li className="flex gap-3"><span className="text-slate-500 mt-0.5">●</span> <span className="text-white">Maßnahmenliste:</span> Sanierungsfahrplan (Typ, Prio, Kosten)</li>
                  <li className="flex gap-3"><span className="text-slate-500 mt-0.5">●</span> <span className="text-white">Förder-Schnellcheck:</span> Regelbasierte KfW/BEG Erkennung aus Heizung & Baujahr</li>
                  <li className="flex gap-3"><span className="text-slate-500 mt-0.5">●</span> <span className="text-white">PDF-Beratungsbericht:</span> Sofortiger Export nach der Begehung</li>
                  <li className="flex gap-3"><span className="text-slate-500 mt-0.5">●</span> Kunden-Dokumentenablage (Grundrisse etc.) via Supabase Storage</li>
                </ul>
              </div>

              {/* Welle 6+ - Ausblick */}
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 relative overflow-hidden flex flex-col opacity-70 hover:opacity-100 transition-opacity">
                <div className="text-slate-500 font-mono text-sm mb-2">Vision (Welle 6 & 7)</div>
                <h3 className="text-xl font-bold text-slate-300 mb-6">Skalierung</h3>
                <ul className="space-y-4 text-slate-500 text-sm flex-1 leading-relaxed">
                  <li className="flex gap-3"><span className="text-slate-600 mt-0.5 font-mono">◖</span> Lokaler Offline-Modus im Keller inkl. Auto-Save</li>
                  <li className="flex gap-3"><span className="text-slate-600 mt-0.5 font-mono">◖</span> Antragsfristen-Ampel für BAFA/KfW-Zuschüsse</li>
                  <li className="flex gap-3"><span className="text-slate-600 mt-0.5 font-mono">◖</span> Team-Accounts & Schreibgeschütztes Endkunden-Dashboard</li>
                  <li className="flex gap-3"><span className="text-slate-600 mt-0.5 font-mono">◖</span> BAFA XML/JSON-Export & Schnittstellen zu IDA ICE / Hottgenroth</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* GEGENÜBERSTELLUNG (MANUELL VS APP) */}
        <section className="relative py-32 bg-[#0a0a0c]" id="vergleich">
          <div className="max-w-[1100px] mx-auto px-5 md:px-10 text-center">
            <h2 className="text-3xl md:text-5xl font-black leading-tight text-white mb-6">
              Gebäudebegehung.<br/>Zwei Wege. Ein Sieger.
            </h2>
            <p className="text-lg text-slate-400 max-w-[600px] mx-auto mb-16">
              Der Weg entscheidet, ob Sie 3-6 Stunden mit Copy & Paste verschwenden oder den Auftrag profitabel abschließen.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-left">
              {/* Manuell */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-red-500/10 text-red-500 text-xs font-bold px-4 py-2 rounded-bl-2xl">
                  100% Aufwand
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Manuell</h3>
                <p className="text-slate-500 text-sm mb-8 font-mono">Word, Excel, Kamera</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✕</span>
                    <span className="text-slate-300">Gebäudedaten auf dem Klemmbrett bei schlechtem Licht eintragen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✕</span>
                    <span className="text-slate-300">50+ unsortierte Fotos in der iPhone-Galerie nach dem Termin suchen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✕</span>
                    <span className="text-slate-300">Alles nochmal mühsam für das BAFA/GEG Formular in Word abtippen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✕</span>
                    <span className="text-slate-300">3 bis 6 Stunden verlorene Zeit für Schreibtischarbeit</span>
                  </li>
                </ul>
              </div>

              {/* Die App */}
              <div className="bg-[#0e0e12] border border-orange-500/30 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-[0_0_40px_rgba(249,115,22,0.05)]">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-400 to-orange-600 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl shadow-lg">
                  80% weniger Zeit
                </div>
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none"></div>
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-orange-500">🏆</span> Saniatlas-Weg
                </h3>
                <p className="text-orange-500/70 text-sm mb-8 font-mono">Saniatlas</p>
                <ul className="space-y-4 relative z-10">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold mt-1">✓</span>
                    <span className="text-white font-medium">GEG-konformes Formular direkt am Gebäude abhaken</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold mt-1">✓</span>
                    <span className="text-white font-medium">Kamera direkt in der App pro Bauteil (z.B. Dach, Heizung) öffnen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold mt-1">✓</span>
                    <span className="text-white font-medium">Alle Daten bereits synchron in der Cloud für den Export</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold mt-1">✓</span>
                    <span className="text-white font-medium">Fast keine Nacharbeit, mehr Zeit für neue Projekte</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ROI / EINSPARPOTENZIAL (LFA Klon) */}
        <section className="relative py-32 bg-[#0e0e12] border-y border-white/5" id="roi">
          <div className="max-w-[1100px] mx-auto px-5 md:px-10">
            <h2 className="text-3xl md:text-5xl font-black leading-tight text-white mb-6 text-center">
              So entlastet Saniatlas<br/>Ihren Betriebsablauf.
            </h2>
            <p className="text-lg text-slate-400 max-w-[600px] mx-auto mb-20 text-center">
              Konkrete Zahlen auf Basis von Berater-Feedback April 2026. Was die Digitalisierung Ihrer Begehungsdaten sofort ändert.
            </p>

            <div className="bg-[#0a0a0c] border border-white/10 rounded-3xl p-8 md:p-12 mb-12">
              <h3 className="text-xl font-bold text-white mb-8">Was Saniatlas aus Ihrem Zeitplan streicht.</h3>
              <div className="space-y-6 text-sm md:text-base">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-slate-400">Word-Formulare tippen</span>
                  <span className="text-white font-mono">— spart ~1,5 Stunden</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-slate-400">Handy-Fotos zuordnen & komprimieren</span>
                  <span className="text-white font-mono">— spart ~1 Stunde</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-slate-400">GEG-Vollständigkeit nachträglich prüfen</span>
                  <span className="text-white font-mono">— 100% automatisiert</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-white font-bold text-lg">Gesamtersparnis pro Projekt</span>
                  <span className="text-orange-500 font-bold text-lg">bis zu 3–4 Stunden</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mt-12 justify-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center w-full md:w-1/3">
                <span className="block text-4xl font-black text-orange-500 mb-2">14.000</span>
                <span className="text-slate-300 text-sm">Zugelassene EEE-Experten in Deutschland</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center w-full md:w-1/3">
                <span className="block text-4xl font-black text-orange-500 mb-2">100%</span>
                <span className="text-slate-300 text-sm">GEG / BAFA Kompatibilität & Vollständigkeitsprüfung</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center w-full md:w-1/3">
                <span className="block text-4xl font-black text-orange-500 mb-2">ROI</span>
                <span className="text-slate-300 text-sm">Bereits ab dem ersten abgewickelten Projekt</span>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNIK & DATENSCHUTZ */}
        <section className="relative py-32 bg-[#0a0a0c]" id="architektur">
          <div className="max-w-[1100px] mx-auto px-5 md:px-10 text-center">
            <h2 className="text-3xl md:text-5xl font-black leading-tight text-white mb-6">
              Integrierter<br/>Datenschutz
            </h2>
            <p className="text-lg text-slate-400 max-w-[600px] mx-auto mb-16">
              Ihre Kundendaten und Gebäudefotos sind bei uns sicher. Moderne Technologie, gehostet in Europa, gesichert durch Row-Level-Security.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
              <div>
                <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-orange-500">🔒</span> Ihre Daten sind isoliert
                </h4>
                <p className="text-slate-400 mb-6">
                  Jeder Berater sieht streng isoliert nur die eigenen Projekte. Durch den Einsatz von Supabase Row-Level Security auf Datenbankebene ist technischer Fremdzugriff ausgeschlossen.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/5 border border-white/10 text-slate-300 text-xs font-mono px-3 py-1.5 rounded-lg">Next.js 16</span>
                  <span className="bg-white/5 border border-white/10 text-slate-300 text-xs font-mono px-3 py-1.5 rounded-lg">Supabase</span>
                  <span className="bg-white/5 border border-white/10 text-slate-300 text-xs font-mono px-3 py-1.5 rounded-lg">PostgreSQL</span>
                  <span className="bg-white/5 border border-white/10 text-slate-300 text-xs font-mono px-3 py-1.5 rounded-lg">PWA</span>
                </div>
              </div>
              <div className="bg-[#0e0e12] border border-white/10 rounded-2xl p-8 flex items-center justify-center flex-col shadow-inner">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-500 mb-4">🇪🇺</div>
                <h4 className="text-white font-bold mb-2">DSGVO Konform</h4>
                <p className="text-sm text-slate-400 text-center">EU-Server Hosting und DSGVO-konforme Datenhaltung. Impressum und Datenschutzerklärungen sind integriert.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="relative py-32 bg-[#0e0e12] border-t border-white/5" id="team">
          <div className="max-w-[1100px] mx-auto px-5 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black leading-tight text-white mb-6">
                Wer steckt dahinter?
              </h2>
              <p className="text-lg text-slate-400 max-w-[600px] mx-auto">
                Ein Team aus IT-Experten, das Software für die Praxis baut, statt nur am Schreibtisch.
              </p>
            </div>

            <div className="max-w-2xl mx-auto bg-[#0a0a0c] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
               <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                 <div className="shrink-0 relative flex items-center justify-center bg-white/5 w-32 h-32 rounded-3xl border border-white/10 p-3">
                    <img src="/lp_energy/logo.jpg" alt="WAMOCON GmbH Logo" className="w-full h-full object-contain rounded-xl" />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-white mb-1">WAMOCON GmbH</h3>
                   <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-4">Entwicklung & Architektur</p>
                   <p className="text-slate-400 leading-relaxed mb-4">
                     Wir vereinen tiefgreifende IT-Projekterfahrung in Deutschlands Leitindustrien mit zielgerichteter Produktentwicklung. Die WAMOCON GmbH entwickelt praxiserprobte Fachsoftware, die das Leben von Fachkräften messbar erleichtert.
                   </p>
                   <p className="text-slate-500 text-sm italic">
                     "Wir bauen Werkzeuge, die im Keller und auf dem Dachboden funktionieren, nicht nur im Hochglanz-Büro."
                   </p>
                 </div>
               </div>
            </div>
            
            <div className="text-center mt-20">
              <div className="inline-flex gap-2 items-center bg-white/5 px-6 py-3 rounded-full border border-white/10">
                <span className="text-white text-sm font-bold">🚀 Bereit für Welle 5?</span>
                <span className="text-slate-400 text-sm">Features der Konkurrenz zu fairen Preisen.</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0a0a0c] border-t border-white/10 text-slate-500 py-16">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4 hover:opacity-80 transition-opacity cursor-pointer">
               <img src="/lp_energy/logo.jpg" alt="Saniatlas Logo" className="h-8 w-8 rounded-lg object-contain" />
               <span className="text-lg font-black tracking-tight text-white">Saniatlas</span>
            </div>
            <p className="text-xs max-w-xs text-slate-500">
               © {new Date().getFullYear()} WAMOCON GmbH.<br/>
               HRB 123666 · Mergenthalerallee 79–81, 65760 Eschborn.
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-6 justify-center">
            <a href="#" className="font-semibold text-xs uppercase tracking-wider text-slate-400 hover:text-white transition-colors">Impressum</a>
            <a href="#" className="font-semibold text-xs uppercase tracking-wider text-slate-400 hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="font-semibold text-xs uppercase tracking-wider text-slate-400 hover:text-white transition-colors">AGB</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}