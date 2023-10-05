import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { StandingsComponent } from './standings/standings.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ClubsComponent } from './clubs/clubs.component';
import { RulesComponent } from './rules/rules.component';
import { LocationComponent } from './location/location.component';
import { ContactusComponent } from './contactus/contactus.component';
import { StandingtableComponent } from './standingtable/standingtable.component';
import { SliderComponent } from './location/slider/slider.component';
import { ClubdetailsComponent } from './clubs/clubdetails/clubdetails.component';
import { MatchinfoComponent } from './clubs/clubdetails/matchinfo/matchinfo.component';
import { PlayersComponent } from './clubs/clubdetails/players/players.component';
import { PlayerinfoComponent } from './playerinfo/playerinfo.component';
import { MatchpageComponent } from './matchpage/matchpage.component';
import { FieldinfoComponent } from './fieldinfo/fieldinfo.component';
import { CommentformComponent } from './commentform/commentform.component';
import { WeeksComponent } from './weeks/weeks.component';
import { CompetitionComponent } from './competition/competition.component';
import { AdminAppComponent } from './admin-app/admin-app.component';
import { WebsiteAppComponent } from './website-app/website-app.component';
import { AdminheaderComponent } from './admin-app/adminheader/adminheader.component';
import { AdminhomeComponent } from './admin-app/adminhome/adminhome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    StandingsComponent,
    ScheduleComponent,
    ClubsComponent,
    RulesComponent,
    LocationComponent,
    ContactusComponent,
    StandingtableComponent,
    SliderComponent,
    ClubdetailsComponent,
    MatchinfoComponent,
    PlayersComponent,
    PlayerinfoComponent,
    MatchpageComponent,
    FieldinfoComponent,
    CommentformComponent,
    WeeksComponent,
    CompetitionComponent,
    AdminAppComponent,
    WebsiteAppComponent,
    AdminheaderComponent,
    AdminhomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
