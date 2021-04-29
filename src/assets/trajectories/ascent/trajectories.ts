import { AgentTrajectory } from "../../../shared/interfaces";

export const ascentTrajectories: AgentTrajectory[] = [
  {
    agent: "Yoru",
    trajectories: [
      {
        id: 1,
        description: "Boathouse",
        type: "projectile",
        side: "offense",
        details: {
          description: "from B main you can TP to Boathouse",
        },
        path: [
          [595, 298.6875],
          [762, 30.6875],
        ],
      },
    ],
  },
  {
    agent: "Killjoy",
    trajectories: [
      {
        id: 1,
        description: "A site",
        type: "item",
        side: "defense",
        path: [
          [648, 655.359375],
          [648, 656.359375],
        ],
      },
      {
        id: 2,
        description: "A Wine",
        type: "projectile",
        side: "defense",
        path: [
          [608, 376.359375],
          [502, 835.359375],
        ],
      },
    ],
  },
];
