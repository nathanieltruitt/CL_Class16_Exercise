import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BobComponent } from './about/bob/bob.component';
import { SharonComponent } from './about/sharon/sharon.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: 'about',
        component: AboutComponent,
        children: [
          {
            path: 'bob',
            component: BobComponent,
          },
          {
            path: 'sharon',
            component: SharonComponent,
          },
        ],
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
