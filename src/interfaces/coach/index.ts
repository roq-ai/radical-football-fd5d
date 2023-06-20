import { GoalInterface } from 'interfaces/goal';
import { PerformanceInterface } from 'interfaces/performance';
import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { GetQueryInterface } from 'interfaces';

export interface CoachInterface {
  id?: string;
  user_id: string;
  academy_id: string;
  created_at?: any;
  updated_at?: any;
  goal?: GoalInterface[];
  performance?: PerformanceInterface[];
  user?: UserInterface;
  academy?: AcademyInterface;
  _count?: {
    goal?: number;
    performance?: number;
  };
}

export interface CoachGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  academy_id?: string;
}
