import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../../services/token-service/token.service';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrl: './logout-page.component.css'
})
export class LogoutPageComponent implements OnInit {

  constructor(
    private router: Router,
    private tokenService: TokenService
  ) {

  }

  ngOnInit(): void {
    this.tokenService.clear();
    this.router.navigate(['']);
  }

}
