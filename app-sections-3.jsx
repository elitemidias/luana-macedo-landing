// === Luana Macedo — sections (FAQ, CTA Final, Footer) + App shell ============

const FAQS = [
{
  q: "Tenho medo de ficar artificial.",
  a: "Esse é o medo mais comum, e o mais legítimo. A Luana não trabalha com resultado que chama atenção pra si mesmo. Se o procedimento for mais visível do que você, algo deu errado. A conversa de avaliação existe exatamente pra alinhar isso antes de qualquer decisão."
},
{
  q: "Já vi resultado horrível em alguém. Como sei que não vai acontecer comigo?",
  a: "Resultado ruim existe porque há muita profissional sem preparo no mercado. O trabalho da Luana fala por si. Os resultados são documentados, reais, de clientes reais. Você pode ver antes de decidir qualquer coisa."
},
{
  q: "Nunca fiz nada assim. Não sei se é pra mim.",
  a: "Não precisa saber antes de conversar. A avaliação existe pra você entender o que é possível, o que faz sentido pro seu rosto e o que vai acontecer em cada etapa, sem pressão, sem compromisso de sair com data marcada."
},
{
  q: "Minha sobrancelha caiu por alopecia. Tem solução?",
  a: "Tem. A micropigmentação não trata a alopecia, mas restaura a aparência natural da sobrancelha enquanto você cuida da condição com seu médico. Se você tem alopecia, conte isso no primeiro contato. O atendimento é adaptado inteiramente pra sua situação."
},
];


function FAQ() {
  const [open, setOpen] = React.useState(0);
  const toggle = (i) => setOpen(open === i ? -1 : i);
  return (
    <section className="section section--cream" id="duvidas" data-screen-label="07 Dúvidas">
      <div className="container-narrow">
        <div className="section-head reveal" style={{ textAlign: "left", margin: "0 0 var(--sp-8)" }}>
          <div className="eyebrow-row">
            <span className="eyebrow">Antes de entrar em contato</span>
          </div>
          <h2 style={{ textAlign: "left", marginTop: "var(--sp-4)" }}>
            Dúvidas que toda mulher tem, mas <em>nem sempre faz em voz alta</em>.
          </h2>
        </div>

        <div className="faq reveal">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`faq-item ${isOpen ? "is-open" : ""}`}>
                <button className="faq-q" onClick={() => toggle(i)} aria-expanded={isOpen}>
                  <span>{f.q}</span>
                  <span className="chev" aria-hidden="true">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>);

          })}
        </div>
      </div>
    </section>);

}

// -------------------- Final CTA
function FinalCTA() {
  return (
    <section className="final-cta" id="agendar" data-screen-label="08 CTA Final">
      <div className="container-narrow reveal">
        <div className="eyebrow-row">
          <span className="eyebrow">Próximo passo</span>
        </div>
        <h2>
          A agenda é limitada. Se você está pensando <em>há algum tempo</em>, o melhor momento é agora.
        </h2>
        <p className="text">
          O atendimento é presencial na nossa clínica, o que significa vagas reais, com limite real.
          A conversa começa pelo WhatsApp. Sem formulário, sem burocracia. Você conta o que procura e a Luana te orienta sobre o melhor procedimento e a disponibilidade de agenda.
        </p>
        <a href="https://wa.me/5521995365112?text=Vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20procedimentos" target="_blank" rel="noreferrer" className="btn btn-wa-final no-underline" onClick={() => window.fbq && window.fbq('track', 'Contact')}>
          <WhatsAppIcon size={20} />
          Quero agendar um horário
        </a>
        <p className="final-cta-meta">
          Resposta em até 24h <span className="dot">·</span> Sem compromisso <span className="dot">·</span> Atendimento personalizado
        </p>

        <p className="ps">
          <span className="ps-label">P.S.</span>
          O resultado que ninguém percebe que você fez, mas todo mundo nota que você está bem. Ele começa com uma mensagem.
        </p>
      </div>
    </section>);

}

