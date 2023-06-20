import { PlayerInterface } from 'interfaces/player';
import { CoachInterface } from 'interfaces/coach';
import { GetQueryInterface } from 'interfaces';

export interface GoalInterface {
  id?: string;
  player_id: string;
  coach_id: string;
  description: string;
  start_date: any;
  end_date: any;
  status: string;
  created_at?: any;
  updated_at?: any;

  player?: PlayerInterface;
  coach?: CoachInterface;
  _count?: {};
}

export interface GoalGetQueryInterface extends GetQueryInterface {
  id?: string;
  player_id?: string;
  coach_id?: string;
  description?: string;
  status?: string;
}
