import { Component, inject } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin',
  imports: [CommonModule],
  templateUrl: './signin.html',
  styleUrl: './signin.scss',
})
export class Signin {
  private auth = inject(Auth);
  private router = inject(Router);
  errorMessage = '';
  isLoading = false;

  async signInWithGoogle() {
    this.errorMessage = '';
    this.isLoading = true;

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
      const user = result.user;

      // Check if email ends with @pathoslogos.co.jp
      if (user.email && user.email.endsWith('@pathoslogos.co.jp')) {
        // Sign-in successful
        this.router.navigate(['/']);
      } else {
        // Invalid domain - sign out the user
        await this.auth.signOut();
        this.errorMessage = '@pathoslogos.co.jpのメールアドレスのみ使用できます。';
      }
    } catch (error: any) {
      console.error('Sign-in error:', error);
      this.errorMessage = 'サインインに失敗しました。もう一度お試しください。';
    } finally {
      this.isLoading = false;
    }
  }
}
