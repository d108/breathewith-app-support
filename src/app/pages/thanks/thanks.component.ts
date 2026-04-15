import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-thanks',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="site-header site-header--compact">
      <div class="container header-inner">
        <div class="brand">
          <p class="eyebrow"><a routerLink="/">BreatheWith</a></p>
          <h1>Thanks</h1>
          <p class="tagline">Your email was sent.</p>
        </div>
      </div>
    </header>
    <main class="container main-stack">
      <section class="card" aria-labelledby="thanks-heading">
        <h2 id="thanks-heading">What happens next</h2>
        <p class="lede">We’ll add your Google account to the closed-test list when we process the queue. <strong>After your address is accepted,</strong> we’ll email you with the opt-in link and steps (Google may send a separate Play invite). Complete opt-in, then you can install from Play <strong>for free</strong> on the test track. You can also use <strong>Opt in on Google Play</strong> on the <a routerLink="/" fragment="android-beta">support page</a> when we’ve shared that link.</p>
        <a routerLink="/" class="button">Back to support</a>
      </section>
    </main>
  `,
  styles: [`
    .site-header--compact {
      background: var(--header-gradient);
      color: var(--on-accent);
      padding: 2rem 0 1.75rem;
    }

    .header-inner {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      justify-content: space-between;
      gap: 1.25rem 2rem;
    }

    .brand h1 {
      font-size: clamp(1.75rem, 4vw, 2.75rem);
      font-weight: 700;
      letter-spacing: -0.02em;
      line-height: 1.15;
    }

    .eyebrow {
      font-size: 0.95rem;
      margin-bottom: 0.35rem;
    }

    .eyebrow a {
      color: inherit;
      text-decoration: none;
      font-weight: 600;
      border-bottom: 1px solid rgba(255, 255, 255, 0.45);
    }

    .tagline {
      font-size: 1.05rem;
      opacity: 0.95;
      margin-top: 0.35rem;
      max-width: 28em;
    }

    .main-stack {
      flex: 1;
      padding-bottom: 2rem;
      position: relative;
    }

    .card {
      background: var(--surface);
      padding: 2rem 1.75rem;
      border-radius: 1.25rem;
      box-shadow: var(--card-shadow);
      border: var(--card-border);
      margin-bottom: 1.5rem;
    }

    h2 {
      font-size: 1.35rem;
      margin-bottom: 1.25rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid var(--h2-rule);
      color: var(--accent-green-dark);
    }

    .lede {
      color: var(--text-secondary);
      margin-bottom: 1rem;
      font-size: 1.02rem;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: var(--action-min-height);
      padding: var(--action-pad-y) var(--action-pad-x);
      background-color: var(--accent-green);
      color: var(--on-accent);
      border-radius: 2rem;
      font-weight: 600;
      text-decoration: none;
    }

    @media (max-width: 560px) {
      .header-inner {
        flex-direction: column;
        align-items: flex-start;
      }
      .card {
        padding: 1.5rem 1.25rem;
      }
    }
  `]
})
export class ThanksComponent {}
