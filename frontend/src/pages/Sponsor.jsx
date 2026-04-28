const Sponsor = () => {
  return (
    <main>
      <section className="content-hero">
        <p className="eyebrow">Tournament partners</p>
        <h1>Sponsor</h1>
        <p className="hero-text">Official sponsor and organiser information for Typing Championship 2026.</p>
      </section>

      <section className="sponsor-page-grid" aria-label="Tournament sponsors">
        <article className="sponsor-tier sponsor-tier-main">
          <p className="eyebrow">Main Sponsor & Organizer</p>
          <div className="sponsor-logo-row">
            <img className="sponsor-page-logo sponsor-logo-square" src="/assets/nyein-techno-logo.png" alt="NYEIN Techno logo" />
            <img className="sponsor-page-logo sponsor-logo-wide" src="/assets/sponsor-logo.png" alt="IT Studio logo" />
          </div>
          <h2>NYEIN Techno x IT Studio</h2>
          <p>Main sponsor and organiser for Typing Championship 2026.</p>
        </article>

        {/* <article className="sponsor-tier sponsor-tier-main">
          <p className="eyebrow">Prize Sponsor</p>
          <h2>Winner Prize Sponsor</h2>
          <div className="sponsor-logo-row">
            <img className="sponsor-page-logo sponsor-logo-square" src="/assets/nyein-techno-logo.png" alt="NYEIN Techno logo" />
            <img className="sponsor-page-logo sponsor-logo-wide" src="/assets/sponsor-logo.png" alt="IT Studio logo" />
          </div>
          <p>Winner Prize Sponsor - NYEIN Techno x IT Studio</p>
        </article> */}

        <article className="sponsor-tier">
          <p className="eyebrow">Prize Sponsor</p>
          <h2>Accessories Prize Sponsor</h2>
          <div className="sponsor-logo-row">
            <img className="sponsor-page-logo sponsor-logo-fantech" src="/assets/fantech-logo.jpg" alt="Fantech Myanmar logo" />
          </div>
          <p>Accessories Prize Sponsor - Fantech Myanmar</p>
        </article>

        <article className="sponsor-tier">
          <p className="eyebrow">Prize Sponsor</p>
          <h2>Tournament Gear Sponsor</h2>
          <div className="sponsor-logo-row">
            <img className="sponsor-page-logo sponsor-logo-vmax" src="/assets/vmax-logo.png" alt="VMAX Computer & IT Supplies logo" />
          </div>
          <p>Tournament Gear Sponsor - VMAX Computer & IT Supplies</p>
        </article>

        <article className="sponsor-tier">
          <p className="eyebrow">Prize Sponsor</p>
          <h2>Media Display Sponsor</h2>
          <div className="sponsor-logo-row">
            <img className="sponsor-page-logo sponsor-logo-edka" src="/assets/EDKA.png" alt="EDKA Digital logo" />
          </div>
          <p>Media Display Sponsor - EDKA Digital</p>
        </article>
      </section>
    </main>
  );
};

export default Sponsor;
