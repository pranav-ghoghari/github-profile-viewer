import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubRepo } from '../../models/github.models';

@Component({
    selector: 'app-starred-repos',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './starred-repos.html',
    styleUrl: './starred-repos.scss'
})
export class StarredReposComponent {
    starredRepos: GithubRepo[] = [
        {
            id: 101,
            name: 'pgvectorscale',
            full_name: 'timescale/pgvectorscale',
            html_url: 'https://github.com/timescale/pgvectorscale',
            description: 'A complement to pgvector for high performance, cost efficient vector search on large workloads.',
            private: false,
            language: 'Rust',
            stargazers_count: 2429,
            forks_count: 112,
            open_issues_count: 45,
            watchers_count: 50,
            created_at: '2023-11-10T12:00:00Z',
            updated_at: '2024-11-01T10:30:00Z',
            pushed_at: '2024-11-01T10:30:00Z'
        },
        {
            id: 102,
            name: 'troika',
            full_name: 'protectwise/troika',
            html_url: 'https://github.com/protectwise/troika',
            description: 'A JavaScript framework for interactive 3D and 2D visualizations',
            private: false,
            language: 'JavaScript',
            stargazers_count: 1869,
            forks_count: 147,
            open_issues_count: 32,
            watchers_count: 40,
            created_at: '2019-05-15T14:20:00Z',
            updated_at: '2024-09-10T16:45:00Z',
            pushed_at: '2024-09-10T16:45:00Z'
        },
        {
            id: 103,
            name: 'peaks.js',
            full_name: 'bbc/peaks.js',
            html_url: 'https://github.com/bbc/peaks.js',
            description: 'JavaScript UI component for interacting with audio waveforms',
            private: false,
            language: 'JavaScript',
            stargazers_count: 3355,
            forks_count: 288,
            open_issues_count: 15,
            watchers_count: 80,
            created_at: '2016-10-20T09:00:00Z',
            updated_at: '2024-11-10T11:20:00Z',
            pushed_at: '2024-11-10T11:20:00Z'
        },
        {
            id: 104,
            name: 'angular',
            full_name: 'angular/angular',
            html_url: 'https://github.com/angular/angular',
            description: 'The modern web developer\'s platform',
            private: false,
            language: 'TypeScript',
            stargazers_count: 95400,
            forks_count: 25600,
            open_issues_count: 1200,
            watchers_count: 3500,
            created_at: '2014-09-18T16:00:00Z',
            updated_at: '2024-11-23T08:00:00Z',
            pushed_at: '2024-11-23T08:00:00Z'
        },
        {
            id: 105,
            name: 'vscode',
            full_name: 'microsoft/vscode',
            html_url: 'https://github.com/microsoft/vscode',
            description: 'Visual Studio Code',
            private: false,
            language: 'TypeScript',
            stargazers_count: 165000,
            forks_count: 28000,
            open_issues_count: 5000,
            watchers_count: 4000,
            created_at: '2015-09-03T12:00:00Z',
            updated_at: '2024-11-23T09:30:00Z',
            pushed_at: '2024-11-23T09:30:00Z'
        }
    ];

    getLanguageColor(language: string | null): string {
        const colors: { [key: string]: string } = {
            'JavaScript': '#f1e05a',
            'TypeScript': '#3178c6',
            'Python': '#3572A5',
            'Rust': '#dea584',
            'Go': '#00ADD8',
            'Java': '#b07219',
            'C++': '#f34b7d',
            'HTML': '#e34c26',
            'CSS': '#563d7c'
        };
        return language ? colors[language] || '#586069' : '#586069';
    }
}
