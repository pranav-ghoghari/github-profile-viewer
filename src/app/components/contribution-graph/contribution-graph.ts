import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { GithubService } from '../../services/github.service';
import { ContributionDay } from '../../models/github.models';

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

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.username$.subscribe(username => {
      this.isLoading = true;
      this.githubService.getContributions(username).subscribe({
        next: (response) => {
          const calendar = response.data.user.contributionsCollection.contributionCalendar;
          this.processData(calendar.weeks);
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error fetching contributions:', err);
          this.isLoading = false;
        }
      });
    });
  }

  private processData(weeks: any[]): void {
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
