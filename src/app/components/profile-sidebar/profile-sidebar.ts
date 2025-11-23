import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../services/github.service';
import { GithubUser } from '../../models/github.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-sidebar.html',
  styleUrl: './profile-sidebar.scss'
})
export class ProfileSidebarComponent implements OnInit {
  user$: Observable<GithubUser> | undefined;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.username$.subscribe(username => {
      this.user$ = this.githubService.getUser(username);
    });
  }
}
