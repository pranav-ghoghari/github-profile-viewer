import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubPackage } from '../../models/github.models';

@Component({
    selector: 'app-packages-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './packages-list.html',
    styleUrl: './packages-list.scss'
})
export class PackagesListComponent {
    packages: GithubPackage[] = [
        {
            id: 1,
            name: '@shreeramk/logger',
            packageType: 'NPM',
            version: '1.0.2',
            description: 'A lightweight logging utility for Node.js applications',
            downloads: 1250,
            publishedAt: '2024-10-15T14:30:00Z',
            url: 'https://github.com/shreeramk/logger/packages'
        },
        {
            id: 2,
            name: 'uptime-monitor',
            packageType: 'DOCKER',
            version: 'latest',
            description: 'Docker container for uptime monitoring service',
            downloads: 540,
            publishedAt: '2024-11-05T09:15:00Z',
            url: 'https://github.com/users/shreeramk/packages/container/package/uptime-monitor'
        },
        {
            id: 3,
            name: '@shreeramk/ui-kit',
            packageType: 'NPM',
            version: '2.1.0',
            description: 'React UI component library',
            downloads: 890,
            publishedAt: '2024-09-20T11:45:00Z',
            url: 'https://github.com/shreeramk/ui-kit/packages'
        }
    ];

    getPackageIcon(type: string): string {
        // Simplified icons for demo
        const icons: { [key: string]: string } = {
            'NPM': 'M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25V2.75A1.75 1.75 0 0 0 14.25 1H1.75ZM1.5 2.75a.25.25 0 0 1 .25-.25H14.25a.25.25 0 0 1 .25.25v10.5a.25.25 0 0 1-.25.25H1.75a.25.25 0 0 1-.25-.25V2.75Z',
            'DOCKER': 'M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25V2.75A1.75 1.75 0 0 0 14.25 1H1.75ZM1.5 2.75a.25.25 0 0 1 .25-.25H14.25a.25.25 0 0 1 .25.25v10.5a.25.25 0 0 1-.25.25H1.75a.25.25 0 0 1-.25-.25V2.75Z'
        };
        return icons[type] || icons['NPM'];
    }
}
