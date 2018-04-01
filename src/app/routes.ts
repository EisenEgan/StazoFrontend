import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { StandardLayoutComponent } from './standard-layout/standard-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { ProductComponent } from './product/product.component';
import { LocationComponent } from './location/location.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ReviewCreateComponent } from './review-create/review-create.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { TestAnimationComponent } from './tests/testanimation/testanimation.component';

export const appRoutes: Routes = [
    {
      path: '',
      component: StandardLayoutComponent,
      children: [
        {
          path: '',
          component: HomeComponent,
          pathMatch: 'full'
        },
        {
          path: 'locations',
          component: HomeComponent
        },
        {
          path: 'users',
          component: HomeComponent
        },
        {
          path: 'product/:brand/:product',
          component: ProductComponent
        },
        {
          path: 'location',
          component: LocationComponent
        },
        {
          path: 'profile/:username',
          component: ProfileComponent
        },
        {
          path: 'profile/edit',
          component: ProfileEditComponent
        },
        {
          path: 'review/create',
          component: ReviewCreateComponent
        },
        {
          path: 'product/add',
          component: AddProductComponent
        },
        {
          path: 'location/add',
          component: AddLocationComponent
        },
        {
          path: 'category/:categoryName',
          component: HomeComponent
        },
        {
          path: 'reviews/:type',
          component: HomeComponent
        }
      ]
    },
    {
      path: '',
      component: AuthLayoutComponent,
      children: [
        {
          path: 'signin',
          component: SigninComponent
        },
        {
          path: 'register',
          component: RegisterComponent
        },
        {
          path: 'test',
          component: TestAnimationComponent
        }
      ]
    },
    { path: '**', redirectTo: '' }
  ];