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
        <p>&copy; 2026 Daniel Zhang. All rights reserved.</p>
        <p class="footer-links">
          <a routerLink="/">Support</a>
          <span aria-hidden="true"> · </span>
          <a routerLink="/privacy">Privacy</a>
        </p>
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
    }

    .site-footer {
      margin-top: auto;
      padding: 2.5rem 0;
      text-align: center;
      color: var(--text-secondary);
      font-size: 0.9rem;
    }

    .footer-inner p {
      margin-bottom: 0.35rem;
    }

    .footer-links a {
      color: var(--text-secondary);
      text-decoration: none;
      font-weight: 600;
    }

    .footer-links a:hover {
      color: var(--link-accent);
      text-decoration: underline;
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
  `]
})
export class AppComponent {
  constructor(public themeService: ThemeService) {}
}
