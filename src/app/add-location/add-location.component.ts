import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LocationService } from '../_services/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})

export class AddLocationComponent implements OnInit {

  addLocationForm: FormGroup

  stores: any = [
    { id: 1, name: "Von's" },
    { id: 2, name: "Ralph's" },
    { id: 3, name: "Cub" },
    { id: 4, name: "Wal-Mart" },
    { id: 5, name: "Target" }
  ]

  states = [ "AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", 
  "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", 
  "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", 
  "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", 
  "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY" ]
  
  constructor(
    private fb: FormBuilder,
    private _sanitizer: DomSanitizer,
    private locationService: LocationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createAddLocationForm()
    this.onChanges()
    this.locationService.getLocations().subscribe((res) => {
      this.stores = res
    }, (err) => {
      console.log(err)
    })
  }

  onChanges(): void {
    this.addLocationForm.get('city').valueChanges.subscribe(val => {
      if (this.addLocationForm.get('state').value != '') {
        var location = {
          city: val,
          state: this.addLocationForm.get('state').value
        }
        this.locationService.getLocationFromCity(this.addLocationForm.value).subscribe(res => {
          if (res) {
            if (res.places.length == 1) {
              this.addLocationForm.controls['zip'].setValue(res.places[0]["post code"]);
            }
          } else {
          }
        })
      }
    });
    this.addLocationForm.get('state').valueChanges.subscribe(val => {
      if (this.addLocationForm.get('city').value != '') {
        var location = {
          city: this.addLocationForm.get('city').value,
          state: val
        }
        this.locationService.getLocationFromCity(location).subscribe(res => {        
          if (res) {
            if (res.places.length == 1) {
              console.log(res.places[0]["place name"])
              this.addLocationForm.controls['zip'].setValue(res.places[0]["post code"]);
            }
          } else {
          }
        })
      }
    });
  }

  // location: Location = {
  //   name: "Von's",
  //   address: '10460 Clairemont Mesa Blvd',
  //   city: 'San Diego',
  //   state: 'CA',
  //   zip: 92124,
  //   country: 'USA',
  //   photoUrl: 'https://dynl.mktgcdn.com/p/_cxUxCeWyDZWQIRB-FFQyb5i26CT9FZHPtIYpV3-Hd0/511x339.jpg',
  //   marketType: 'Grocery'
  // }

  createAddLocationForm() {
    this.addLocationForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      country: 'USA',
      photoUrl: ['', [
        Validators.required,
        Validators.pattern(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i)
      ]],
      marketType: ['Grocery', Validators.required]
    })
  }

  addLocation() {
    if (this.addLocationForm.valid) {
      console.log(this.addLocationForm.value)
      this.locationService.addLocation(this.addLocationForm.value).subscribe(() => {
        this.router.navigate([''])
      })
      // this.user = Object.assign({}, this.addLocationForm.value)
      // this.authService.register(this.user).subscribe(() => {
      //   this.alertify.success('Registration successful')
      // }, error => {
      //   this.alertify.error(error)
      // }, () => {
      //   this.authService.login(this.user).subscribe(() => {
      //     this.router.navigate(['/members'])
      //   })
      // })
    }
    // console.log(this.addLocationForm.value)
  }

  // .getLocation(control.value).map(res => {
  //   if (res) {
  //     this.city = res.places[0]["place name"]
  //     this.state = res.places[0]["state abbreviation"]   
  //     this.place = this.city + ", " + this.state
  //   } else {
  //     this.place = undefined
  //   }

  autocompleListFormatter = (data: any) : SafeHtml => {
    let html = `<span>${data.name}</span>`;
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }

}
