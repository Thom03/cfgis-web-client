import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbSidebarService } from '@nebular/theme';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbSidebarService,
   
  ]
})
export class DashboardModule {

  constructor(private SidebarService: NbSidebarService){

  }
  
  toggle(){
    this.SidebarService.toggle(false, 'left');
  }
  
  toggleCompact() {
    this.sidebarService.toggle(true, 'right');
  }
 }
