import { AgentTrajectory } from '../../../shared/interfaces';

export const bindTrajectories: AgentTrajectory[] = [
  {
    agent: 'Sova',
    trajectories: [
      {
        id: 1,
        description: 'B Short',
        type: 'projectile',
        side: 'offense',
        details: {
          strength: 'full',
          bounces: 2,
          description:
            'stand against the two stacks carboard boxes, look for the silo and aim at the white smudge.',
        },
        path: [
          [262.5, 313.2265625],
          [130.5, 427.2265625],
          [266, 295.2265625],
          [124.5, 146.2265625],
        ],
      },
      {
        id: 2,
        description: 'B Long',
        type: 'projectile',
        side: 'offense',
        details: {
          strength: 2,
          bounces: 0,
          description:
            'by the cactus on the rock wall behind you, look towards the roof in front of you.',
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
        side: 'defense',
        details: {
          strength: 2,
          bounces: 1,
          description: 'look for the white dot in the black smudge',
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
        side: 'offense',
        details: {
          strength: 'full',
          bounces: 2,
          description: 'against the barrel from the spawn left of A short',
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
        side: 'defense',
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
        side: 'defense',
        details: {
          strength: 'full',
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
        side: 'offense',
        details: {
          strength: 2,
          bounces: 0,
          description:
            'sat on top of the drain pass, aim toward the skylight above and look at the bottom of the design.',
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
        side: 'offense',
        path: [
          [488, 406.2265625],
          [462, 138.2265625],
        ],
      },
      {
        id: 2,
        description: 'A Short',
        type: 'projectile',
        side: 'offense',
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
        side: 'offense',
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
        side: 'offense',
        path: [
          [612, 316.2265625],
          [436, 158.2265625],
        ],
      },
      {
        id: 5,
        description: 'B Long',
        type: 'wall',
        side: 'offense',
        path: [
          [57, 399.2265625],
          [81, 131.2265625],
        ],
      },
      {
        id: 6,
        description: 'B Long',
        type: 'projectile',
        side: 'offense',
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
        side: 'offense',
        path: [
          [263, 400.2265625],
          [105, 128.2265625],
        ],
      },
      {
        id: 8,
        description: 'A Port',
        type: 'projectile',
        side: 'defense',
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
        side: 'defense',
        path: [
          [398, 239.2265625],
          [102, 247.2265625],
        ],
      },
      {
        id: 10,
        description: 'A Port',
        type: 'projectile',
        side: 'defense',
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
