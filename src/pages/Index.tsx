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

    // Hide Elfsight floating badge if present
    const badgeInterval = setInterval(() => {
      const badge = document.querySelector('a[href*="elfsight.com/google-reviews-widget"]');
      if (badge) {
        badge.remove();
        clearInterval(badgeInterval);
      }
    }, 500);

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
          ✔ Activate
        </a>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="centered">
          <div className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Car Detailing Done Right — We Come to You
          </div>

          <div className="text-lg md:text-xl text-muted-foreground mb-6">
            Buff & Polish, Ceramic Coating, Tinting, Rim Repair & More
          </div>

          {/* Proof Bar */}
          <div className="proof-bar">
            <div className="proof-item">
              <div className="text">
                <div className="text-lg mb-1">🏆</div>
                <strong>3+ years serving Sydney</strong>
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
                <strong>Trusted by locals</strong>
              </div>
            </div>
          </div>

          <img 
            src="https://i.imgur.com/x7yeKDK.png" 
            alt="Coal Coast Mobile Detailing brand/owner photo"
            className="brand-photo"
          />

          <div className="text-sm text-muted-foreground mt-4">
            🇦🇺 Sydney Wide • 0414 671 346
          </div>
        </div>
      </section>

      {/* Elfsight Google Reviews Widget */}
      <div className="centered" style={{ marginTop: '2rem' }}>
        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div className="elfsight-app-1c2bf6cf-3571-4fb6-b953-2e4af70eb37" data-elfsight-app-lazy></div>
      </div>

      {/* Page Structure & Copy */}
      <main className="centered" style={{ marginTop: '2rem', paddingBottom: '6rem' }}>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Coal Coast Mobile Detailing
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-4">
          Serving Sydney
        </h2>

        <h3 className="text-lg md:text-xl font-medium text-foreground mb-6">
          Professional Car Detailing | Mobile Service Across the Coast
        </h3>

        <div className="space-y-4 mb-8 text-base md:text-lg">
          <p>Coal Coast brings professional car care to your driveway.</p>
          <p>Interior & exterior detailing, ceramic coating, window tinting and more.</p>
          <p>Book in minutes. Shine for days.</p>
        </div>

        {/* What We Do */}
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
          What We Do
        </h2>

        <div className="services-grid">
          <div>🧼<br />Regular Maintenance Washes</div>
          <div>🌀<br />Buff & Polish — Paint Correction</div>
          <div>🛡️<br />Ceramic Coating Protection</div>
          <div>🧰<br />Full Interior & Exterior Detailing</div>
          <div>🕶️<br />Window Tinting</div>
          <div>🚙<br />Rim & Wheel Repair</div>
        </div>

        {/* How It Works */}
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 mt-8">
          How It Works
        </h2>

        <h3 className="text-lg font-semibold text-foreground mb-4">
          3 simple steps
        </h3>

        <div className="space-y-2 mb-8 text-base md:text-lg">
          <div>1️⃣ Call or book online in minutes</div>
          <div>2️⃣ We come to your location in Sydney</div>
          <div>3️⃣ Shine and drive away with confidence</div>
        </div>

        {/* Why Choose Us */}
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
          Why Choose Us?
        </h2>

        <div className="space-y-2 mb-8 text-base md:text-lg">
          <div>📍 We come to you</div>
          <div>🧰 Professional-grade tools & products</div>
          <div>⭐ 5.0 Star Google Reviews</div>
        </div>

        {/* Final Callout */}
        <section className="mt-12 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            Ready to detail your car?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Book now to restore that showroom look — with zero hassle.
          </p>
        </section>
      </main>

      {/* Main Footer */}
      <footer className="centered" style={{ paddingBottom: '2rem' }}>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="font-semibold">Coal Coast Mobile Detailing</div>
          <div>0414 671 346</div>
          <div>Sydney</div>
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
