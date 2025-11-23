import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../services/github.service';
import { GithubUser } from '../../models/github.models';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-profile-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-sidebar.html',
  styleUrl: './profile-sidebar.scss'
})
export class ProfileSidebarComponent implements OnInit {
  user$: Observable<GithubUser | null> | undefined;
  error: string | null = null;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.username$.subscribe(username => {
      this.error = null;
      this.user$ = this.githubService.getUser(username).pipe(
        catchError(err => {
          console.error('Error fetching user:', err);
          this.error = 'User not found or API error. Please check your token and try again.';
          return of(null);
        })
      );
    });
  }
}
