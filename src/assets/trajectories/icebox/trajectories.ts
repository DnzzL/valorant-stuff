import { AgentTrajectory } from "../../../shared/interfaces";

export const iceboxTrajectories: AgentTrajectory[] = [
  {
    agent: "Sova",
    trajectories: [
      {
        id: 1,
        description: "Boathouse",
        type: "projectile",
        side: "offense",
        details: {
          strength: "full",
          bounces: 0,
        },
        path: [
          [554, 327.90625],
          [449, 666.90625],
        ],
      },
    ],
  },
];
