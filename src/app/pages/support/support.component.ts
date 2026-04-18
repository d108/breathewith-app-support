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
        <p class="lede">BreatheWith is a breathing pacer: you choose a rhythm—box, 4–6, balance, or another preset—and follow an <strong>on-screen visual guide</strong> together with <strong>audio and haptic cues</strong>, so you see the pattern, hear it, and feel it—instead of just counting in your head. It runs on <strong>iOS</strong> (<strong>iPhone</strong>, <strong>iPad</strong>) and <strong>Apple Watch</strong> (with iPhone) from the App Store, and on <strong>Android</strong> from Google Play—use the buttons below.</p>
        <div class="store-actions">
          <a class="store-badge" href="https://apps.apple.com/us/app/breathewith/id6762160277" rel="noopener noreferrer" aria-label="Download on the App Store"><img src="images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Download on the App Store" height="40"></a>
          <a class="store-badge" [href]="optInUrl" rel="noopener noreferrer" aria-label="Get it on Google Play"><img src="images/GetItOnGooglePlay_Badge_Web_color_English.svg" alt="Get it on Google Play" height="40"></a>
        </div>
        <p class="fine-print">If a store link does not show the listing in your region, open the store on your device and search for <strong>BreatheWith</strong> by name.</p>
      </section>

      <section id="community" class="card" aria-labelledby="community-heading">
        <h2 id="community-heading">Join the community</h2>
        <p class="lede">The <a href="https://groups.google.com/g/breathewith" rel="noopener noreferrer">BreatheWith Google Group</a> is our hub for all users to share feedback, request features, and stay updated on the latest news. Membership is open to the public.</p>
        
        <div id="android-early-access" class="early-access-note">
          <h3>Android Early Access</h3>
          <p>We are currently in the <strong>Early Access</strong> phase on Android. <strong>Joining the Google Group is required</strong> to gain access to the Early Access build on Google Play. Once you have joined and been approved, follow these steps to install:</p>
          
          <ol class="play-test-steps">
            <li>
              <strong>Get it on Google Play.</strong> Once you have joined and been approved, tap the <strong>Get it on Google Play</strong> button.
              <div class="store-actions play-test-actions" *ngIf="optInUrl">
                <a class="store-badge" [href]="optInUrl" rel="noopener noreferrer" aria-label="Get it on Google Play"><img src="images/GetItOnGooglePlay_Badge_Web_color_English.svg" alt="Get it on Google Play" height="40"></a>
              </div>
            </li>
            <li>
              <strong>Become a tester.</strong> When you open the link, you will be asked to choose <strong>Become a tester</strong>. This step turns on your access so you can install the Early Access build <strong>at no charge</strong>.
            </li>
            <li><strong>Install from Play.</strong> After becoming a tester, install the app from the Play Store.</li>
          </ol>
          <p class="fine-print">You can <strong>Leave Early Access</strong> at any time using the button on the Play Store page, but we prefer you stay to receive updates.</p>
        </div>
        
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
      align-items: center;
      gap: 0.75rem;
      margin-top: 0.5rem;
    }

    .store-badge {
      display: inline-flex;
      align-items: center;
    }
    .store-badge img {
      display: block;
      height: 40px;
      width: auto;
    }


    .play-test-steps {
      margin: 0 0 1.5rem 1.25rem;
      padding: 0;
      color: var(--text-secondary);
      font-size: 1.02rem;
      line-height: 1.6;
    }

    .play-test-steps li {
      margin-bottom: 1.25rem;
    }

    .early-access-note {
      margin-top: 2rem;
      padding: 1.5rem;
      background: rgba(var(--accent-green-rgb), 0.05);
      border: 1px solid rgba(var(--accent-green-rgb), 0.2);
      border-radius: 1rem;
    }

    .early-access-note h3 {
      font-size: 1.15rem;
      margin-bottom: 1rem;
      color: var(--accent-green-dark);
      font-weight: 700;
      letter-spacing: 0.01em;
    }

    .early-access-note p {
      margin-bottom: 1.25rem;
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .play-test-actions {
      margin-top: 0.75rem;
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
    { q: 'Where are volume and haptic controls?', a: 'On <strong>iPhone</strong> and <strong>Android</strong>, the <strong>Metronome</strong> on/off switch is on the <strong>main screen</strong>, while the <strong>metronome volume</strong> slider and <strong>Haptic Feedback</strong> toggle are on the <strong>Settings</strong> screen. On <strong>Apple Watch</strong>, the audio and haptic feedback controls are grouped together on the <strong>main watch screen</strong>.' },
    { q: 'Does the app work on Apple Watch?', a: 'Yes. BreatheWith includes a companion experience for Apple Watch that works with the iOS (iPhone) app, using haptics to guide your breath on your wrist.' },
    { q: 'Sound or haptics stopped working — what should I try?', a: 'On <strong>iPhone</strong> and <strong>Android</strong>, first check the <strong>Metronome</strong> toggle on the <strong>main screen</strong>, then open <strong>Settings</strong> and confirm the <strong>metronome volume</strong> is up and <strong>Haptic Feedback</strong> is turned on. On <strong>Apple Watch</strong>, check the feedback toggles on the <strong>main watch screen</strong>. If needed, also confirm your device is not muted or set too low for the kind of feedback you expect, and on Apple Watch confirm haptics are allowed in system settings.' },
    { q: 'Is there a subscription or data tracking?', a: 'No. BreatheWith is built for privacy: no analytics SDKs in the app as described in our policy, and your practice data stays on your device. Pricing (one-time purchase or free) depends on region and store listing.' },
    { q: 'How do I join Android Early Access on Google Play?', a: 'Join our <a href="https://groups.google.com/g/breathewith" rel="noopener noreferrer">Google Group</a>. Once you are a member, use the <strong>Get it on Google Play</strong> button on this support page, choose <strong>Become a tester</strong> in Play, then install—early access is free for testers.' }
  ];

  ngOnInit() {
    this.supportEmail = this.decodeAddr();
  }

  private decodeAddr() {
    const bytes = [115, 117, 112, 112, 111, 114, 116, 64, 105, 107, 105, 97, 112, 112, 115, 46, 99, 111, 109];
    return String.fromCharCode.apply(null, bytes);
  }
}
