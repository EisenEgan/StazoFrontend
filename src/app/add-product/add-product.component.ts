import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { ProductService } from '../_services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm: FormGroup

  categories: any = [
    { id: 1, categoryName: "Frozen" },
    { id: 2, categoryName: "Produce" },
    { id: 3, categoryName: "Baked Goods" },
    { id: 4, categoryName: "Dairy" },
    { id: 5, categoryName: "Meat" },
    { id: 6, categoryName: "Drink" },
    { id: 7, categoryName: "Snacks" },
    { id: 8, categoryName: "Prepared" },
    { id: 9, categoryName: "Miscellaneous" }
  ]

  brands: any = []
  
  constructor(
    private fb: FormBuilder,
    private _sanitizer: DomSanitizer,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createAddProductForm()
    this.productService.getBrands().subscribe((res) => {
      this.brands = res
    }, (err) => {
      console.log(err)
    })
  }

  createAddProductForm() {
    this.addProductForm = this.fb.group({
      categoryId: ['', Validators.required],
      brand: ['', Validators.required],
      name: ['', Validators.required],
      photoUrl: ['', [
        Validators.required,
        Validators.pattern(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i)
      ]],
      market: ['Grocery', Validators.required],
    })
  }

  addProduct() {
    if (this.addProductForm.valid) {
      this.productService.addProduct(this.addProductForm.value).subscribe(() => {
        this.router.navigate([''])
      })
      // this.user = Object.assign({}, this.addProductForm.value)
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
    // console.log(this.addProductForm.value)
  }

  autocompleListFormatter = (data: any) : SafeHtml => {
    let html = `<span>${data.name}</span>`;
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }
  
}
