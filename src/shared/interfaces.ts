import { AgentName } from '../Agents';
export type Coord = number[][];

export type TrajectoryType = 'projectile' | 'wall';

export type Trajectory = {
  id: number;
  description: string;
  type: TrajectoryType;
  details?: any;
  path: Coord;
};

export type AgentTrajectory = {
  agent: AgentName;
  trajectories: Trajectory[];
};
