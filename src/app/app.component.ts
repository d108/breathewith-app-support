import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, FormsModule],
  template: `
    <router-outlet></router-outlet>

    <footer class="site-footer">
      <div class="container footer-inner">
        <nav class="footer-nav" aria-label="Footer">
          <a routerLink="/">Home</a>
          <a routerLink="/" fragment="download">Download</a>
          <a routerLink="/" fragment="community">Community</a>
          <a routerLink="/" fragment="android-early-access">Android Early Access</a>
          <a routerLink="/" fragment="faq">FAQ</a>
          <a routerLink="/" fragment="support">Contact</a>
          <a routerLink="/privacy">Privacy</a>
        </nav>
        <p>&copy; 2026 Daniel Zhang. All rights reserved.</p>
        <div class="theme-control">
          <label for="theme-select">Appearance</label>
          <select id="theme-select" class="theme-select" 
                  [ngModel]="themeService.themeChoice()" 
                  (ngModelChange)="themeService.setTheme($event)">
            <option value="system">System</option>
            <option value="classic">Classic</option>
            <option value="calm">Calm</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      min-width: 0;
      width: 100%;
    }

    .site-footer {
      margin-top: auto;
      text-align: center;
      color: var(--text-secondary);
      font-size: 0.9rem;
      width: 100%;
      display: block;
    }

    .footer-inner {
      border-top: 1px solid var(--h2-rule);
      padding: 2.5rem 0;
    }

    .footer-inner p {
      margin-bottom: 0.35rem;
    }

    .footer-nav {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.6rem 1rem;
      margin-bottom: 0.9rem;
    }

    .footer-nav a {
      color: var(--text-secondary);
      text-decoration: none;
      font-weight: 600;
    }

    .footer-nav a:hover {
      color: var(--link-accent);
      text-decoration: underline;
    }

    .footer-nav a:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 4px;
      border-radius: 2px;
    }

    .theme-control {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.5rem 0.75rem;
      margin-top: 1rem;
    }

    .theme-control label {
      font-size: 0.88rem;
      font-weight: 600;
      color: var(--text-secondary);
    }

    .theme-select {
      font: inherit;
      font-size: 0.92rem;
      padding: 0.4rem 2rem 0.4rem 0.65rem;
      border-radius: 0.5rem;
      border: 1px solid var(--h2-rule);
      background: var(--surface);
      color: var(--text-primary);
      cursor: pointer;
    }

    @media (max-width: 560px) {
      .footer-inner {
        padding: 2rem 0;
      }
    }
  `]
})
export class AppComponent {
  constructor(public themeService: ThemeService) {}
}
