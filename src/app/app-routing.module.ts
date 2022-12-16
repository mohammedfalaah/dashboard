import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefualtComponent } from './layouts/defualt/defualt.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostComponent } from './modules/post/post.component';

const routes: Routes = [
  {
    path:'', component:DefualtComponent,
    children:[
      {
        path:'',component:DashboardComponent

    },
    {
      path:'posts',component:PostComponent

  }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
