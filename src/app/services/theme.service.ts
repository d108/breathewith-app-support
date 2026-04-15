import { Injectable, Inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeChoice = 'system' | 'classic' | 'calm' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly KEY = 'breathewith-theme';
  private readonly isBrowser: boolean;
  
  themeChoice = signal<ThemeChoice>('classic');

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.init();
    }
  }

  private init() {
    const raw = localStorage.getItem(this.KEY) as ThemeChoice;
    const choice = this.normalizeChoice(raw);
    this.setTheme(choice);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (this.themeChoice() === 'system') {
        this.applyTheme('system');
      }
    });
  }

  setTheme(choice: ThemeChoice) {
    this.themeChoice.set(choice);
    if (this.isBrowser) {
      localStorage.setItem(this.KEY, choice);
      this.applyTheme(choice);
    }
  }

  private normalizeChoice(raw: ThemeChoice | null): ThemeChoice {
    const allowed: ThemeChoice[] = ['system', 'classic', 'calm', 'dark'];
    if (raw && allowed.includes(raw)) {
      return raw;
    }
    return 'classic';
  }

  private applyTheme(choice: ThemeChoice) {
    const resolved = this.resolve(choice);
    document.documentElement.setAttribute('data-theme', resolved);
    this.applyThemeColor(resolved);
  }

  private resolve(choice: ThemeChoice): string {
    if (choice === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'calm';
    }
    return choice;
  }

  private applyThemeColor(resolved: string) {
    const meta = document.getElementById('meta-theme-color');
    if (!meta) return;
    meta.setAttribute('content', resolved === 'dark' ? '#1e282c' : '#91c2bd');
  }
}
