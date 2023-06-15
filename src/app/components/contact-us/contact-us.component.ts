import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApisService } from 'src/app/services/apis.service';
import { Data } from 'src/app/shared/data.interface';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  constructor(private fb:FormBuilder,private apiService:ApisService){}

  submit:boolean = false;
  finalAddress :any 
  
  // Data from zip address
  state : string = ''
  city : string = ''
  country : string = ''
  error :string = ''
  sizeError :string = ''
  file:any 

  //Form Schema
  applicationForm = this.fb.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    number:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
    address:['',Validators.required],
    city:['',Validators.required],
    state:['',Validators.required],
    country:['',Validators.required],
    zipcode:['',Validators.required],
    resume:['',Validators.required]
  })

  getPincode(event:Event){
    const inputElement = event.target as HTMLInputElement
    const pincode :number = parseInt(inputElement.value.trim()) 
    this.apiService.getData(pincode).subscribe((response)=>{
      const [address] = response as any;
        this.finalAddress = address;  // it returns multiple postOffices
        const postOffices = this.finalAddress.PostOffice;
        if (postOffices.length > 0) {
          this.state = postOffices[0].Circle;
          this.city = postOffices[0].District;
          this.country = postOffices[0].Country;
        }else{
          this.error = 'Enter a valid pincode'
        }
    },(error:any)=> {
      this.error = 'Enter a valid pincode'
    })
  }

  getControls(){
    return this.applicationForm.controls
  }

  uploadFile(event:Event){
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      let  fileSizeInBytes = file.size;
      const allowedTypes = ['application/pdf'];

      if (!allowedTypes.includes(file.type)) {
        this.sizeError = 'Only PDF files are allowed';
        (event.target as HTMLInputElement).value = ''; // Clear the file input value
      } else if (fileSizeInBytes > 2097152) {
        this.sizeError = 'File size should be less than 2MB';
        (event.target as HTMLInputElement).value = ''; // Clear the file input value
      } else {
        this.sizeError = '';
        this.file = (event.target as HTMLInputElement)?.files?.[0];
      }
    }
  }

  onSubmit(){
    let url :string =''
    this.submit = true;
    let formData = this.applicationForm.value
    this.apiService.uploadToCloud(this.file)?.subscribe((response)=>{
      url = response.secure_url;
      let data = {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        number: formData.number,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        zipcode: formData.zipcode,
        resume: url
      }
      if(data){
        this.apiService.submitData(data).subscribe((response)=>{
          console.log(response);
        })
      }
    }) 
  }
}
