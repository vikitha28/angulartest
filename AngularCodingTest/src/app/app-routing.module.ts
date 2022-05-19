import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddloanComponent } from './addloan/addloan.component';
import { ListLoanComponent } from './list-loan/list-loan.component';
import { RemoveLoanComponent } from './remove-loan/remove-loan.component';

const routes: Routes = [
  {path:'add',component:AddloanComponent},
  {path:'delete',component:RemoveLoanComponent},
  {path:'list',component:ListLoanComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
