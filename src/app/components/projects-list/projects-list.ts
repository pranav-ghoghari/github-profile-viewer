import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubProject } from '../../models/github.models';

@Component({
    selector: 'app-projects-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './projects-list.html',
    styleUrl: './projects-list.scss'
})
export class ProjectsListComponent {
    projects: GithubProject[] = [
        {
            id: 1,
            name: 'UptimeAI Platform Redesign',
            description: 'Complete redesign of the UptimeAI platform with new UI/UX',
            state: 'OPEN',
            url: 'https://github.com/users/shreeramk/projects/1',
            createdAt: '2024-09-01T10:00:00Z',
            updatedAt: '2024-11-20T15:30:00Z',
            progress: 65
        },
        {
            id: 2,
            name: 'ML Model Improvements',
            description: 'Enhancing machine learning models for better prediction accuracy',
            state: 'OPEN',
            url: 'https://github.com/users/shreeramk/projects/2',
            createdAt: '2024-08-15T09:00:00Z',
            updatedAt: '2024-11-22T11:20:00Z',
            progress: 80
        },
        {
            id: 3,
            name: 'API Documentation',
            description: 'Comprehensive API documentation for all services',
            state: 'OPEN',
            url: 'https://github.com/users/shreeramk/projects/3',
            createdAt: '2024-10-01T14:00:00Z',
            updatedAt: '2024-11-18T16:45:00Z',
            progress: 45
        },
        {
            id: 4,
            name: 'Q3 2024 Sprint',
            description: 'Sprint planning and tracking for Q3 2024',
            state: 'CLOSED',
            url: 'https://github.com/users/shreeramk/projects/4',
            createdAt: '2024-07-01T08:00:00Z',
            updatedAt: '2024-09-30T17:00:00Z',
            progress: 100
        }
    ];

    getRelativeTime(dateString: string): string {
        const date = new Date(dateString);
        const now = new Date();
        const diffInMs = now.getTime() - date.getTime();
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

        if (diffInDays === 0) return 'Updated today';
        if (diffInDays === 1) return 'Updated yesterday';
        if (diffInDays < 7) return `Updated ${diffInDays} days ago`;
        if (diffInDays < 30) return `Updated ${Math.floor(diffInDays / 7)} weeks ago`;
        if (diffInDays < 365) return `Updated ${Math.floor(diffInDays / 30)} months ago`;
        return `Updated ${Math.floor(diffInDays / 365)} years ago`;
    }
}
