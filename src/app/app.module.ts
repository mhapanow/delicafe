import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { Geolocation } from '@ionic-native/geolocation';
import { CloudModule } from '@ionic/cloud-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BranchOfficePage } from '../pages/branchoffice/branchoffice';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { PromosPage } from '../pages/promos/promos';
import { SignUpPage } from '../pages/signup/signup';
import { SocialPage } from '../pages/social/social';
import { TabsPage } from "../pages/tabs/tabs";
import { MarkerDetailsPage } from "../pages/marker-details/marker-details";

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { firebaseConfig } from "../config/firebase.config";
import { cloudSettings } from "../config/cloudSettings.config";
import { FirebaseCallProvider } from '../providers/firebase-call/firebase-call';
import { PlaceholderPipe } from '../pipes/placeholder/placeholder';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BranchOfficePage,
    LoginPage,
    ProfilePage,
    PromosPage,
    SignUpPage,
    SocialPage,
    TabsPage,
    PlaceholderPipe,
    MarkerDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFfe5_ZgKIGVbWRuokOwCMtKmeOVwm4ok'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BranchOfficePage,
    LoginPage,
    ProfilePage,
    PromosPage,
    SignUpPage,
    SocialPage,
    TabsPage,
    MarkerDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    AuthServiceProvider,
    FirebaseCallProvider,
  ]
})
export class AppModule {}
