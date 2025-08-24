import { useEffect } from 'react';

declare global {
  interface Window {
    Calendly: any;
  }
}

const Index = () => {
  useEffect(() => {
    const checkCalendly = setInterval(() => {
      if (window.Calendly) {
        clearInterval(checkCalendly);
      }
    }, 100);

    return () => {
      clearInterval(checkCalendly);
      clearInterval(badgeInterval);
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/kevins-club/30min'
      });
    }
    return false;
  };

  return (
    <>
      {/* Urgency Bar */}
      <div className="urgency-bar">
        🔒 This site preview is reserved for 72h.
      </div>

      {/* Sticky Header */}
      <header className="sticky-header">
        <div className="font-semibold text-foreground">Coal Coast Mobile Detailing</div>
        <a 
          href="https://docs.google.com/document/d/1h_lyPw0Z7jG-tTz6QuBsiAvsqPyI8BG8Yksd_Cu5zfc/edit?usp=sharing"
          className="btn-activate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Activate ⇲
        </a>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="centered">
          <div className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🚘 Award-Winning Detailing That Comes to You
          </div>

          <div className="text-lg md:text-xl text-muted-foreground mb-6">
            Cars, utes, trucks, caravans, boats & buses
          </div>

          {/* Proof Bar */}
          <div className="proof-bar">
            <div className="proof-item">
              <div className="text">
                <div className="text-lg mb-1">🏆</div>
                <strong>10+ years & award-winning service</strong>
              </div>
            </div>
            <div className="proof-item">
              <div className="text">
                <div className="text-lg mb-1">⭐</div>
                <strong>5.0 Star Google Reviews</strong>
              </div>
            </div>
            <div className="proof-item">
              <div className="text">
                <div className="text-lg mb-1">✅</div>
                <strong>Best Presented Ute Winner</strong>
              </div>
            </div>
          </div>

          <img 
            src="https://imgur.com/ppiMsSv.png" 
            alt="Coal Coast Mobile Detailing brand/owner photo"
            className="brand-photo"
          />

          <div className="text-sm text-muted-foreground mt-4">
            🇦🇺 Servicing North Wollongong • South Nowra • Wollongong • and beyond — 0414 671 346
          </div>
        </div>
      </section>

      {/* <!-- Elfsight Google Reviews | Coal Coast Mobile Detailing --> */}
      <div className="centered" style={{ marginTop: '2rem' }}>
      <script src="https://elfsightcdn.com/platform.js" async></script>
      <div class="elfsight-app-1c2bf6cf-3571-4fb6-b953-2e4af70eb375" data-elfsight-app-lazy></div>
      </div>

      {/* Page Structure & Copy */}
      <main className="centered" style={{ marginTop: '2rem', paddingBottom: '6rem' }}>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Coal Coast Mobile Detailing
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-4">
          Servicing Wollongong, Nowra & Greater Sydney
        </h2>

        <h3 className="text-lg md:text-xl font-medium text-foreground mb-6">
          Over 10 years of detailing experience — fully mobile, fully equipped
        </h3>

        <div className="space-y-4 mb-8 text-base md:text-lg">
          <p>We bring showroom-level detailing straight to your driveway — or jobsite.</p>
          <p>From sedans to caravans and boats, we clean, polish, and protect it all.</p>
          <p>Trusted by locals. Award-winning service. No shortcuts, just shine.</p>
        </div>

        {/* What We Do */}
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
          What We Do
        </h2>

        <div className="services-grid">
          <div>🧼<br />Exterior Wash — hand wash, wax & tyre shine</div>
          <div>🌀<br />Super Wash — plus interior vacuum & glass</div>
          <div>🧽<br />Mini Detail — wheel polish, disinfect & HydroShield-X</div>
          <div>✨<br />Full Detail — shampoo, polish, HydroShield-X</div>
          <div>🛡️<br />HydroShield-X Protection — long-lasting shine</div>
          <div>🚐<br />Caravan Detailing — RVs & vans polished clean</div>
          <div>🛥️<br />Large Vehicle — trucks, buses & boats detailed</div>
          <div>🏅<br />Awarded — Best Presented Utes winner</div>
        </div>

        {/* How It Works */}
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 mt-8">
          How It Works
        </h2>

        <h3 className="text-lg font-semibold text-foreground mb-4">
          It’s simple — we come to you
        </h3>

        <div className="space-y-2 mb-8 text-base md:text-lg">
          <div>1️⃣ Book a time online or by phone</div>
          <div>2️⃣ We arrive on site with all tools & supplies</div>
          <div>3️⃣ You relax while we restore the shine</div>
        </div>

        {/* Why Choose Us */}
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
          Why Choose Us?
        </h2>

        <div className="space-y-2 mb-8 text-base md:text-lg">
          
          <div>🧰 Full-service mobile — we bring everything</div>
          <div>🏆 Award-winning detailer</div>
          <div>⭐ 5.0 Star Google Reviews</div>
        </div>

        {/* Final Callout */}
        <section className="mt-12 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            Ready for a professional clean?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Call or book online — your vehicle will thank you.
          </p>
        </section>
      </main>

      {/* Main Footer */}
      <footer className="centered" style={{ paddingBottom: '2rem' }}>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="font-semibold">Coal Coast Mobile Detailing</div>
          <div>0414 671 346</div>
          <div>North Wollongong • South Nowra • Wollongong • NSW</div>
          <div className="mt-4">© 2025 Coal Coast Mobile Detailing. All rights reserved.</div>
        </div>
      </footer>

      {/* Sticky Footer */}
      <div className="sticky-footer">
        <a 
          href="tel:+61414671346" 
          className="btn btn-call"
        >
          📞 Call Us
        </a>
        <button 
          onClick={openCalendly}
          className="btn btn-book"
        >
          📅 Book Now
        </button>
      </div>
    </>
  );
};

export default Index;
