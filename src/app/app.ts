import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ProfileSidebarComponent } from './components/profile-sidebar/profile-sidebar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ProfileSidebarComponent, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'github-profile-viewer';
  username = 'pranav-ghoghari';

  constructor(public githubService: GithubService) { }

  searchUser() {
    if (this.username.trim()) {
      this.githubService.updateUsername(this.username);
    }
  }
}
