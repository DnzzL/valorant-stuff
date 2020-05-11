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
  {
    agent: 'Viper',
    trajectories: [
      {
        id: 1,
        description: 'A Short',
        type: 'wall',
        path: [
          [488, 406.2265625],
          [462, 138.2265625],
        ],
      },
      {
        id: 2,
        description: 'A Short',
        type: 'projectile',
        details: {
          spell: 'Poison Cloud',
        },
        path: [
          [498, 367.2265625],
          [472, 214.2265625],
        ],
      },
      {
        id: 3,
        description: 'A Bath',
        type: 'projectile',
        details: {
          spell: 'Poison Cloud',
        },
        path: [
          [602, 305.2265625],
          [540, 142.2265625],
        ],
      },
      {
        id: 4,
        description: 'A Short',
        type: 'wall',
        path: [
          [612, 316.2265625],
          [436, 158.2265625],
        ],
      },
      {
        id: 5,
        description: 'B Long',
        type: 'wall',
        path: [
          [57, 399.2265625],
          [81, 131.2265625],
        ],
      },
      {
        id: 6,
        description: 'B Long',
        type: 'projectile',
        details: {
          spell: 'Poison Cloud',
          info: 'Jump Throw',
        },
        path: [
          [57, 399.2265625],
          [176, 203.2265625],
        ],
      },
      {
        id: 7,
        description: 'B Short',
        type: 'wall',
        path: [
          [263, 400.2265625],
          [105, 128.2265625],
        ],
      },
      {
        id: 8,
        description: 'A Port',
        type: 'projectile',
        details: {
          spell: 'Poison Cloud',
          info: 'One-Way, Jump Throw',
        },
        path: [
          [421, 276.2265625],
          [422, 291.2265625],
        ],
      },
      {
        id: 9,
        description: 'A Port',
        type: 'wall',
        path: [
          [398, 239.2265625],
          [102, 247.2265625],
        ],
      },
      {
        id: 10,
        description: 'A Port',
        type: 'projectile',
        details: {
          spell: 'Poison Cloud',
          info: 'One-Way',
        },
        path: [
          [558, 255.2265625],
          [538, 267.2265625],
        ],
      },
    ],
  },
];
