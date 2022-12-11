import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }

  userLogin = (data:any)=>{
    return this.http.post("",data);
  }

  userReg = (data:any) =>{
    return this.http.post("",data);
  }

  getUserById = (data:any)=>{
    return this.http.post("",data);
  }
}