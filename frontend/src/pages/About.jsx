const About = () => {
  return (
    <main>
      <section className="content-hero about-hero">
        <img className="about-logo" src="/assets/tournament-logo.png" alt="Typing Championship 2026 tournament logo" />
        <div>
          <p className="eyebrow">About the event</p>
          <h1>Typing Championship 2026</h1>
          <p className="hero-text">
            An ICT skill-based competition for typing speed, accuracy, focus, and digital confidence.
          </p>
        </div>
      </section>

      <section className="about-layout">
        <article className="about-panel about-panel-wide">
          <p className="eyebrow">About the Tournament</p>
          <h2>Building Useful ICT Skills</h2>
          <p>
            Typing Championship 2026 is an ICT skill-based competition organized to encourage students,
            youths, office users, and general computer learners to improve their typing speed, accuracy,
            focus, and digital confidence.
          </p>
          <p>
            This tournament is not only about typing fast. It is also about building correct computer
            habits, improving English typing skills, reducing mistakes, and helping participants become
            more familiar with real computer usage.
          </p>
          <p>
            Players will compete by typing given paragraphs within the match system, and their final
            ranking will be decided by leaderboard score. Registration and match checking will be handled
            by staff to make sure every player joins fairly and follows the same rules.
          </p>
        </article>

        <article className="about-panel">
          <p className="eyebrow">Aim of the Tournament</p>
          <h2>Fun, Fair, Competitive</h2>
          <p>
            The main aim of Typing Championship 2026 is to promote useful ICT skills among young people
            and the public in a fun, fair, and competitive way.
          </p>
          <p>
            This tournament helps people improve typing skill, computer confidence, accuracy,
            concentration, and discipline while creating excitement around technology learning.
          </p>
        </article>

        <article className="about-panel">
          <p className="eyebrow">Organized By</p>
          <div className="organiser-logos organiser-logos-large">
            <img className="organiser-logo logo-nyein" src="/assets/nyein-techno-logo.jpg" alt="NYEIN Techno logo" />
            <img className="organiser-logo logo-it" src="/assets/sponsor-logo.png" alt="IT Studio logo" />
          </div>
          <h2>NYEIN Techno x IT Studio</h2>
          <p>The tournament is organized with support from participating branches and partner shops.</p>
        </article>
      </section>

      <section className="objective-grid" aria-label="Tournament objectives">
        <article className="objective-card">
          <h3>Improve typing speed and accuracy</h3>
          <p>The tournament encourages players to type faster while keeping good accuracy and reducing mistakes.</p>
        </article>

        <article className="objective-card">
          <h3>Promote ICT awareness</h3>
          <p>It helps students and general users understand that computer skills are important for education, office work, and future careers.</p>
        </article>

        <article className="objective-card">
          <h3>Build computer confidence</h3>
          <p>Many beginners know how to use phones but are not confident with computers. This event helps them become more comfortable with keyboard typing.</p>
        </article>

        <article className="objective-card">
          <h3>Encourage fair competition</h3>
          <p>Players compete under the same rules, scoring system, and match conditions to make the tournament fair for everyone.</p>
        </article>

        <article className="objective-card">
          <h3>Support young learners</h3>
          <p>The tournament gives young people a chance to join a technology-based activity and improve useful school and work skills.</p>
        </article>

        <article className="objective-card">
          <h3>Reward real skill and effort</h3>
          <p>Winners are selected based on leaderboard results, so players are rewarded for typing performance, accuracy, and consistency.</p>
        </article>
      </section>
    </main>
  );
};

export default About;
