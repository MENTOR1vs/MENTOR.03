// Public landing page shown at "/" before Login. It always renders with
// the light corporate palette (".theme-light-locked") regardless of any
// dark mode / accent color a previously signed-in user has saved.
export class LandingView {
  constructor(root) {
    this.root = root;
  }

  render() {
    this.root.innerHTML = `
      <div class="landing-page theme-light-locked">
        <nav class="landing-nav">
          <span class="brand-mark">MENTOR</span>
          <div class="landing-nav-actions">
            <a class="secondary-button inline-button" href="#/login">Login</a>
            <a class="primary-button inline-button" href="#/register">Get Started</a>
          </div>
        </nav>

        <header class="landing-hero">
          <p class="landing-tagline">Mentorship, organized</p>
          <h1>Connect Coders with the right Mentors, every time.</h1>
          <p class="landing-description">
            MENTOR is a mentorship request management platform: Coders ask
            for help, Mentors guide them through it, and Admins keep the
            whole program running smoothly — all in one place.
          </p>
          <div class="landing-hero-actions">
            <a class="primary-button inline-button" href="#/register">Get Started</a>
            <a class="secondary-button inline-button" href="#/login">Login</a>
          </div>
        </header>

        <section class="landing-section">
          <h2>What is MENTOR?</h2>
          <p>
            MENTOR is a web platform built for coding communities and
            bootcamps. It gives every mentorship request a clear home and a
            clear lifecycle, so Coders always know who is helping them and
            Mentors always know what is expected of them.
          </p>
        </section>

        <section class="landing-section">
          <h2>The problem</h2>
          <p>
            Mentorship requests scattered across chats and spreadsheets get
            lost, forgotten, or answered too late. Nobody has a clear view
            of who needs help, who is available, or what has already been
            resolved.
          </p>
        </section>

        <section class="landing-section">
          <h2>The solution</h2>
          <p>
            MENTOR centralizes every request in one dashboard. Coders submit
            requests in seconds, Mentors respond with a click, and Admins
            get full visibility into the whole process — nothing falls
            through the cracks.
          </p>
        </section>

        <section class="landing-section">
          <h2>Key features</h2>
          <div class="landing-grid">
            <article class="landing-card">
              <h3>Mentorship requests</h3>
              <p>Submit, track, accept, reject or complete requests with a clear status at every step.</p>
            </article>
            <article class="landing-card">
              <h3>Profile management</h3>
              <p>Keep your personal and clan information up to date in one place.</p>
            </article>
            <article class="landing-card">
              <h3>Goal tracking</h3>
              <p>Set personal learning goals and track your progress over time.</p>
            </article>
            <article class="landing-card">
              <h3>Admin oversight</h3>
              <p>A read-only, platform-wide view of every user and every request.</p>
            </article>
          </div>
        </section>

        <section class="landing-section">
          <h2>Benefits</h2>
          <div class="landing-grid">
            <article class="landing-card">
              <h3>Faster answers</h3>
              <p>Requests reach the right Mentor immediately, instead of getting lost in chat threads.</p>
            </article>
            <article class="landing-card">
              <h3>Full visibility</h3>
              <p>Everyone always knows the current status of every request.</p>
            </article>
            <article class="landing-card">
              <h3>Personalized experience</h3>
              <p>Light or dark theme and a custom accent color, saved per account.</p>
            </article>
          </div>
        </section>

        <section class="landing-section">
          <h2>How it works</h2>
          <div class="landing-steps">
            <div class="landing-step"><span>1</span><p>Register</p></div>
            <div class="landing-step"><span>2</span><p>Login</p></div>
            <div class="landing-step"><span>3</span><p>Complete your profile</p></div>
            <div class="landing-step"><span>4</span><p>Find mentors</p></div>
            <div class="landing-step"><span>5</span><p>Start learning</p></div>
          </div>
        </section>

        <footer class="landing-footer">
          <div class="landing-footer-inner">
            <span class="brand-mark">MENTOR</span>
            <nav class="landing-footer-links">
              <a href="#/login">Login</a>
              <a href="#/register">Get Started</a>
            </nav>
            <p class="landing-copyright">© ${new Date().getFullYear()} MENTOR. All rights reserved.</p>
          </div>
        </footer>
      </div>
    `;
  }

  bindEvents() {
    // Fully static page — navigation is handled by plain <a href="#/...">.
  }
}
