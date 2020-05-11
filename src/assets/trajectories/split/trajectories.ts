import { AgentTrajectory } from '../../../shared/interfaces';

export const splitTrajectories: AgentTrajectory[] = [
  {
    agent: 'Sova',
    trajectories: [
      {
        id: 1,
        description: 'A Ramp',
        type: 'projectile',
        details: {
          strength: 3,
          bounces: 1,
        },
        path: [
          [494.5, 342.2265625],
          [129.5, 457.2265625],
        ],
      },
      {
        id: 2,
        description: 'A Lobby',
        type: 'projectile',
        details: {
          strength: 3,
          bounces: 1,
        },
        path: [
          [635.5, 540.2265625],
          [635.5, 133.2265625],
          [448.5, 367.2265625],
        ],
      },
      {
        id: 3,
        description: 'B Lobby',
        type: 'projectile',
        details: {
          strength: 3,
          bounces: 1,
        },
        path: [
          [129.5, 453.2265625],
          [477.5, 361.2265625],
        ],
      },
      {
        id: 4,
        description: 'B Lobby',
        type: 'projectile',
        details: {
          strength: 3,
          bounces: 0,
        },
        path: [
          [158.5, 536.2265625],
          [247.5, 310.2265625],
        ],
      },
      {
        id: 5,
        description: 'B Tower',
        type: 'projectile',
        details: {
          strength: 3,
          bounces: 0,
        },
        path: [
          [239.5, 318.2265625],
          [226.5, 469.2265625],
        ],
      },
      {
        id: 6,
        description: 'B Site',
        type: 'projectile',
        details: {
          strength: 3,
          bounces: 2,
        },
        path: [
          [167.5, 208.2265625],
          [325.5, 484.2265625],
        ],
      },
      {
        id: 7,
        description: 'A Site',
        type: 'projectile',
        details: {
          strength: 3,
          bounces: 2,
        },
        path: [
          [541.5, 151.2265625],
          [543.5, 421.2265625],
          [640.5, 186.2265625],
          [640.5, 408.2265625],
        ],
      },
    ],
  },
  {
    agent: 'Viper',
    trajectories: [
      {
        id: 1,
        description: 'A Lobby',
        type: 'projectile',
        details: {
          spell: 'Poison Cloud',
        },
        path: [
          [634, 475.2265625],
          [508, 374.2265625],
        ],
      },
      {
        id: 2,
        description: 'A Lobby',
        type: 'wall',
        path: [
          [639, 371.2265625],
          [550, 65.2265625],
        ],
      },
      {
        id: 3,
        description: 'A Lobby',
        type: 'projectile',
        details: {
          spell: 'Poison Cloud',
          info: 'Jump Throw',
        },
        path: [
          [634, 475.2265625],
          [532, 222.2265625],
        ],
      },
      {
        id: 4,
        description: 'A Lobby',
        type: 'projectile',
        details: {
          spell: 'Snake Bite',
        },
        path: [
          [634, 475.2265625],
          [507, 360.2265625],
        ],
      },
      {
        id: 5,
        description: 'A Lobby',
        type: 'projectile',
        details: {
          spell: 'Snake Bite',
        },
        path: [
          [634, 475.2265625],
          [528, 230.2265625],
        ],
      },
      {
        id: 6,
        description: 'A Lobby',
        type: 'projectile',
        details: {
          spell: 'Snake Bite',
        },
        path: [
          [634, 475.2265625],
          [576, 129.2265625],
        ],
      },
      {
        id: 7,
        description: 'A Lobby',
        type: 'projectile',
        details: {
          spell: 'Snake Bite',
        },
        path: [
          [639, 406.2265625],
          [538, 280.2265625],
        ],
      },
      {
        id: 8,
        description: 'B Lobby',
        type: 'projectile',
        details: {
          spell: 'Poison Cloud',
          info: 'Jump Throw',
        },
        path: [
          [111, 482.2265625],
          [207, 283.2265625],
        ],
      },
      {
        id: 9,
        description: 'B Lobby',
        type: 'wall',
        path: [
          [165, 516.2265625],
          [51, 200.2265625],
        ],
      },
      {
        id: 10,
        description: 'B Main',
        type: 'projectile',
        details: {
          spell: 'Snake Bite',
        },
        path: [
          [45, 371.2265625],
          [65, 208.2265625],
          [88, 255.2265625],
        ],
      },
      {
        id: 11,
        description: 'B Main',
        type: 'projectile',
        details: {
          spell: 'Snake Bite',
        },
        path: [
          [68, 370.2265625],
          [55, 207.2265625],
          [24, 225.2265625],
        ],
      },
      {
        id: 12,
        description: 'Screens',
        type: 'wall',
        path: [
          [585, 134.2265625],
          [588, 433.2265625],
        ],
      },
      {
        id: 13,
        description: 'A Tower',
        type: 'projectile',
        details: {
          spell: 'Poison Cloud',
        },
        path: [
          [466, 228.2265625],
          [498, 378.2265625],
        ],
      },
      {
        id: 14,
        description: 'B Alley',
        type: 'projectile',
        details: {
          spell: 'Poison Cloud',
        },
        path: [
          [126, 191.2265625],
          [204, 285.2265625],
        ],
      },
      {
        id: 15,
        description: 'B Site',
        type: 'projectile',
        details: {
          spell: 'Snake Bite',
        },
        path: [
          [176, 233.2265625],
          [45, 173.2265625],
        ],
      },
    ],
  },
];
