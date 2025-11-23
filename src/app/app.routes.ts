import { Routes } from '@angular/router';

import { RepoListComponent } from './components/repo-list/repo-list';
import { OverviewContainerComponent } from './components/overview-container/overview-container';
import { ProjectsListComponent } from './components/projects-list/projects-list';
import { PackagesListComponent } from './components/packages-list/packages-list';
import { StarredReposComponent } from './components/starred-repos/starred-repos';

export const routes: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: OverviewContainerComponent },
    { path: 'repositories', component: RepoListComponent },
    { path: 'projects', component: ProjectsListComponent },
    { path: 'packages', component: PackagesListComponent },
    { path: 'stars', component: StarredReposComponent }
];
