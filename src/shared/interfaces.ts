import { AgentName } from "../Agents";
export type Coord = number[][];

export type TrajectoryType = "projectile" | "wall" | "item";
export type Side = "offense" | "defense";

export type Trajectory = {
  id: number;
  description: string;
  type: TrajectoryType;
  details?: any;
  path: Coord;
  side: Side;
};

export type AgentTrajectory = {
  agent: AgentName;
  trajectories: Trajectory[];
};
