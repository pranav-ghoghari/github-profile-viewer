import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../services/github.service';
import { GithubRepo } from '../../models/github.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-repo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repo-list.html',
  styleUrl: './repo-list.scss'
})
export class RepoListComponent implements OnInit {
  repos$: Observable<GithubRepo[]> | undefined;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.username$.subscribe(username => {
      this.repos$ = this.githubService.getRepos(username);
    });
  }

  getLanguageColor(language: string | null): string {
    const colors: { [key: string]: string } = {
      'TypeScript': '#3178c6',
      'JavaScript': '#f1e05a',
      'HTML': '#e34c26',
      'CSS': '#563d7c',
      'SCSS': '#c6538c',
      'Python': '#3572A5',
      'Java': '#b07219'
    };
    return language ? (colors[language] || '#8b949e') : '#8b949e';
  }
}
