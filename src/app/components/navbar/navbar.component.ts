import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="container site-header__nav-bar">
      <nav class="header-nav header-nav--themed" aria-label="Support sections">
        <a routerLink="/" fragment="download">Download</a>
        <a routerLink="/" fragment="android-beta">Android test</a>
        <a routerLink="/" fragment="faq">FAQ</a>
        <a routerLink="/" fragment="support">Contact</a>
        <a routerLink="/privacy" routerLinkActive="active">Privacy</a>
      </nav>
    </div>
  `,
  styles: [`
    .site-header__nav-bar {
      position: relative;
      z-index: 1;
      margin-top: 1rem;
      margin-bottom: 2rem;
      padding: 0.75rem 1.5rem;
      background: var(--surface);
      border: var(--card-border);
      border-radius: 1.25rem;
      box-shadow: var(--card-shadow);
    }

    .header-nav {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem 1.25rem;
      font-size: 0.95rem;
    }

    .header-nav a {
      color: var(--text-primary) !important;
      text-decoration: none;
      font-weight: 600;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      opacity: 1;
      transition: color 0.2s ease, border-color 0.2s ease;
    }

    .header-nav a:hover,
    .header-nav a.active {
      color: var(--link-accent) !important;
      border-bottom-color: var(--link-accent);
    }

    .header-nav a:focus-visible {
      outline: 2px solid var(--accent-green-dark);
      outline-offset: 4px;
      border-radius: 2px;
    }

    @media (max-width: 560px) {
      .site-header__nav-bar {
        padding: 0.65rem 1.25rem;
      }
    }
  `]
})
export class NavbarComponent {}
