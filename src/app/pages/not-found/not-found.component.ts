import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="site-header site-header--compact">
      <div class="container header-inner">
        <div class="brand">
          <p class="eyebrow"><a routerLink="/">BreatheWith</a></p>
          <h1>Page not found</h1>
          <p class="tagline">That link may be outdated or mistyped.</p>
        </div>
      </div>
    </header>
    <main class="container main-stack">
      <section class="not-found-card" aria-labelledby="not-found-heading">
        <h2 id="not-found-heading">What you can do</h2>
        <ul>
          <li>Go to the <a routerLink="/">support home</a> for FAQs and contact.</li>
          <li>Open the <a routerLink="/privacy">privacy policy</a> if that is what you needed.</li>
        </ul>
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

    .not-found-card {
      background: var(--surface);
      padding: 2rem 1.75rem;
      border-radius: 1.25rem;
      box-shadow: var(--card-shadow);
      border: var(--card-border);
      margin-bottom: 1.5rem;
    }

    .not-found-card ul {
      list-style: none;
      margin: 1rem 0 1.5rem;
    }

    .not-found-card li {
      position: relative;
      padding-left: 1.25rem;
      margin-bottom: 0.65rem;
      color: var(--text-secondary);
    }

    .not-found-card li::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.55em;
      width: 0.35rem;
      height: 0.35rem;
      border-radius: 50%;
      background: var(--accent-green);
    }

    .not-found-card a:not(.button) {
      color: var(--link-accent);
      font-weight: 600;
      text-decoration: none;
    }

    h2 {
      font-size: 1.35rem;
      margin-bottom: 1.25rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid var(--h2-rule);
      color: var(--accent-green-dark);
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
      .not-found-card {
        padding: 1.5rem 1.25rem;
      }
    }
  `]
})
export class NotFoundComponent {}
