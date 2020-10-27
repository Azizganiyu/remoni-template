import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

interface accept {
  accepted: any;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  self: string = "support@trasels.com"

  // setting = {
  //   host:'smtp.gmail.com',
  //   username:'azizganiyu0@gmail.com',
  //   password:'gmonivehu@4real',
  //   secure: false,
  //   port: 587,
  //   from: 'Aziz'
  // }

  setting = {
    host:'mail.trasels.com',
    username:'support@trasels.com',
    password:'traselssupport123@admin',
    secure: false,
    port: 587,
    from: 'Trasels Media'
  }

  //url = 'http://localhost:4000/'
  url = 'https://nodemailer-webapp.herokuapp.com/'

  constructor(private _http: HttpClient) { }

  sendMail(data){
    let email = {email: this.self}
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');

   return this._http.post<accept>(
      this.url+'sendcontactmail',
      {...data, ...email, ...this.setting},
      {headers: headers}
    )
  }



  notifySelf(message){
    let data = {
      email: this.self,
      subject: 'Trasels Media'
    }
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');

   return this._http.post<accept>(
      this.url+'sendmail',
      {...message, ...data, ...this.setting},
      {headers: headers}
    )
  }

  notify(data){
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');

   return this._http.post<accept>(
      this.url+'sendmail',
      {...data, ...this.setting},
      {headers: headers}
    )
  }

  template(name, text){
    return `<img style="margin:auto;" src="https://trasels.com/assets/images/logo.png" alt="image" />
    <h4>Hello ${name}</h4><p>${text}</p>`
  }
}
