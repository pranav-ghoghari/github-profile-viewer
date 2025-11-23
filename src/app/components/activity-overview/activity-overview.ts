import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityItem } from '../../models/github.models';

@Component({
    selector: 'app-activity-overview',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './activity-overview.html',
    styleUrl: './activity-overview.scss'
})
export class ActivityOverviewComponent {
    activityItems: ActivityItem[] = [
        {
            id: '1',
            type: 'COMMITS',
            count: 56,
            repositoryCount: 11,
            repositories: ['UptimeAI/uptime_webapp', 'UptimeAI/uptime_server', 'UptimeAI/uptime_ml'],
            date: 'October 2025'
        },
        {
            id: '2',
            type: 'PULL_REQUESTS',
            count: 29,
            repositoryCount: 5,
            repositories: ['UptimeAI/uptime_webapp', 'UptimeAI/uptime_scripts', 'UptimeAI/uptime_engine'],
            date: 'October 2025'
        },
        {
            id: '3',
            type: 'ISSUES',
            count: 12,
            repositoryCount: 3,
            repositories: ['UptimeAI/uptime_webapp', 'UptimeAI/uptime_ml'],
            date: 'October 2025'
        },
        {
            id: '4',
            type: 'REVIEWS',
            count: 18,
            repositoryCount: 4,
            repositories: ['UptimeAI/uptime_server', 'UptimeAI/uptime_webapp'],
            date: 'October 2025'
        }
    ];

    getActivityIcon(type: string): string {
        const icons: { [key: string]: string } = {
            'COMMITS': 'M11.93 8.5a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 0 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 0 1 0 1.5Zm-1.43-.75a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z',
            'PULL_REQUESTS': 'M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z',
            'ISSUES': 'M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z',
            'REPOSITORIES': 'M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z',
            'REVIEWS': 'M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 14.25 14H8.061l-2.574 2.573A1.458 1.458 0 0 1 3 15.543V14H1.75A1.75 1.75 0 0 1 0 12.25v-9.5C0 1.784.784 1 1.75 1ZM1.5 2.75v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z'
        };
        return icons[type] || icons['COMMITS'];
    }

    getActivityText(item: ActivityItem): string {
        const actions: { [key: string]: string } = {
            'COMMITS': 'Created',
            'PULL_REQUESTS': 'Opened',
            'ISSUES': 'Opened',
            'REPOSITORIES': 'Created',
            'REVIEWS': 'Reviewed'
        };

        const subjects: { [key: string]: string } = {
            'COMMITS': 'commits',
            'PULL_REQUESTS': 'pull requests',
            'ISSUES': 'issues',
            'REPOSITORIES': 'repositories',
            'REVIEWS': 'pull requests'
        };

        return `${actions[item.type]} ${item.count} ${subjects[item.type]} in ${item.repositoryCount} ${item.repositoryCount === 1 ? 'repository' : 'repositories'}`;
    }
}
