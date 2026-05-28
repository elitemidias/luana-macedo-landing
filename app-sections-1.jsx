// === Luana Macedo — sections (Hero, Sobre, Procedimentos) ============

const { useState, useEffect, useRef } = React;

// -------------------- Reveal-on-scroll hook
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// -------------------- WhatsApp icon
function WhatsAppIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.93.5 3.81 1.47 5.46L2 22l4.79-1.26a9.84 9.84 0 0 0 5.25 1.5h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02A9.88 9.88 0 0 0 12.04 2zm0 18.17h-.01a8.22 8.22 0 0 1-4.19-1.15l-.3-.18-3.11.81.83-3.03-.2-.31a8.2 8.2 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 5.83 2.42 8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.25 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.55.13-.16.25-.64.81-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23a7.5 7.5 0 0 1-1.38-1.72c-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42l-.47-.01a.91.91 0 0 0-.66.31c-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.02 2.56.12.16 1.75 2.67 4.24 3.74.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z" fill="currentColor" />
    </svg>);

}

function InstagramIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>);

}

// -------------------- Nav
function Nav({ pieceCode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {document.body.style.overflow = "";};
  }, [menuOpen]);
  const close = () => setMenuOpen(false);
  return (
    <React.Fragment>
      <nav className={`nav ${scrolled ? "is-scrolled" : ""}`} aria-label="primária">
        <div className="nav-inner">
          <ul className="nav-links">
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#procedimentos-titulo">Procedimentos</a></li>
            <li><a href="#resultados">Resultados</a></li>
            <li><a href="#espaco">Espaço</a></li>
            <li><a href="#cursos">Cursos</a></li>
            <li><a href="#duvidas">Dúvidas</a></li>
          </ul>
          <a href="#top" className="nav-mark-center">
            Luana Macedo
            <small>Especialista em naturalidade</small>
          </a>
          <a href="#agendar" className="nav-cta no-underline">Agendar avaliação</a>
          <button
            className={`nav-hamburger${menuOpen ? " is-open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={menuOpen}>
            
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`nav-drawer${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="nav-drawer-bg" onClick={close} />
        <nav className="nav-drawer-panel" aria-label="Menu mobile">
          <button className="nav-drawer-close" onClick={close} aria-label="Fechar menu">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <ul className="nav-drawer-links">
            <li><a href="#sobre" onClick={close}>Sobre</a></li>
            <li><a href="#procedimentos-titulo" onClick={close}>Procedimentos</a></li>
            <li><a href="#resultados" onClick={close}>Resultados</a></li>
            <li><a href="#espaco" onClick={close}>Espaço</a></li>
            <li><a href="#cursos" onClick={close}>Cursos</a></li>
            <li><a href="#duvidas" onClick={close}>Dúvidas</a></li>
          </ul>
          <a href="#agendar" className="btn btn-primary no-underline nav-drawer-cta" onClick={close}>
            Agendar avaliação
          </a>
        </nav>
      </div>
    </React.Fragment>);

}

// -------------------- Hero
function Hero({ pieceCode, heroPhoto }) {
  return (
    <header className="hero" id="top" data-screen-label="01 Hero">
      {pieceCode && <span className="piece-code">Código {pieceCode}</span>}

      <div className="hero-grid">
        <div className="hero-text reveal">
          <div className="eyebrow-row">
            <span className="eyebrow">Barra da Tijuca · Rio de Janeiro</span>
          </div>
          <h1 className="hero-headline">
            Micropigmentação <em>tão natural</em> que ninguém percebe que você fez. Mas todos notam que você está diferente.
          </h1>
          <p className="hero-sub">
            Para mulheres que querem se sentir bem no próprio rosto. Sem precisar de maquiagem. Sem parecer que fizeram nada.
          </p>
          <div className="hero-cta-row">
            <a href="#agendar" className="btn btn-primary btn-lg btn-icon-arrow no-underline">
              Quero agendar minha avaliação
            </a>
            <p className="hero-cta-micro">
              <span>Atendimento personalizado</span>
              <span className="dot">·</span>
              <span style={{ fontFamily: "Montserrat" }}>Barra da Tijuca, RJ</span>
            </p>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-media-inner">
            <img src={heroPhoto} alt="Luana Macedo" />
          </div>
          <aside className="hero-stat reveal">
            <div className="label">A profissional</div>
            <p className="body">"Naturalidade não é ausência de técnica. É domínio total dela."</p>
            <div className="hero-stat-meta">
              <div className="av">L</div>
              <div className="who">
                Luana Macedo
                <small>Especialista · há 9 anos</small>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </header>);

}

// -------------------- Sobre a Luana
function Sobre({ photo }) {
  return (
    <section className="section" id="sobre" data-screen-label="02 Sobre">
      <div className="container">
        <div className="split">
          <div className="split-media reveal">
            <img src={photo} alt="Luana Macedo em atendimento" />
          </div>
          <div className="split-text reveal">
            <div className="eyebrow-row">
              <span className="eyebrow">Quem atende você</span>
            </div>
            <h2 className="section-title">
              Luana Macedo não faz sobrancelha <em>para impressionar</em>. Faz para pertencer ao rosto.
            </h2>
            <p>
              Há anos atendendo mulheres que chegam com medo: de ficar artificial, de errar, de não saber em quem confiar. E saem sem conseguir explicar exatamente o que mudou. Só sabem que estão bem.
            </p>

            <span className="split-pull">
              Naturalidade não é ausência de técnica.<br />É domínio total dela.
            </span>

            <p>
              Cada procedimento começa com escuta. Do seu rosto. Da sua rotina. Do resultado que faz sentido pra <strong>você</strong>, não pra tendência do momento. Antes de qualquer coisa, você vai saber exatamente o que vai acontecer: o que some nos primeiros 15 dias, o que volta com o retoque, como vai ficar a longo prazo.
            </p>
            <div className="trust-pill">
              Sem ilusão · Sem surpresa
            </div>
          </div>
        </div>
      </div>
    </section>);

}

// -------------------- Procedimentos
const PROCEDIMENTOS = [
{
  num: "01",
  name: "NanoShadow",
  tag: "Nanopigmentação fio a fio + sombreamento",
  tech: "NanoShadow",
  photo: "assets/nano-shadow.png",
  label: "O que esperar",
  body: [
  "A Nanoshadow é uma técnica de micropigmentação de sobrancelhas que une o efeito fio a fio ultrafino com um sombreamento suave, criando um resultado extremamente natural e sofisticado.",
  "Ela é indicada para quem deseja corrigir falhas, melhorar o formato e dar mais definição às sobrancelhas, sem marcar e sem deixar artificial. O acabamento lembra uma sobrancelha naturalmente preenchida, com sombra, respeitando o tom dos pelos e o formato do rosto.",
  "É uma técnica moderna, feita com muita precisão, ideal para quem busca naturalidade e elegância no resultado final."],

  note: "Nos primeiros 15 dias a sobrancelha fica mais marcada. Clareia naturalmente. O resultado final aparece após o retoque."
},
{
  num: "02",
  name: "Nano Up",
  tag: "Micropigmentação fio a fio delicada",
  tech: "Nano Up",
  photo: "assets/nano-up.png",
  label: "Como funciona",
  body: [
  "A técnica de Nano Up é uma micropigmentação fio a fio bem delicada. A Luana desenha tudo antes, fio por fio, para ver junto com você o formato e ficar do jeito mais natural possível, respeitando seu rosto e suas sobrancelhas.",
  "Usa anestésico antes, então é super tranquilo. O resultado não fica marcado, fica leve, natural, como se fossem seus próprios fios, só que mais alinhados e bonitos."],

  note: "Ideal para quem busca um resultado ultrafino e natural, sem sombreamento."
},
{
  num: "03",
  name: "Suave Lips",
  tag: "Micropigmentação labial",
  tech: "Suave Lips",
  photo: "assets/suave-lips.png",
  label: "Indicações",
  body: [
  "Micropigmentação labial que realça sem exagerar. Cor que combina com o seu tom de pele, não com o catálogo.",
  "Indicada para lábios apagados, com contorno irregular, ou que perderam definição com o tempo."],

  note: "O resultado é de lábio bonito, não de lábio feito."
},
{
  num: "04",
  name: "Delineado",
  tag: "Definição do olhar",
  tech: "Delineado Fine Line",
  photo: "assets/delineado-new.jpeg",
  label: "Para quem é",
  body: [
  "Definição do olhar com elegância. Ninguém vai perceber que é permanente. Só vão notar que seu olhar ficou mais expressivo.",
  "Indicado para quem quer praticidade sem abrir mão de um olhar definido no dia a dia."],

  note: "Traço fino, esfumado ou marcado, desenhado no seu rosto, com base na sua estrutura."
},
{
  num: "05",
  name: "Alopecia",
  tag: "Restauração da sobrancelha",
  tech: "Micropigmentação",
  photo: "assets/alopecia-new.jpeg",
  body: [
  "Devolver a sobrancelha pra uma mulher que perdeu não é só estética. É devolver leveza pra acordar, pra aparecer em foto, pra existir sem esconder.",
  "A micropigmentação não trata a alopecia, mas restaura a aparência natural da sobrancelha enquanto você cuida da condição com seu médico. É o trabalho que a Luana leva mais a sério."],

  note: "Se você tem alopecia, conta isso já no primeiro contato. O atendimento é inteiramente adaptado pra sua situação."
},
{
  num: "06",
  name: "Remoção a Laser",
  tag: "Remoção de micropigmentação",
  tech: "Micropigmentação",
  photo: "assets/remocao-laser.jpeg",
  body: [
  "Remoção segura de micropigmentação antiga ou indesejada. Indicada para quem quer corrigir trabalhos anteriores ou preparar a pele para um novo procedimento.",
  "O processo é feito em sessões, com acompanhamento profissional em cada etapa. A quantidade de sessões varia conforme o tipo de pigmento e a profundidade da cor."]

},
{
  num: "07",
  name: "Outros Serviços",
  tag: "Equipe especializada",
  isOutros: true,
  items: [
  {
    name: "Brow Lamination",
    photo: "assets/brow-lamination.png",
    desc: "Alinhamento e modelagem dos fios com efeito natural e definido. Os fios são direcionados para criar volume e simetria, sem pigmentação. Ideal para quem quer sobrancelhas mais cheias e arrumadas com resultado imediato."
  },
  {
    name: "Lash Lifting",
    photo: "assets/lash-lifting.png",
    desc: "Curvatura e definição natural dos cílios, sem extensão e sem manutenção frequente. O procedimento levanta e modela os fios, dando um efeito de olhar aberto e alongado que dura semanas."
  }]

}];


function Procedimentos() {
  const [open, setOpen] = useState(0);
  const toggle = (i) => setOpen(open === i ? -1 : i);

  return (
    <section className="section section--cream" id="procedimentos" data-screen-label="03 Procedimentos">
      <div className="container">
        <div className="section-head reveal" id="procedimentos-titulo">
          <div className="eyebrow-row">
            <span className="eyebrow">O que a Luana faz</span>
          </div>
          <h2>Escolha o que você quer <em>entender melhor</em>.</h2>
          <p className="sub">
            Clique em cada procedimento para ver resultado e como funciona.
          </p>
        </div>

        <div className="proc-list reveal">
          {PROCEDIMENTOS.map((p, i) => {
            const isOpen = open === i;
            return (
              <div key={p.num} className={`proc-item ${isOpen ? "is-open" : ""}`}>
                <button
                  className="proc-head"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}>
                  
                  <span className="num">{p.num}</span>
                  <h3 className="name">{p.name}</h3>
                  <span className="tag">{p.tag}</span>
                  <span className="proc-thumb" aria-hidden="true">
                    {p.isOutros ?
                    <span className="proc-thumb-duo">
                        {p.items.filter((it) => it.photo).slice(0, 2).map((it, idx) =>
                      <img key={idx} src={it.photo} alt="" />
                      )}
                      </span> :
                    p.photo ?
                    <img src={p.photo} alt="" /> :

                    <span className="proc-thumb-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M12 8v4l2.5 2.5" /></svg>
                      </span>
                    }
                  </span>
                  <span className="toggle" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div className="proc-body">
                  <div className="proc-body-inner">
                    {p.isOutros ?
                    <div className="outros-items">
                        {p.items.map((item) =>
                      <div key={item.name} className="outro-item">
                            {item.photo &&
                        <div className="outro-item-photo">
                                <img src={item.photo} alt={item.name} loading="lazy" />
                              </div>
                        }
                            <div className="outro-item-text">
                              <h4>{item.name}</h4>
                              <p>{item.desc}</p>
                            </div>
                          </div>
                      )}
                      </div> :

                    <div className="proc-content">
                        {p.photo &&
                      <div className="proc-photo">
                            <img src={p.photo} alt={`Resultado ${p.name}`} loading="lazy" />
                          </div>
                      }
                        <div className="proc-text">
                          {p.tech &&
                        <div className="proc-tech">
                              <span className="proc-tech-mark">Técnica</span>
                              <span className="proc-tech-name">{p.tech}</span>
                            </div>
                        }
                          {p.body.map((para, idx) => <p key={idx}>{para}</p>)}
                        </div>
                      </div>
                    }
                  </div>
                </div>
              </div>);

          })}
        </div>
      </div>
    </section>);

}

