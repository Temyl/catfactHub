export interface UserInfo {
    email: string;
    name: string;
    stack: string
}

export interface Apiresponse {
    status: string;
    user: UserInfo;
    timestamp: string;
    fact: string;
}

export enum DURATION {
  SECONDS = 1_000,
  MINUTES = 60 * SECONDS,
  HOURS = 60 * MINUTES,
  DAYS = 24 * HOURS,
}