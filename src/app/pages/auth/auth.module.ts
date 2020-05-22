import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule, NbPasswordAuthStrategyOptions, NbPasswordAuthStrategy, NbAuthJWTToken } from '@nebular/auth';
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
              token:{
                class: NbAuthJWTToken,

                key: 'token',
              },
              baseEndpoint: 'http://localhost:9800/api/',
              login: {
                // ...
                endpoint: 'auth/login/',
                method: 'post',
                redirect:{
                  success: '/dashboard/',                }
              },
              register: {
                // ...
                endpoint: '/api/auth/register',
              },
            }),
          ],

    }),
  ],
})
export class AuthModule { }
