import { AgentTrajectory } from '../../../shared/interfaces';

export const havenTrajectories: AgentTrajectory[] = [
  {
    agent: 'Sova',
    trajectories: [
      {
        id: 1,
        description: 'B Site',
        type: 'projectile',
        details: {
          strength: 3,
          bounces: 2,
        },
        path: [
          [356.5, 219.2265625],
          [395.5, 543.2265625],
        ],
      },
      {
        id: 2,
        description: 'B Site',
        type: 'projectile',
        details: {
          strength: 3,
          bounces: 2,
        },
        path: [
          [313.5, 304.2265625],
          [627.5, 286.2265625],
        ],
      },
      {
        id: 3,
        description: 'C Lobby',
        type: 'projectile',
        details: {
          strength: 2,
          bounces: 0,
        },
        path: [
          [194.5, 580.2265625],
          [45.5, 221.2265625],
        ],
      },
      {
        id: 4,
        description: 'Mid Courtyard',
        type: 'projectile',
        details: {
          strength: 3,
          bounces: 1,
        },
        path: [
          [306.5, 418.2265625],
          [160.5, 418.2265625],
          [65.5, 356.2265625],
        ],
      },
      {
        id: 5,
        description: 'A Tower',
        type: 'projectile',
        details: {
          strength: 2,
          bounces: 0,
        },
        path: [
          [648.5, 214.2265625],
          [394.5, 574.2265625],
        ],
      },
      {
        id: 6,
        description: 'Attacker Side Spawn',
        type: 'projectile',
        details: {
          strength: 3,
          bounces: 2,
        },
        path: [
          [372.5, 680.2265625],
          [372.5, 328.2265625],
        ],
      },
      {
        id: 7,
        description: 'A Site',
        type: 'projectile',
        details: {
          strength: 3,
          bounces: 0,
        },
        path: [
          [670.5, 227.2265625],
          [183.5, 481.2265625],
        ],
      },
      {
        id: 8,
        description: 'C Site',
        type: 'projectile',
        details: {
          strength: 2,
          bounces: 0,
        },
        path: [
          [153.5, 210.2265625],
          [93.5, 538.2265625],
        ],
      },
      {
        id: 9,
        description: 'Defender Site Spawn',
        type: 'projectile',
        details: {
          strength: 3,
          bounces: 0,
        },
        path: [
          [511.5, 80.2265625],
          [70.5, 271.2265625],
        ],
      },
      {
        id: 10,
        description: 'C Site',
        type: 'projectile',
        details: {
          strength: 3,
          bounces: 0,
        },
        path: [
          [37.5, 244.2265625],
          [442.5, 569.2265625],
        ],
      },
      {
        id: 11,
        description: 'A Garden',
        type: 'projectile',
        details: {
          strength: 3,
          bounces: 0,
        },
        path: [
          [453.5, 569.2265625],
          [627.5, 209.2265625],
        ],
      },
    ],
  },
  {
    agent: 'Viper',
    trajectories: [
      {
        id: 1,
        description: 'A Long',
        type: 'projectile',
        details: {
          spell: 'Poison Cloud',
        },
        path: [
          [483.5, 477.2265625],
          [622.5, 208.2265625],
        ],
      },
      {
        id: 2,
        description: 'A Long',
        type: 'wall',
        path: [
          [483.5, 477.2265625],
          [586.5, 221.2265625],
        ],
      },
      {
        id: 3,
        description: 'C Lobby',
        type: 'projectile',
        details: {
          spell: 'Snake Bite',
        },
        path: [
          [483.5, 477.2265625],
          [617.5, 237.2265625],
        ],
      },
      {
        id: 4,
        description: 'C Lobby',
        type: 'wall',
        path: [
          [148, 537.2265625],
          [95, 211.2265625],
        ],
      },
      {
        id: 5,
        description: 'C Lobby',
        type: 'projectile',
        details: {
          spell: 'Poison Cloud',
        },
        path: [
          [148, 537.2265625],
          [68, 290.2265625],
        ],
      },
      {
        id: 6,
        description: 'C Lobby',
        type: 'projectile',
        details: {
          spell: 'Snake Bite',
        },
        path: [
          [141, 538.2265625],
          [67, 346.2265625],
        ],
      },
      {
        id: 7,
        description: 'C Lobby',
        type: 'projectile',
        details: {
          spell: 'Poison Cloud',
          information: 'Jump Throw',
        },
        path: [
          [161, 543.2265625],
          [152, 240.2265625],
        ],
      },
      {
        id: 8,
        description: 'Bottom Mid',
        type: 'wall',
        path: [
          [300, 466.2265625],
          [94, 225.2265625],
        ],
      },
      {
        id: 9,
        description: 'B Site',
        type: 'wall',
        path: [
          [414, 274.2265625],
          [672, 274.2265625],
        ],
      },
      {
        id: 10,
        description: 'C Link',
        type: 'wall',
        path: [
          [288, 230.2265625],
          [66, 356.2265625],
        ],
      },
      {
        id: 11,
        description: 'C Link',
        type: 'projectile',
        details: {
          spell: 'Poison Cloud',
        },
        path: [
          [288, 230.2265625],
          [73, 286.2265625],
        ],
      },
      {
        id: 12,
        description: 'C Window',
        type: 'projectile',
        details: {
          spell: 'Poison Cloud',
          info: 'One-way',
        },
        path: [
          [240, 279.2265625],
          [245, 345.2265625],
        ],
      },
      {
        id: 13,
        description: 'B Site',
        type: 'projectile',
        details: {
          spell: 'Poison Cloud',
          info: 'One-way',
        },
        path: [
          [412, 328.2265625],
          [302, 260.2265625],
        ],
      },
      {
        id: 14,
        description: 'B Site',
        type: 'projectile',
        details: {
          spell: 'Snake Bite',
          info: 'Run Throw',
        },
        path: [
          [335, 184.2265625],
          [366, 490.2265625],
        ],
      },
    ],
  },
];
