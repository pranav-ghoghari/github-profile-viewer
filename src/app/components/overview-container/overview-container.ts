import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributionGraphComponent } from '../contribution-graph/contribution-graph';
import { PopularReposComponent } from '../popular-repos/popular-repos';
import { ActivityOverviewComponent } from '../activity-overview/activity-overview';

@Component({
    selector: 'app-overview-container',
    standalone: true,
    imports: [CommonModule, ContributionGraphComponent, PopularReposComponent, ActivityOverviewComponent],
    templateUrl: './overview-container.html',
    styleUrl: './overview-container.scss'
})
export class OverviewContainerComponent {
}
