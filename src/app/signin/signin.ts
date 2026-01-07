import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  imports: [CommonModule],
  templateUrl: './signin.html',
  styleUrl: './signin.scss',
})
export class Signin {
  private authService = inject(AuthService);
  private router = inject(Router);
  errorMessage = '';
  isLoading = false;

  async signInWithGoogle() {
    this.errorMessage = '';
    this.isLoading = true;

    const result = await this.authService.signInWithGoogle();

    if (result.success) {
      // Sign-in successful
      this.router.navigate(['/activity']);
    } else {
      // Sign-in failed
      this.errorMessage = result.error || 'サインインに失敗しました。';
    }

    this.isLoading = false;
  }
}
