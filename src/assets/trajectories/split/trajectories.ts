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
];
