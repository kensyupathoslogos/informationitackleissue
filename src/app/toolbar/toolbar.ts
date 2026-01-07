import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-toolbar',
  imports: [CommonModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})
export class Toolbar {
  private router = inject(Router);
  authService = inject(AuthService);
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  async signOut() {
    try {
      await this.authService.signOut();
      this.toggleMenu();
      this.router.navigate(['/signin']);
    } catch (error) {
      console.error('Sign-out error:', error);
    }
  }
}
