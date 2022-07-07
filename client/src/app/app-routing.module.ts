import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_Helpers/Guards/auth.guard';
import { HomeComponent } from './_View/home/home.component';
import { ListsComponent } from './_View/lists/lists.component';
import { MemberDetailComponent } from './_View/members/member-detail/member-detail.component';
import { MemberListComponent } from './_View/members/member-list/member-list.component';
import { MessagesComponent } from './_View/messages/messages.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'members', component: MemberListComponent, canActivate: [AuthGuard]},
      {path: 'members/:id', component: MemberDetailComponent},
      {path: 'lists', component: ListsComponent},
      {path: 'messages', component: MessagesComponent},
    ]
  },
  {path: '**', component: HomeComponent, pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }