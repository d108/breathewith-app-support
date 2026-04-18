import { Routes } from '@angular/router';
import { SupportComponent } from './pages/support/support.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: SupportComponent, title: 'BreatheWith Support - Calm Breathing, Quiet Focus' },
  { path: 'privacy', component: PrivacyComponent, title: 'Privacy Policy - BreatheWith' },
  { path: '404', component: NotFoundComponent, title: 'Page Not Found - BreatheWith' },
  { path: '**', component: NotFoundComponent }
];
