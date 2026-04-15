import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [NavbarComponent, RouterLink, CommonModule],
  template: `
    <header class="site-header site-header--home">
      <div class="container">
        <img class="hero-banner-img" src="images/feature-graphic-v1.svg" width="1104" height="500" alt="BreatheWith: calm breathing, quiet focus. Simple tools for a balanced life." decoding="async" fetchpriority="high">
      </div>
      <app-navbar [minimal]="false" variant="support"></app-navbar>
    </header>

    <main id="main" class="container main-stack">
      <section class="card policy-section">
        <h1 class="policy-title">Privacy Policy</h1>
        <p class="policy-tagline">How we treat your information</p>
        <p class="policy-meta"><strong>Last updated: April 14, 2026</strong></p>
        <p>BreatheWith supports breathing practice without building a profile about you. This policy describes what the app does with information in plain language.</p>

        <h2>Information we collect</h2>
        <p>BreatheWith does not collect, store on our servers, transmit to us, or sell personal information, health information, usage analytics, or advertising identifiers.</p>

        <h2>Data stored on your device</h2>
        <p>The app may keep preferences locally so sessions feel consistent—such as chosen rhythms, audio and haptic settings, and appearance options. That data remains on your device under your operating system’s controls.</p>

        <h2>This website</h2>
        <p>This support site may be hosted on a provider (for example GitHub Pages). Standard web servers can log technical data such as IP address and browser type when you load a page. We do not use those logs for marketing or profiling through this static site.</p>
        <p>If you email us from this site (for support or to ask for a Google Play closed-test invite), you choose what to send. We use that information only to reply or, when you ask, to add your Google account to closed testing in Google Play. We do not sell those messages.</p>
        <p>The closed-test signup form posts to a third-party form handler (FormSubmit) that forwards submissions to our support email; FormSubmit’s privacy terms apply to that step. We use the address you submit only to add you as a Play tester or to reply.</p>

        <h2>Third-party services in the app</h2>
        <p>The application does not embed third-party analytics or advertising SDKs for tracking.</p>

        <h2>Children’s privacy</h2>
        <p>Because we do not knowingly collect personal information through the app, we do not knowingly collect personal information from children.</p>

        <h2>Changes</h2>
        <p>When this policy changes, we will update this page and revise the “Last updated” date.</p>

        <h2>Contact</h2>
        <p>Questions about this policy or the app: <a [href]="'mailto:' + supportEmail" class="inline-email">Email us</a>.</p>

        <a routerLink="/" class="button secondary-button">Back to support</a>
      </section>
    </main>
  `,
  styles: [`
    .site-header--home {
      background: var(--bg-color);
      color: var(--text-primary);
      padding: 1.5rem 0 0;
      margin-bottom: 0;
    }

    .hero-banner-img {
      display: block;
      width: 100%;
      max-width: 100%;
      height: auto;
      filter: drop-shadow(0 12px 28px rgba(7, 26, 35, 0.2)) drop-shadow(0 4px 10px rgba(7, 26, 35, 0.12));
    }

    .policy-title {
      font-size: clamp(1.75rem, 4vw, 2.75rem);
      font-weight: 700;
      letter-spacing: -0.02em;
      line-height: 1.15;
      color: var(--text-primary);
      margin-bottom: 0.35rem;
    }

    .policy-tagline {
      font-size: 1.05rem;
      color: var(--text-secondary);
      margin-bottom: 1.25rem;
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

    .policy-section p {
      color: var(--text-secondary);
      margin-bottom: 1rem;
    }

    .policy-meta {
      color: var(--text-primary);
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

    .secondary-button {
      background-color: var(--accent-rose);
    }

    .inline-email {
      color: var(--link-accent);
      font-weight: 600;
      text-decoration: none;
    }

    @media (max-width: 560px) {
      .card {
        padding: 1.5rem 1.25rem;
      }
    }
  `]
})
export class PrivacyComponent implements OnInit {
  supportEmail = "";

  ngOnInit() {
    this.supportEmail = this.decodeAddr();
  }

  private decodeAddr() {
    const bytes = [115, 117, 112, 112, 111, 114, 116, 64, 105, 107, 105, 97, 112, 112, 115, 46, 99, 111, 109];
    return String.fromCharCode.apply(null, bytes);
  }
}
