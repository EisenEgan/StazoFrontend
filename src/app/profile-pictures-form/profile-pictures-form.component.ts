import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-profile-pictures-form',
  templateUrl: './profile-pictures-form.component.html',
  styleUrls: ['./profile-pictures-form.component.css']
})
export class ProfilePicturesFormComponent implements OnInit {

  Arr = Array;
  picture: string = "https://ak2.picdn.net/shutterstock/videos/18633392/thumb/1.jpg"
  backgroundIndex: number = 2

  @ViewChild('fileInput') fileInput: ElementRef;
  
  avatarForm: FormGroup
  fileUploaded: boolean = false

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createAvatarForm()
  }

  // TODO copy this to create a similar form to upload custom background.
  createAvatarForm() {
    this.avatarForm = this.fb.group({
      imageUrl: [''],
      image: null
    }, {validator: this.oneImageValidator})
  }

  oneImageValidator(g: FormGroup) {
    if (g.get('imageUrl').value != '' && g.get('image').value != null) {
      console.log('prints')
      return {'bothFilled': true}
    }
    else if (g.get('imageUrl').value == '' && g.get('image').value == null)
      return {'neitherFilled': true}
    else
      return null
  }

  makeBackground(index: number) {
    this.backgroundIndex = index
  }

  changeAvatar() {
    if (this.avatarForm.valid) {
      console.log('valid')
      // this.postService.createPost(this.prepareSaveCard()).subscribe(res => {
      //   this.avatarForm.reset();
      //   console.log(res)
      // }, error => {
      //   console.log(error)
      // })
    }
  }

  prepareSaveCard(): FormData {
    const formModel = this.avatarForm.value;

    let formData = new FormData();
    formData.append("imageUrl", formModel.imageUrl);
    formData.append("image", formModel.image);

    return formData;
  }

  onFileChange(event) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0]
      this.fileUploaded = true
      this.avatarForm.get('image').setValue(file)
    }
  }

  clearFile() {
    this.avatarForm.get('image').setValue(null)
    this.fileInput.nativeElement.value = ''
  }

}
