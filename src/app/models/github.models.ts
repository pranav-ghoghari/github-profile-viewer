export interface GithubUser {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    name: string | null;
    company: string | null;
    blog: string | null;
    location: string | null;
    email: string | null;
    hireable: boolean | null;
    bio: string | null;
    twitter_username: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}

export interface GithubRepo {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    description: string | null;
    private: boolean;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    watchers_count: number;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    topics?: string[];
}

export interface ContributionDay {
    contributionCount: number;
    weekday: number;
    date: string;
    color: string;
}

export interface ContributionWeek {
    contributionDays: ContributionDay[];
}

export interface ContributionCalendar {
    totalContributions: number;
    weeks: ContributionWeek[];
}

export interface ContributionsResponse {
    data: {
        user: {
            contributionsCollection: {
                contributionCalendar: ContributionCalendar;
            };
        };
    };
}
