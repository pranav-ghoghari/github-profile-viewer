import { Component, OnInit, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { GithubService } from '../../services/github.service';
import { ContributionDay, ContributionWeek } from '../../models/github.models';
import { switchMap, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-contribution-graph',
  standalone: true,
  imports: [CommonModule, NgxEchartsModule],
  templateUrl: './contribution-graph.html',
  styleUrl: './contribution-graph.scss'
})
export class ContributionGraphComponent implements OnInit {
  chartOption: EChartsOption = {};
  isLoading = true;
  totalContributions = 0;
  private readonly destroyRef = inject(DestroyRef);

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.username$
      .pipe(
        tap(() => {
          this.isLoading = true;
        }),
        switchMap(username => this.githubService.getContributions(username)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: (response) => {
          const calendar = response.data.user.contributionsCollection.contributionCalendar;
          this.totalContributions = calendar.totalContributions ?? 0;
          this.processData(calendar.weeks);
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error fetching contributions:', err);
          this.isLoading = false;
        }
      });
  }

  private processData(weeks: ContributionWeek[]): void {
    if (!weeks?.length) {
      this.chartOption = {};
      return;
    }

    const data: [string, number][] = [];

    weeks.forEach(week => {
      week.contributionDays.forEach((day: ContributionDay) => {
        data.push([day.date, day.contributionCount]);
      });
    });

    this.chartOption = {
      tooltip: {
        position: 'top',
        formatter: (params: any) => {
          return `${params.data[1]} contributions on ${params.data[0]}`;
        }
      },
      visualMap: {
        min: 0,
        max: 10,
        type: 'piecewise',
        orient: 'horizontal',
        left: 'center',
        top: 0,
        show: false, // Hide the legend for cleaner look
        inRange: {
          color: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']
        }
      },
      calendar: {
        top: 30,
        left: 30,
        right: 30,
        cellSize: ['auto', 13],
        range: [data[0][0], data[data.length - 1][0]],
        itemStyle: {
          borderWidth: 2,
          borderColor: '#fff'
        },
        splitLine: {
          show: false
        },
        yearLabel: { show: false }
      },
      series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: data
      }
    };
  }
}
