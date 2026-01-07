import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth, User } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  imports: [CommonModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})
export class Toolbar implements OnInit {
  private auth = inject(Auth);
  private router = inject(Router);
  isMenuOpen = false;
  currentUser: User | null = null;

  ngOnInit() {
    // Monitor authentication state
    this.auth.onAuthStateChanged((user) => {
      this.currentUser = user;
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  async signOut() {
    try {
      await this.auth.signOut();
      this.toggleMenu();
      this.router.navigate(['/signin']);
    } catch (error) {
      console.error('Sign-out error:', error);
    }
  }
}
