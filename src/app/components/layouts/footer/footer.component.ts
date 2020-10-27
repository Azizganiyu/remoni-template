import { Component, OnInit, ViewChild, ElementRef, HostListener  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email/email.service';
import { ScrollService } from 'src/app/services/scroll/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @ViewChild ('footer', {static:false}) footer: ElementRef;

  contactForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]],
  });

  submit: boolean = false
  createStatus = {status: true, message: ''}

  constructor(
    private fb: FormBuilder,
    private _email: EmailService,
    private route: ScrollService
  ) { }

  ngOnInit(): void {
    this.route.routeTo.subscribe((section) => {
      if(section === 'footer'){
        this.footer.nativeElement.scrollIntoView({behavior: 'smooth', block: "center", inline: "nearest"});
      }
    })
  }

  onSubmit(){
    this.submit = true
    this.sendMail(this.contactForm.value)
    this.notify(this.contactForm.value.name, this.contactForm.value.email)
    this.contactForm.reset()
  }

  sendMail(values){
    let data = {
      senderFullname: values.name,
      senderEmail:'support@trasels.com',
      subject: values.subject,
      body: `<p>${values.name}</p><p>${values.email}</p><p>${values.message}</p>`
    }
    this._email.sendMail(data).subscribe((data)=>{
      this.submit = false
      console.log(data)
      if(data.accepted){
        this.createStatus = {status: true, message: 'Message successfully Sent. Please check your email and spam folder for Acknowledgement'}
      }
      else{
        this.createStatus = {status: false, message: 'An error occured. Please try again later or you can send us an email using mail client'}
      }
    }, ((error) => {
      console.log(error)
      this.createStatus = {status: false, message: 'An error occured. Please try again later or you can send us an email using mail client'}
      this.submit = false
    }))
  }

  notify(name, email){
    let text = "Your Email has been recieved, We will get back to you as soon as possible"
    let data = {
      email: email,
      body: `${this._email.template(name, text)}`,
      subject: 'Trasels Media'
    }
    this._email.notify(data).subscribe((data)=>{
      console.log(data)
    }, ((error) => {
      console.log(error)
    }))
  }

  @HostListener('window:scroll', [ ]) intersect(){
    let footerbounding = this.footer.nativeElement.getBoundingClientRect()
    if (footerbounding.y < 40 && footerbounding.y > -40) {
      this.route.changeActiveLink('footer')
    }
  }


}
