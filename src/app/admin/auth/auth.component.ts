import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AuthService } from 'src/app/model/auth.service';

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(
    private router: Router,
    private authService: AuthService) {}

  ngOnInit() {}

  login(form: NgForm) {
    if (form.valid) {
     this.authService.authenticate(this.username, this.password)
     .subscribe(response => {
       if(response) {
         this.router.navigateByUrl('admin/main');
       }
       this.errorMessage = "UserName or Password is Incorrect"
     })
    }else (
      this.errorMessage = "Please Enter the Required places"
    )
  }
}
