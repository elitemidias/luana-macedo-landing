// === Luana Macedo — sections (Resultados, Espaço, Depoimentos) ============

// -------------------- Resultados carousel
const RESULTS = [
{ src: "assets/result-brows-3.jpg", tag: "Nanopigmentação · Sobrancelha" },
{ src: "assets/suave-lips.png", tag: "Suave Lips · Lábios" },
{ src: "assets/result-brows-1.jpg", tag: "Fio a fio · Sobrancelha" },
{ src: "assets/result-lips-1.jpg", tag: "Aquarela · Lábios" },
{ src: "assets/nano-shadow.png", tag: "Nanoshadow · Sobrancelha" },
{ src: "assets/suave-lips.png", tag: "Suave Lips · Cor neutra" },
{ src: "assets/luana-02.jpg", tag: "Avaliação · iPad com referências" },
{ src: "assets/alopecia-new.jpeg", tag: "Alopecia · Restauração" }];


function Resultados() {
  const wrapRef = React.useRef(null);
  const stateRef = React.useRef({
    isDragging: false,
    startX: 0,
    startScroll: 0,
    moved: 0
  });
  const [dragging, setDragging] = React.useState(false);

  // Auto-scroll loop (pauses on drag and on hover)
  React.useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let raf;
    let hovering = false;
    const onEnter = () => {hovering = true;};
    const onLeave = () => {hovering = false;};
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    const tick = () => {
      if (!stateRef.current.isDragging && !hovering) {
        el.scrollLeft += 1.2;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Looping scroll position
  const normalize = (el) => {
    const half = el.scrollWidth / 2;
    if (el.scrollLeft < 0) el.scrollLeft += half;
    if (el.scrollLeft >= half) el.scrollLeft -= half;
  };

  const scrollBy = (dir) => {
    const el = wrapRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 340, behavior: 'smooth' });
  };

  const onPointerDown = (e) => {
    const el = wrapRef.current;
    stateRef.current.isDragging = true;
    stateRef.current.startX = e.clientX;
    stateRef.current.startScroll = el.scrollLeft;
    stateRef.current.moved = 0;
    setDragging(true);
    try {el.setPointerCapture(e.pointerId);} catch (_) {}
  };
  const onPointerMove = (e) => {
    if (!stateRef.current.isDragging) return;
    const el = wrapRef.current;
    const dx = e.clientX - stateRef.current.startX;
    stateRef.current.moved = Math.abs(dx);
    el.scrollLeft = stateRef.current.startScroll - dx;
    normalize(el);
  };
  const finish = (e) => {
    if (!stateRef.current.isDragging) return;
    stateRef.current.isDragging = false;
    setDragging(false);
    const el = wrapRef.current;
    try {if (e && el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);} catch (_) {}
  };

  // Suppress click that fires at end of drag
  const onClickCapture = (e) => {
    if (stateRef.current.moved > 6) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  // duplicate the list for the infinite scroll
  const items = [...RESULTS, ...RESULTS];
  return (
    <section className="section" id="resultados" data-screen-label="04 Resultados">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow-row">
            <span className="eyebrow">Resultados reais</span>
          </div>
          <h2>Mulheres reais. Rostos reais. <em>Resultados que ficam.</em></h2>
          <p className="sub">
            Nenhuma foto publicada sem autorização. O que você vê aqui é o que acontece de verdade.
          </p>
        </div>
      </div>

      <div className="results-stage reveal">
        <div className="fade fade-l" aria-hidden="true"></div>
        <div className="fade fade-r" aria-hidden="true"></div>
        <div
          className={`results-drag-wrap ${dragging ? "is-dragging" : ""}`}
          ref={wrapRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={finish}
          onPointerCancel={finish}
          onClickCapture={onClickCapture}
          aria-label="Carrossel de resultados — arraste para navegar">
          
          <div className="results-drag-track">
            {items.map((r, i) =>
            <figure key={i} className="result-card">
                <img src={r.src} alt={r.tag} loading="lazy" draggable="false" />
                <figcaption>{r.tag}</figcaption>
              </figure>
            )}
          </div>
        </div>
      </div>

      <div className="container" style={{ textAlign: "center", marginTop: "var(--sp-5)" }}>
        <div className="carousel-nav">
          <button className="carousel-arrow" onClick={() => scrollBy(-1)} aria-label="Anterior">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="results-drag-hint" aria-hidden="true">
            <span className="drag-hand">👆</span>
            Arraste para ver mais
          </div>
          <button className="carousel-arrow" onClick={() => scrollBy(1)} aria-label="Próxima">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div style={{ marginTop: "var(--sp-5)" }}>
          <a href="#agendar" className="btn btn-primary btn-wa no-underline" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20, flexShrink: 0 }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.847L0 24l6.336-1.508A11.956 11.956 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.373l-.36-.214-3.727.977.999-3.645-.234-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" /></svg>
            Quero um resultado assim
          </a>
        </div>
      </div>
    </section>);

}

// -------------------- Espaço
function Espaco() {
  return (
    <section className="section section--cream" id="espaco" data-screen-label="05 Espaço">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow-row">
            <span className="eyebrow">Onde você vai ser atendida</span>
          </div>
          <h2>Um espaço pensado para que você se sinta <em>segura</em> desde o momento em que entra.</h2>
        </div>

        <div className="espaco-layout reveal">
          <div className="espaco-grid espaco-grid--quad">
            <div><img src="assets/luana-bloco-1.jpeg" alt="Espaço Luana Macedo" loading="lazy" /></div>
            <div><img src="assets/luana-bloco-2.jpeg" alt="Espaço Luana Macedo" loading="lazy" /></div>
            <div><img src="assets/luana-bloco-3.jpeg" alt="Espaço Luana Macedo" loading="lazy" /></div>
            <div><img src="assets/luana-bloco-4.jpeg" alt="Espaço Luana Macedo" loading="lazy" /></div>
          </div>

          <aside className="address-card">
            <span className="eyebrow">Como nos encontrar</span>

            <div className="address-highlight">
              <div className="address-street">Av. das Américas, 12.600</div>
              <div className="address-complement">Bloco 1, Sala 202</div>
              <span className="address-landmark">Blue Square · Barra da Tijuca · Rio de Janeiro — RJ</span>
            </div>

            <div className="map">
              <iframe
                src="https://maps.google.com/maps?q=Blue+Square+Barra+da+Tijuca+Av+das+Americas+12600+Rio+de+Janeiro+RJ&output=embed&z=15&hl=pt-BR"
                width="100%"
                height="220"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização — Blue Square, Barra da Tijuca"
              />
            </div>

            <div className="address-cta-row">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Av.+das+Am%C3%A9ricas+12600+Blue+Square+Barra+da+Tijuca+Rio+de+Janeiro"
                target="_blank"
                rel="noreferrer"
                className="btn-maps no-underline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12z"/>
                  <circle cx="12" cy="10" r="2.5"/>
                </svg>
                Como chegar — Google Maps
              </a>
              <a
                href="https://waze.com/ul?q=Av+das+Americas+12600+Blue+Square+Barra+da+Tijuca+Rio+de+Janeiro"
                target="_blank"
                rel="noreferrer"
                className="btn-waze no-underline">
                Abrir no Waze
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>);

}

// -------------------- Depoimentos
const TESTI = [
{
  quote: "Eu cheguei com tanto medo. Achei que ia ficar artificial, marcado. Saí sem conseguir explicar pra ninguém o que mudou, mas todo mundo perguntou se eu tinha viajado.",
  name: "Mayara Munaretto",
  what: "Suave Lips · 38 anos",
  initial: "M"
},
{
  quote: "Perdi minha sobrancelha pra alopecia e parei de me reconhecer no espelho. Não foi sobre vaidade. Foi sobre voltar a ser eu. A Luana entendeu isso antes de mim.",
  name: "Patrícia R.",
  what: "Alopecia · 52 anos",
  initial: "P"
},
{
  quote: "Vim por indicação de uma amiga. Achei que ia ter pressão pra fechar na hora. Tive o oposto: a Luana me explicou três coisas que eu não devia fazer ainda. Voltei dois meses depois.",
  name: "Camila Andrade",
  what: "Nanopigmentação · 31 anos",
  initial: "C"
},
{
  quote: "O que mais me marcou foi a honestidade. Ela disse exatamente o que ia sumir nos primeiros dias. Não tive nenhuma surpresa. Isso vale ouro.",
  name: "Renata Lima",
  what: "Sobrancelha · 44 anos",
  initial: "R"
},
{
  quote: "Depois dos 50 a gente já desistiu de muita coisa. Achei que sobrancelha boa era só pras outras. Hoje acordo, lavo o rosto e tá tudo lá. Parece pouco. Pra mim foi tudo.",
  name: "Vera Castro",
  what: "Sobrancelha · 56 anos",
  initial: "V"
},
{
  quote: "Minhas amigas notaram, mas ninguém soube dizer o quê. Ouvi 'você tá descansada', 'mudou o cabelo?', 'tá maquiada?'. Nenhuma chutou sobrancelha. É exatamente isso que eu queria.",
  name: "Bianca Souza",
  what: "Delineado + Sobrancelha · 35 anos",
  initial: "B"
}];


function Depoimentos() {
  const items = [...TESTI, ...TESTI];
  return (
    <section className="section" id="depoimentos" data-screen-label="06 Depoimentos">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow-row">
            <span className="eyebrow">O que as clientes dizem</span>
          </div>
          <h2>Resultados que só elas podem dizer. <em>E as amigas também.</em></h2>
        </div>
      </div>

      <div className="testi-track-wrap reveal">
        <div className="testi-track">
          {items.map((t, i) =>
          <article key={i} className="testi-card">
              <p className="testi-quote">{t.quote}</p>
              <div className="testi-meta">
                <div className="testi-avatar">{t.initial}</div>
                <div>
                  <p className="who">{t.name}</p>
                  <p className="what">{t.what}</p>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}

Object.assign(window, { Resultados, Espaco, Depoimentos, Cursos });

// -------------------- Cursos e treinamentos
function Cursos() {
  return (
    <section className="cursos" id="cursos" data-screen-label="08 Cursos">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow-row">
            <span className="eyebrow" style={{ color: "var(--color-tan)" }}>Para profissionais</span>
          </div>
          <h2 style={{ color: "var(--color-off-white)" }}>Cursos e treinamentos</h2>
        </div>

        <div className="cursos-grid reveal">
          <div><img src="assets/curso-new-02.png" alt="Supervisão — procedimento ao vivo com ring light" loading="lazy" /></div>
          <div><img src="assets/curso-new-03.png" alt="Aula prática — sobrancelha com alunas" loading="lazy" /></div>
          <div><img src="assets/curso-new-04.png" alt="Luana fazendo micropigmentação labial" loading="lazy" /></div>
        </div>

        <div className="cursos-cta reveal" style={{ textAlign: "center", marginTop: "var(--sp-7)" }}>
          <a
            href="https://wa.me/5521999999999?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20cursos%20e%20treinamentos"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary no-underline"
            style={{ fontSize: 14, padding: "16px 36px" }}
            onClick={() => window.fbq && window.fbq('track', 'Contact')}
            
            Quero saber mais sobre cursos e treinamentos
          </a>
        </div>
      </div>
    </section>);

}