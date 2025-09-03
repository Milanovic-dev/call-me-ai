export type TimeUnit = 'seconds' | 'minutes' | 'hours';

export interface Schedule {
  value: number; // integer >= 1
  unit: TimeUnit;
}

export interface Character {
  id: string; // uuid
  name: string;
  schedule: Schedule;
}
