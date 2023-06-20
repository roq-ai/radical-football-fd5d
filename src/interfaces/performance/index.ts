import { PlayerInterface } from 'interfaces/player';
import { CoachInterface } from 'interfaces/coach';
import { GetQueryInterface } from 'interfaces';

export interface PerformanceInterface {
  id?: string;
  player_id: string;
  coach_id: string;
  date: any;
  score: number;
  created_at?: any;
  updated_at?: any;

  player?: PlayerInterface;
  coach?: CoachInterface;
  _count?: {};
}

export interface PerformanceGetQueryInterface extends GetQueryInterface {
  id?: string;
  player_id?: string;
  coach_id?: string;
}
