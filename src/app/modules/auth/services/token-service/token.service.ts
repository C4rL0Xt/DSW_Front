import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../../../environments/environment';
import { BehaviorSubject } from 'rxjs';

const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';
const CODE_VERIFIER = 'code_verifier';
const ROLE = 'roles';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private accessToken: string | null = null;
  private rol: string;


  constructor() {
    this.accessToken = localStorage.getItem(ACCESS_TOKEN);
    this.extractRolFromToken();
  }

  setTokens(access_token: string, refresh_token: string): void {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.setItem(ACCESS_TOKEN, access_token);
    localStorage.removeItem(REFRESH_TOKEN);
    localStorage.setItem(REFRESH_TOKEN, refresh_token);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(ACCESS_TOKEN);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(REFRESH_TOKEN);
  }

  clear(): void {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
  }

  isLogged(): boolean {
    return localStorage.getItem(ACCESS_TOKEN) != null;
  }

  isAdmin(): boolean {
    if (!this.isLogged()) {
      return false;
    }

    const token = this.getAccessToken();
    const payload = token.split('.')[1];

    const payloadDecoded = atob(payload);
    const values = JSON.parse(payloadDecoded);
    const roles = values.roles;

    if (roles.indexOf('ROLE_ADMIN') < 0) {
      return false;
    }


    return true;

  }



  setVerifier(code_verifier: string): void {
    if (localStorage.getItem(CODE_VERIFIER)) {
      this.deleteVerifier();
    }

    const encrypted = CryptoJS.AES.encrypt(code_verifier, environment.secret_pkce);
    localStorage.setItem(CODE_VERIFIER, encrypted.toString());
  }

  getVerifier(): string {
    const encrypted = localStorage.getItem(CODE_VERIFIER);
    const decrypted = CryptoJS.AES.decrypt(encrypted, environment.secret_pkce).toString(CryptoJS.enc.Utf8);
    return decrypted;
  }

  deleteVerifier(): void {
    localStorage.removeItem(CODE_VERIFIER);
  }

  private extractRolFromToken(): void {
    if (this.accessToken) {
      const token = this.accessToken;
      const payload = token.split('.')[1];
      const payloadDecoded = atob(payload);
      const values = JSON.parse(payloadDecoded);
      this.rol = values.roles || [];
    } else {
      this.rol = ''
    }
  }


  setRolUser(r: string): void {
    localStorage.removeItem(ROLE)
    localStorage.setItem(ROLE, r);
  }

  getRolUser(): string {
    return localStorage.getItem(ROLE);
  }


}