// -------------------- Instagram CTA
function InstaCTA() {
  return (
    <section className="insta-cta" data-screen-label="09b Instagram">
      <div className="container">
        <div className="insta-cta-grid">
          <div className="insta-cta-text reveal">
            <div className="eyebrow-row">
              <span className="eyebrow" style={{ color: "var(--color-tan)" }}>Instagram</span>
            </div>
            <h2 style={{ color: "var(--color-off-white)" }}>
              Acompanhe resultados reais <em>no dia a dia</em>.
            </h2>
            <p style={{ color: "rgba(251,248,244,0.7)", fontSize: 16, lineHeight: 1.65, marginTop: "var(--sp-5)", maxWidth: 420 }}>
              No Instagram da Luana você vê o antes e depois de cada procedimento, bastidores do atendimento e dicas de cuidados.
            </p>
            <a
              href="https://instagram.com/luanamacedomicro"
              target="_blank"
              rel="noreferrer"
              className="btn insta-btn no-underline"
              style={{ marginTop: "var(--sp-6)", display: "inline-flex", alignItems: "center", gap: 10 }}
            >
              <InstagramIcon size={20} />
              Seguir @luanamacedomicro
            </a>
          </div>
          <div className="insta-cta-phone reveal">
            <img src="assets/iphone-mockup.png" alt="Perfil do Instagram @luanamacedomicro" />
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------------- Footer
function SocialStrip() {
  return (
    <div className="social-strip">
      <div className="container social-strip-inner">
        <span className="social-strip-label">Siga a Luana</span>
        <a href="https://instagram.com/luanamacedomicro" target="_blank" rel="noreferrer" className="social-strip-link no-underline">
          <InstagramIcon />
          <span>@luanamacedomicro</span>
        </a>
        <a href="https://wa.me/5521995365112?text=Vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noreferrer" className="social-strip-link no-underline" onClick={() => window.fbq && window.fbq('track', 'Contact')}>
          <WhatsAppIcon />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>);

}

// -------------------- Footer
function Footer() {
  return (
    <footer className="footer" data-screen-label="09 Rodapé">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-mark">Luana Macedo</div>
            <p className="tag">Especialista em naturalidade</p>
            <p style={{ marginTop: "var(--sp-4)", maxWidth: 320, color: "var(--color-brown)", fontSize: 14, lineHeight: 1.6, fontWeight: 600 }}>
              Micropigmentação que pertence ao rosto. Atendimento personalizado, com foco total em você.
            </p>
          </div>

          <div>
            <h4>Onde estamos</h4>
            <p style={{ fontFamily: "Montserrat" }}>
              📍 Av. das Américas, 12.600  ·  Bloco 1, Sala 202 · Blue Square  ·  Barra da Tijuca, Rio de Janeiro
            </p>
          </div>

          <div>
            <h4>Falar com a Luana</h4>
            <div className="footer-social">
              <a href="https://instagram.com/luanamacedomicro" target="_blank" rel="noreferrer">
                <InstagramIcon /> @luanamacedomicro
              </a>
              <a href="https://wa.me/5521995365112?text=Vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20procedimentos" target="_blank" rel="noreferrer" onClick={() => window.fbq && window.fbq('track', 'Contact')}>
                <WhatsAppIcon /> WhatsApp · Resposta em 24h
              </a>
            </div>
          </div>
        </div>

        <div className="footer-mini">
          <span>© Luana Macedo Micropigmentação</span>
          <a href="politica-de-privacidade.html">Política de Privacidade</a>
        </div>
      </div>
    </footer>);

}

// -------------------- Tweaks Panel content
function LuanaTweaks({ t, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Hero">
        <TweakSelect
          label="Foto de capa"
          value={t.heroPhoto}
          onChange={(v) => setTweak("heroPhoto", v)}
          options={[
          { value: "assets/luana-hero-hq.jpeg", label: "Nova · Fundo cinza (profissional)" },
          { value: "assets/luana-01.jpg", label: "01 · Blazer preto (editorial)" },
          { value: "assets/luana-06.jpg", label: "06 · Vestido bege (suave)" },
          { value: "assets/luana-04.jpg", label: "04 · Sofá branco (sereno)" },
          { value: "assets/luana-03.jpg", label: "03 · BTS câmera (íntimo)" },
          { value: "assets/luana-02.jpg", label: "02 · iPad com lábios (técnico)" }]
          } />
        
        <TweakText
          label="Código de peça"
          value={t.pieceCode}
          onChange={(v) => setTweak("pieceCode", v)} />
        
      </TweakSection>

      <TweakSection label="Sobre">
        <TweakSelect
          label="Foto da Luana"
          value={t.sobrePhoto}
          onChange={(v) => setTweak("sobrePhoto", v)}
          options={[
          { value: "assets/luana-03.jpg", label: "03 · BTS câmera" },
          { value: "assets/luana-01.jpg", label: "01 · Blazer preto" },
          { value: "assets/luana-04.jpg", label: "04 · Sofá branco" },
          { value: "assets/luana-06.jpg", label: "06 · Vestido bege" }]
          } />
        
      </TweakSection>

      <TweakSection label="Atmosfera">
        <TweakColor
          label="Paleta de fundo"
          value={t.bg}
          onChange={(v) => setTweak("bg", v)}
          options={["#FBF8F4", "#F1F1F1", "#EFE4D9"]} />
        
      </TweakSection>
    </TweaksPanel>);

}

// -------------------- WhatsApp FAB
function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/5521995365112?text=Vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20procedimentos"
      target="_blank"
      rel="noreferrer"
      className="wa-fab no-underline"
      aria-label="Falar no WhatsApp"
      onClick={() => window.fbq && window.fbq('track', 'Contact')}>
      
      <WhatsAppIcon size={26} />
    </a>);

}

// -------------------- Root App
function App() {
  const [t, setTweak] = useTweaks(window.__TWEAK_DEFAULTS || {});
  useReveal();

  // apply bg
  React.useEffect(() => {
    document.documentElement.style.setProperty("--color-paper", t.bg);
  }, [t.bg]);

  return (
    <React.Fragment>
      <Nav pieceCode={t.pieceCode} />
      <Hero pieceCode={t.pieceCode} heroPhoto={t.heroPhoto} />
      <Procedimentos />
      <Sobre photo={t.sobrePhoto} />
      <Resultados />
      <Pilares />
      <Espaco />
      <FAQ />
      <Cursos />
      <InstaCTA />
      <FinalCTA />
      <Footer />
      <LuanaTweaks t={t} setTweak={setTweak} />
    </React.Fragment>);

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);