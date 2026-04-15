import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [NavbarComponent, CommonModule, RouterLink],
  template: `
    <header class="site-header site-header--home">
      <div class="container">
        <img class="hero-banner-img" src="images/feature-graphic-v1.svg" width="1104" height="500" alt="BreatheWith: calm breathing, quiet focus. Simple tools for a balanced life." decoding="async" fetchpriority="high">
      </div>
      <app-navbar [minimal]="false" variant="support"></app-navbar>
    </header>

    <main id="main" class="container main-stack">
      <h1 class="visually-hidden">BreatheWith: help, downloads, and FAQs</h1>
      
      <section id="download" class="card" aria-labelledby="download-heading">
        <h2 id="download-heading">Download</h2>
        <p class="lede">BreatheWith is a breathing pacer: you choose a rhythm—box, 4–6, balance, or another preset—and follow an <strong>on-screen visual guide</strong> together with <strong>audio and haptic cues</strong>, so you see the pattern, hear it, and feel it—without counting in your head. It runs on <strong>iPhone</strong> and <strong>Apple Watch</strong> (with iPhone) from the App Store, and on <strong>Android</strong> from Google Play—use the buttons below.</p>
        <div class="store-actions">
          <a class="store-button" href="https://apps.apple.com/us/search?term=BreatheWith" rel="noopener noreferrer">App Store</a>
          <a class="store-button store-button--play" href="https://play.google.com/store/search?q=BreatheWith&amp;c=apps" rel="noopener noreferrer">Google Play</a>
        </div>
        <p class="fine-print">If search does not show the app in your region, open the store on your device and search for <strong>BreatheWith</strong> by name.</p>
      </section>

      <section id="android-beta" class="card" aria-labelledby="android-beta-heading">
        <h2 id="android-beta-heading">Google Play closed testing</h2>
        <p class="lede">We run a <strong>closed test</strong> before a wide Play release—the same flow Google documents for production access (enough opted-in testers on the track for long enough). Use the <strong>same Google account</strong> everywhere: the one on your Android device’s Play Store, your tester list entry, and when you tap opt-in.</p>
        <ol class="play-test-steps">
          <li>
            <strong>Join the tester list.</strong> Enter the <strong>email for the Google account</strong> you use on Google Play (often Gmail, or another address if that is your Google account) in the form below and tap <strong>Send</strong>. After we accept your address and add it in Play Console, <strong>complete opt-in</strong> using the <strong>Opt in on Google Play</strong> link later on this page or the <strong>same URL</strong> we email you—we send that message so you have the link in your inbox. You may also get a separate invite from Google Play; you still must finish opt-in in Play. If your track uses a Google Group, join that group when your admin asks.
            <form class="play-test-form" method="POST" action="https://formsubmit.co/support@ikiapps.com" accept-charset="UTF-8">
              <input type="hidden" name="_subject" value="BreatheWith — Google Play closed test signup">
              <input type="hidden" name="_next" value="https://d108.github.io/breathewith-app-support/thanks">
              <input type="hidden" name="_template" value="table">
              <label for="play-test-email">Google account email (same as Play Store on your Android device)</label>
              <input id="play-test-email" name="email" type="email" required autocomplete="email" inputmode="email" placeholder="Same address as Play Store on Android">
              <button type="submit" class="button play-test-send">Send</button>
            </form>
          </li>
          <li><strong>Opt in on Google Play.</strong> Once you are on the tester list, tap <strong>Opt in on Google Play</strong> below (the public closed-test link on this site) <strong>or</strong> open the same link from <strong>our email</strong>—either path is the same URL—then confirm in Play. That step turns on access so you can install the test build <strong>at no charge</strong> as a tester. Skipping opt-in means you are not counted as opted-in.</li>
          <li><strong>Install from Play.</strong> After opting in, install the app from the Play Store flow for testers.</li>
        </ol>
        <p class="fine-print">Submissions are delivered by <a href="https://formsubmit.co" rel="noopener noreferrer">FormSubmit</a> to our support inbox. After we accept your address, the <strong>opt-in link is on this page</strong> (<strong>Opt in on Google Play</strong> below) and <strong>we email you the same link</strong> so you can open it from your inbox—Google may send its own invite too. Once you’re opted in, you can install on the closed track for free as a tester.</p>
        
        <div class="store-actions play-test-actions" *ngIf="optInUrl">
          <a class="store-button store-button--play" [href]="optInUrl" rel="noopener noreferrer">Opt in on Google Play</a>
        </div>
        <p class="fine-print play-test-note" *ngIf="!optInUrl">If the <strong>Opt in on Google Play</strong> button is missing above, this page does not yet have the test link configured—use the form with your Google account email and watch for <strong>our email</strong> with instructions.</p>
        <p class="fine-print">Official overview: <a href="https://support.google.com/googleplay/android-developer/answer/9845334" rel="noopener noreferrer">Set up open, closed, or internal tests</a> (Google Play Console Help).</p>
      </section>

      <section id="faq" class="card">
        <h2>Frequently asked questions</h2>
        <div class="faq-item" *ngFor="let item of faqs">
          <h3>{{item.q}}</h3>
          <p [innerHTML]="item.a"></p>
        </div>
      </section>

      <section id="support" class="card">
        <h2>Get in touch</h2>
        <p class="lede">Bug reports and product feedback help us improve BreatheWith. Email us and include your app version and device model when reporting an issue.</p>
        <a [href]="'mailto:' + supportEmail" class="button">Email support</a>
      </section>

      <section id="privacy" class="card">
        <h2>Privacy</h2>
        <p class="lede">BreatheWith is designed so your settings and preferences stay on your device. For full legal wording, read the policy linked below.</p>
        <a routerLink="/privacy" class="button secondary-button">Read privacy policy</a>
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

    .fine-print {
      font-size: 0.9rem;
      color: var(--text-secondary);
      margin-top: 1rem;
      line-height: 1.5;
    }

    .store-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-top: 0.5rem;
    }

    .store-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: var(--action-min-height);
      padding: var(--action-pad-y) var(--action-pad-x);
      border-radius: 0.75rem;
      background: #000000;
      color: #ffffff;
      font-weight: 600;
      font-size: 0.95rem;
    }

    .store-button--play {
      background: #01875f;
    }

    .play-test-steps {
      margin: 0 0 1.25rem 1.1rem;
      padding: 0;
      color: var(--text-secondary);
      font-size: 1.02rem;
      line-height: 1.55;
    }

    .play-test-steps li {
      margin-bottom: 0.85rem;
    }

    .play-test-form {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      max-width: min(100%, 38rem);
      margin-top: 0.75rem;
    }

    .play-test-form input[type="email"] {
      font: inherit;
      padding: 0.85rem 1rem;
      border-radius: 0.5rem;
      border: 1px solid var(--h2-rule);
      background: var(--surface);
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
      border: none;
      cursor: pointer;
      text-decoration: none;
    }

    .secondary-button {
      background-color: var(--accent-rose);
    }

    .faq-item {
      margin-bottom: 1.75rem;
    }

    .faq-item h3 {
      font-size: 1.05rem;
      margin-bottom: 0.4rem;
      color: var(--text-primary);
      font-weight: 600;
    }

    .faq-item p {
      color: var(--text-secondary);
    }

    @media (max-width: 560px) {
      .card {
        padding: 1.5rem 1.25rem;
      }
    }
  `]
})
export class SupportComponent implements OnInit {
  optInUrl = "https://play.google.com/apps/testing/com.ikisystems.breatheapp.android";
  supportEmail = "";

