import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth.service';
import { TokenService } from '../../services/token-service/token.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent implements OnInit{
  code = '';
  constructor(private activatedRoute: ActivatedRoute,    private authService: AuthService, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.code = data['code'];
      this.getToken();
    });
  }

  getToken(): void {
    this.authService.getToken(this.code).subscribe(
      data => {
       this.tokenService.setTokens(data.access_token, data.refresh_token);
      },
      err => {
        console.log(err);
      }
    );
  }


}
