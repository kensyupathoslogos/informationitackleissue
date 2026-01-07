import { Injectable, inject } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  currentUser: User | null = null;

  constructor() {
    // Monitor authentication state
    this.auth.onAuthStateChanged((user) => {
      this.currentUser = user;
    });
  }

  /**
   * Sign in with Google account
   * @returns Promise with user data or error
   */
  async signInWithGoogle(): Promise<{ success: boolean; user?: User; error?: string }> {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
      const user = result.user;

      // Check if email ends with @pathoslogos.co.jp
      if (user.email && user.email.endsWith('@pathoslogos.co.jp')) {
        return { success: true, user };
      } else {
        // Invalid domain - sign out the user
        await this.signOut();
        return { success: false, error: '@pathoslogos.co.jpのメールアドレスのみ使用できます。' };
      }
    } catch (error: any) {
      console.error('Sign-in error:', error);
      return { success: false, error: 'サインインに失敗しました。もう一度お試しください。' };
    }
  }

  /**
   * Sign out current user
   */
  async signOut(): Promise<void> {
    try {
      await this.auth.signOut();
    } catch (error) {
      console.error('Sign-out error:', error);
      throw error;
    }
  }

  /**
   * Get current user
   */
  getCurrentUser(): User | null {
    return this.currentUser;
  }

  /**
   * Check if user is signed in
   */
  isSignedIn(): boolean {
    return this.currentUser !== null;
  }
}