  faqs = [
    { q: 'How do I change the breathing rhythm?', a: 'On the main screen, tap the <strong>Settings (gear)</strong> icon. Under Breathing Rhythm, pick a preset such as 4–6 Calm, 5–5 Balance, or Box Breathing.' },
    { q: 'Where are volume and haptic controls?', a: 'Audio and haptics live on the <strong>Settings</strong> screen. Tap the gear icon, then open <strong>Audio & Haptics</strong> to adjust the metronome or toggles.' },
    { q: 'Does the app work on Apple Watch?', a: 'Yes. BreatheWith includes a companion experience for Apple Watch that works with the iPhone app, using haptics to guide your breath on your wrist.' },
    { q: 'Sound or haptics stopped working — what should I try?', a: 'Confirm the device is not in Silent Mode (iPhone) or that media volume is up (Android). In the app, revisit <strong>Audio & Haptics</strong> and ensure features are enabled. On Watch, check that haptics are allowed in system settings.' },
    { q: 'Is there a subscription or data tracking?', a: 'No. BreatheWith is built for privacy: no analytics SDKs in the app as described in our policy, and your practice data stays on your device. Pricing (one-time purchase or free) depends on region and store listing.' },
    { q: 'How do I join the Android closed test on Google Play?', a: 'Send your Google account email with the form. After you are added to the tester list, use <strong>Opt in on Google Play</strong> on this support page (closed testing section) or the <strong>same link</strong> in our email, complete opt-in in Play, then install—test installs are free for testers.' }
  ];

  ngOnInit() {
    this.supportEmail = this.decodeAddr();
  }

  private decodeAddr() {
    const bytes = [115, 117, 112, 112, 111, 114, 116, 64, 105, 107, 105, 97, 112, 112, 115, 46, 99, 111, 109];
    return String.fromCharCode.apply(null, bytes);
  }
}