Object.assign(window, {
  useReveal, WhatsAppIcon, InstagramIcon,
  Nav, Hero, Sobre, Procedimentos,
  Manifesto, Pilares
});

// -------------------- Manifesto (brown editorial section)
function Manifesto() {
  return (
    <section className="manifesto" data-screen-label="02b Manifesto">
      <div className="container-narrow reveal">
        <div className="eyebrow-row">
          <span className="eyebrow">Filosofia</span>
        </div>
        <p className="manifesto-quote">
          Se o procedimento chama mais atenção que <span className="script">você</span>, alguma coisa deu errado.
        </p>
        <span className="manifesto-attrib">Luana Macedo</span>
      </div>
    </section>);

}

// -------------------- Pilares (brown 3-col section)
function Pilares() {
  return (
    <section className="pilares" data-screen-label="05b Pilares">
      <div className="container">
        <div className="pilares-head reveal">
          <div>
            <div className="eyebrow-row">
              <span className="eyebrow">Como funciona</span>
            </div>
            <h2>Três compromissos que <em>não negociam</em>.</h2>
          </div>
          <p>
            Cada procedimento começa com escuta: do seu rosto, da sua rotina, do resultado que faz sentido pra você. O que vem depois segue sempre os mesmos três princípios.
          </p>
        </div>
        <div className="pilares-grid pilares-grid--2 reveal">
          <div className="pilar">
            <span className="num">01 · Antes</span>
            <h3>Sem <em>ilusão</em></h3>
            <p>
              Você sai da avaliação sabendo o que é possível e o que não é. Se o resultado que você quer não vai pertencer ao seu rosto, a Luana fala.
            </p>
          </div>
          <div className="pilar">
            <span className="num">02 · Depois</span>
            <h3>Sem <em>surpresa</em></h3>
            <p>
              O retoque está combinado desde o primeiro dia. Você sai sabendo quando ele acontece, o que vai ser ajustado e como funciona o acompanhamento pelo WhatsApp. Nada começa sem que você entenda o que vem depois.
            </p>
          </div>
        </div>
      </div>
    </section>);

}