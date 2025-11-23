import { Routes } from '@angular/router';

import { RepoListComponent } from './components/repo-list/repo-list';
import { ContributionGraphComponent } from './components/contribution-graph/contribution-graph';

export const routes: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: ContributionGraphComponent }, // Using ContributionGraph as Overview for now
    { path: 'repositories', component: RepoListComponent },
    { path: 'projects', component: ContributionGraphComponent }, // Placeholder
    { path: 'packages', component: ContributionGraphComponent }, // Placeholder
    { path: 'stars', component: ContributionGraphComponent } // Placeholder
];
