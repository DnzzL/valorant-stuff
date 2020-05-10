import { AgentTrajectory } from '../../../shared/interfaces';

export const bindTrajectories: AgentTrajectory[] = [
  {
    agent: 'Sova',
    trajectories: [
      {
        id: 1,
        description: 'B Short',
        type: 'projectile',
        details: {
          strength: 3,
          bounces: 2,
        },
        path: [
          [262.5, 313.2265625],
          [130.5, 427.2265625],
          [372.5, 254.2265625],
          [124.5, 146.2265625],
        ],
      },
      {
        id: 2,
        description: 'B Long',
        type: 'projectile',
        details: {
          strength: 2,
          bounces: 0,
        },
        path: [
          [168.5, 493.2265625],
          [168.5, 292.2265625],
        ],
      },
      {
        id: 3,
        description: 'Defender side spawn',
        type: 'projectile',
        details: {
          strength: 2,
          bounces: 1,
        },
        path: [
          [377.5, 23.2265625],
          [558.5, 216.2265625],
        ],
      },
      {
        id: 4,
        description: 'A Short',
        type: 'projectile',
        details: {
          strength: 3,
          bounces: 2,
        },
        path: [
          [389.5, 382.2265625],
          [435.5, 317.2265625],
          [401.5, 265.2265625],
          [433.5, 225.2265625],
        ],
      },
      {
        id: 5,
        description: 'B Elbow',
        type: 'projectile',
        details: {
          strength: 1,
          bounces: 0,
        },
        path: [
          [63.5, 181.2265625],
          [38.5, 313.2265625],
        ],
      },
      {
        id: 6,
        description: 'B Site',
        type: 'projectile',
        details: {
          strength: 3,
          bounces: 0,
        },
        path: [
          [106.5, 128.2265625],
          [605.5, 428.2265625],
        ],
      },
      {
        id: 7,
        description: 'A Bath',
        type: 'projectile',
        details: {
          strength: 2,
          bounces: 0,
        },
        path: [
          [591.5, 297.2265625],
          [562.5, 201.2265625],
        ],
      },
    ],
  },
];
