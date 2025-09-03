import { Schedule } from '../types/domain';

/**
 * Converts a schedule to milliseconds.
 */
export const scheduleToMs = ({ value, unit }: Schedule): number => {
  const factor =
    unit === 'seconds' ? 1000 : unit === 'minutes' ? 60_000 : 3_600_000;
  return value * factor;
};
