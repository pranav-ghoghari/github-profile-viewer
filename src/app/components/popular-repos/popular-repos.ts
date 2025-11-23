import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubRepo } from '../../models/github.models';

@Component({
    selector: 'app-popular-repos',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './popular-repos.html',
    styleUrl: './popular-repos.scss'
})
export class PopularReposComponent {
    popularRepos: GithubRepo[] = [
        {
            id: 1,
            name: 'Complete-Python-3-Bootcamp',
            full_name: 'shreeramk/Complete-Python-3-Bootcamp',
            html_url: 'https://github.com/shreeramk/Complete-Python-3-Bootcamp',
            description: 'Course Files for Complete Python 3 Bootcamp Course on Udemy',
            private: false,
            language: 'Jupyter Notebook',
            stargazers_count: 0,
            forks_count: 0,
            open_issues_count: 0,
            watchers_count: 0,
            created_at: '2024-01-15T10:30:00Z',
            updated_at: '2024-10-20T14:22:00Z',
            pushed_at: '2024-10-20T14:22:00Z',
            topics: ['python', 'bootcamp', 'course']
        },
        {
            id: 2,
            name: 'flutter_login_ui',
            full_name: 'shreeramk/flutter_login_ui',
            html_url: 'https://github.com/shreeramk/flutter_login_ui',
            description: 'Forked from Harshith-10/flutter_login_ui',
            private: false,
            language: 'Dart',
            stargazers_count: 0,
            forks_count: 0,
            open_issues_count: 0,
            watchers_count: 0,
            created_at: '2024-02-10T08:15:00Z',
            updated_at: '2024-09-18T11:45:00Z',
            pushed_at: '2024-09-18T11:45:00Z'
        },
        {
            id: 3,
            name: 'gitignore',
            full_name: 'shreeramk/gitignore',
            html_url: 'https://github.com/shreeramk/gitignore',
            description: 'A collection of useful .gitignore templates',
            private: false,
            language: null,
            stargazers_count: 0,
            forks_count: 0,
            open_issues_count: 0,
            watchers_count: 0,
            created_at: '2024-03-05T16:20:00Z',
            updated_at: '2024-08-12T09:30:00Z',
            pushed_at: '2024-08-12T09:30:00Z'
        },
        {
            id: 4,
            name: 'kafkaj',
            full_name: 'shreeramk/kafkaj',
            html_url: 'https://github.com/shreeramk/kafkaj',
            description: 'A modern Apache Kafka client for node.js',
            private: false,
            language: 'JavaScript',
            stargazers_count: 0,
            forks_count: 0,
            open_issues_count: 0,
            watchers_count: 0,
            created_at: '2024-04-22T13:10:00Z',
            updated_at: '2024-11-01T15:20:00Z',
            pushed_at: '2024-11-01T15:20:00Z',
            topics: ['kafka', 'nodejs', 'client']
        },
        {
            id: 5,
            name: 'node-opcua-1',
            full_name: 'shreeramk/node-opcua-1',
            html_url: 'https://github.com/shreeramk/node-opcua-1',
            description: 'an implementation of a OPC UA stack fully written in javascript and nodejs - http://node-opcua.github.io/',
            private: false,
            language: 'TypeScript',
            stargazers_count: 0,
            forks_count: 0,
            open_issues_count: 0,
            watchers_count: 0,
            created_at: '2024-05-18T11:00:00Z',
            updated_at: '2024-10-28T10:15:00Z',
            pushed_at: '2024-10-28T10:15:00Z'
        },
        {
            id: 6,
            name: 'node-opcua-logger',
            full_name: 'shreeramk/node-opcua-logger',
            html_url: 'https://github.com/shreeramk/node-opcua-logger',
            description: 'An OPC-UA Client that logs data to InfluxDB',
            private: false,
            language: 'JavaScript',
            stargazers_count: 0,
            forks_count: 0,
            open_issues_count: 0,
            watchers_count: 0,
            created_at: '2024-06-30T14:45:00Z',
            updated_at: '2024-11-15T16:30:00Z',
            pushed_at: '2024-11-15T16:30:00Z',
            topics: ['opcua', 'influxdb', 'logging']
        }
    ];

    getLanguageColor(language: string | null): string {
        const colors: { [key: string]: string } = {
            'JavaScript': '#f1e05a',
            'TypeScript': '#3178c6',
            'Python': '#3572A5',
            'Dart': '#00B4AB',
            'Jupyter Notebook': '#DA5B0B',
            'Rust': '#dea584',
            'Go': '#00ADD8',
            'Java': '#b07219'
        };
        return language ? colors[language] || '#586069' : '#586069';
    }
}
