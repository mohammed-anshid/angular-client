import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../shared/data.interface';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http:HttpClient) { }

  uploadToCloud(file:any){
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'resumes');
    return this.http.post<any>('https://api.cloudinary.com/v1_1/dbb0ncoht/upload', formData)
  }

  getData (pinCode: number): Observable<any>{
    return this.http.get(`https://api.postalpincode.in/pincode/${pinCode}`)
  }

  submitData(data:any){
    return this.http.post<any>('http://localhost:4002/form', data)
  }
}
