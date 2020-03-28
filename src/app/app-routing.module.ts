import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { TaskComponent } from './components/task/task.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'addtask',component:AddtaskComponent},
  {path:'task',component:TaskComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
