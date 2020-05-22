import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule, NbPasswordAuthStrategyOptions, NbPasswordAuthStrategy } from '@nebular/auth';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
} from '@nebular/theme';

import { NgxLoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    NgxLoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,

    NbAuthModule,

    NbAuthModule.forRoot({
          strategies: [
            NbPasswordAuthStrategy.setup({
              name: 'email',

              baseEndpoint: 'http://138.197.76.176:9800/api/',
              login: {
                // ...
                endpoint: 'auth/login',
                method: 'post',
              },
              register: {
                // ...
                endpoint: '/api/auth/register',
              },
            }),
          ],
        
    })
  ],
})
export class AuthModule { }
