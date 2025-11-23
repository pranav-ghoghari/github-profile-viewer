import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { GithubUser, GithubRepo, ContributionsResponse } from '../models/github.models';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private restBase = 'https://api.github.com';
  private graphqlUrl = 'https://api.github.com/graphql';
  private token = environment.githubToken;

  private usernameSubject = new BehaviorSubject<string>('pranav-ghoghari');
  username$ = this.usernameSubject.asObservable();

  constructor(private http: HttpClient) { }

  updateUsername(username: string): void {
    this.usernameSubject.next(username);
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    });
  }

  getUser(username: string): Observable<GithubUser> {
    return this.http.get<GithubUser>(`${this.restBase}/users/${username}`, {
      headers: this.getHeaders()
    });
  }

  getRepos(username: string): Observable<GithubRepo[]> {
    return this.http.get<GithubRepo[]>(`${this.restBase}/users/${username}/repos`, {
      headers: this.getHeaders(),
      params: {
        sort: 'updated',
        direction: 'desc',
        per_page: '30'
      }
    });
  }

  getContributions(username: string): Observable<ContributionsResponse> {
    const query = `
      query ($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  weekday
                  date
                  color
                }
              }
            }
          }
        }
      }
    `;

    return this.http.post<ContributionsResponse>(this.graphqlUrl, {
      query,
      variables: { username }
    }, {
      headers: this.getHeaders()
    }).pipe(
      map(response => {
        if ((response as any).errors) {
          throw new Error((response as any).errors[0].message);
        }
        return response;
      }),
      catchError(error => {
        console.error('GraphQL Error:', error);
        return throwError(() => new Error('Failed to fetch contributions'));
      })
    );
  }
}
