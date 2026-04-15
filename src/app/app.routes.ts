import { Routes } from '@angular/router';
import { SupportComponent } from './pages/support/support.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { ThanksComponent } from './pages/thanks/thanks.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: SupportComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'thanks', component: ThanksComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];
