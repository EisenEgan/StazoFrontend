import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { TimeAgoPipe } from 'time-ago-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './routes';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { StandardLayoutComponent } from './standard-layout/standard-layout.component';
import { CardComponent } from './card/card.component';
import { UserCardComponent } from './user-card/user-card.component';
import { RatingComponent } from './rating/rating.component';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';
import { LocationComponent } from './location/location.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileService } from './_services/profile.service';
import { ProfileEditFormComponent } from './profile-edit-form/profile-edit-form.component';
import { ProfilePicturesFormComponent } from './profile-pictures-form/profile-pictures-form.component';
import { ProfileReviewsComponent } from './profile-reviews/profile-reviews.component';
import { ReviewEditComponent } from './review-edit/review-edit.component';
import { ReviewCreateComponent } from './review-create/review-create.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddLocationComponent } from './add-location/add-location.component';

// remove later
import { TestAnimationComponent } from './tests/testanimation/testanimation.component'
import { ProductService } from './_services/product.service';
import { LocationService } from './_services/location.service';
import { UserService } from './_services/user.service';
import { ReviewService } from './_services/review.service';
import { FilterPipe } from './_pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    SigninComponent,
    SidenavComponent,
    AuthLayoutComponent,
    StandardLayoutComponent,
    CardComponent,
    UserCardComponent,
    RatingComponent,
    TimeAgoPipe,
    ProductComponent,
    ReviewComponent,
    LocationComponent,
    ProfileComponent,
    ProfileEditComponent,
    ProfileEditFormComponent,
    ProfilePicturesFormComponent,
    ProfileReviewsComponent,
    ReviewEditComponent,
    ReviewCreateComponent,
    AddProductComponent,
    AddLocationComponent,
    TestAnimationComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    Ng2AutoCompleteModule
  ],
  providers: [
    AuthService,
    ProfileService,
    ProductService,
    LocationService,
    UserService,
    ReviewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
