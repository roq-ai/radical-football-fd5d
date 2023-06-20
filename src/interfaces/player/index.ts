import { GoalInterface } from 'interfaces/goal';
import { PerformanceInterface } from 'interfaces/performance';
import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  user_id: string;
  academy_id: string;
  position: string;
  date_of_birth: any;
  height: number;
  weight: number;
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

export interface PlayerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  academy_id?: string;
  position?: string;
}
