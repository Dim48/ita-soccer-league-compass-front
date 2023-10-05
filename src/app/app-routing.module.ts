import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { StandingsComponent } from './standings/standings.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ClubsComponent } from './clubs/clubs.component';
import { RulesComponent } from './rules/rules.component';
import { LocationComponent } from './location/location.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ClubdetailsComponent } from './clubs/clubdetails/clubdetails.component';
import { PlayerinfoComponent } from './playerinfo/playerinfo.component';
import { MatchpageComponent } from './matchpage/matchpage.component';
import { FieldinfoComponent } from './fieldinfo/fieldinfo.component';
import { CompetitionComponent } from './competition/competition.component';
import { AdminAppComponent } from './admin-app/admin-app.component';
import { WebsiteAppComponent } from './website-app/website-app.component';
import { AdminhomeComponent } from './admin-app/adminhome/adminhome.component';
import { AuthGuard } from './admin-auth.guard';

const routes: Routes = [
  {path: 'admin', component: AdminAppComponent},
  {path: 'admin/home', component: AdminhomeComponent, canActivate: [AuthGuard]},
  {
    path: '',
    component: WebsiteAppComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'competition', component: CompetitionComponent},
      {path: 'standings', component: StandingsComponent},
      {path: 'schedule', component: ScheduleComponent},
      {path: 'clubs', component: ClubsComponent},
      {path: 'rules', component: RulesComponent},
      {path: 'location', component: LocationComponent},
      {path: 'contact-us', component: ContactusComponent},
      {path: 'clubs/:clubName', component: ClubdetailsComponent},
      {path: 'player/:playerNameSurname', component: PlayerinfoComponent},
      {path: 'match/:matchName', component: MatchpageComponent},
      {path: 'field/:fieldName', component: FieldinfoComponent},
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
