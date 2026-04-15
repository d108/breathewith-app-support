import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <div [class.site-header__nav-bar]="!minimal" [class.container]="!minimal">
      <nav class="header-nav" [class.header-nav--themed]="!minimal" aria-label="Support sections">
        <ng-container *ngIf="variant === 'support'">
          <a routerLink="/" fragment="download">Download</a>
          <a routerLink="/" fragment="android-beta">Android test</a>
          <a routerLink="/" fragment="faq">FAQ</a>
          <a routerLink="/" fragment="support">Contact</a>
          <a routerLink="/privacy" routerLinkActive="active">Privacy</a>
        </ng-container>
        
        <ng-container *ngIf="variant === 'privacy'">
          <a routerLink="/">Support</a>
          <a routerLink="/" fragment="faq">FAQ</a>
          <a routerLink="/" fragment="support">Contact</a>
        </ng-container>
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
      color: inherit;
      text-decoration: none;
      font-weight: 600;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      opacity: 1;
      transition: color 0.2s ease, border-color 0.2s ease;
    }

    /* Support variant (card) styles */
    .header-nav--themed a {
      color: var(--text-primary) !important;
    }
    
    .header-nav--themed a:hover,
    .header-nav--themed a.active {
      color: var(--link-accent) !important;
      border-bottom-color: var(--link-accent);
    }

    /* Privacy variant (inline) styles - usually white text on gradient */
    :not(.header-nav--themed) a {
      color: var(--on-accent);
    }

    :not(.header-nav--themed) a:hover {
      border-bottom-color: rgba(255, 255, 255, 0.65);
    }

    .header-nav a:focus-visible {
      outline: 2px solid currentColor;
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
export class NavbarComponent {
  @Input() minimal = false;
  @Input() variant: 'support' | 'privacy' = 'support';
}
