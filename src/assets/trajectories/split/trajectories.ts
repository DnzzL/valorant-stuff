import { AgentTrajectory } from '../../../shared/interfaces';

export const splitTrajectories: AgentTrajectory[] = [
  {
    agent: 'Sova',
    trajectories: [
      {
        id: 1,
        description: 'A Ramp',
        type: 'projectile',
        side: 'defense',
        details: {
          strength: 'full',
          bounces: 1,
          description:
            'go over to the A ramp and look through the metal bars on your right',
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
        side: 'offense',
        details: {
          strength: 'full',
          bounces: 1,
          description:
            'go over to the A site and stand next to this grass place and aim towards the top right of the blue sign.',
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
        side: 'offense',
        details: {
          strength: 'full',
          bounces: 1,
          description:
            'on the trash pile, look for the orange box sticking out and stand above the corner of it then put your crosshair on the white line directly on the side of the satellite.',
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
        side: 'offense',
        details: {
          strength: 'full',
          bounces: 0,
          description:
            'on the trash pile, go into the corner and look up, move to the left until your crosshair lines up with the roof then turn around and put your crosshair on the top right corner of the discolored rectangle. Don"t move the move and move back towards the route that connects into the middle and line the bow with the roof above you.',
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
        side: 'defense',
        details: {
          strength: 'full',
          bounces: 0,
          description:
            'sat on the top of the box on the top right edge coming from Defender spawn, found the brown smudge than follow it up just below the first wire.',
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
        side: 'defense',
        details: {
          strength: 'full',
          bounces: 2,
          description:
            'go to the back of the site, find the crack in the pavement near the newspaper, find the pinkish corner and aim just below where it would be.',
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
        side: 'defense',
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
        side: 'offense',
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
        side: 'offense',
        type: 'wall',
        path: [
          [639, 371.2265625],
          [550, 65.2265625],
        ],
      },
      {
        id: 3,
        description: 'A Lobby',
        side: 'offense',
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
        side: 'offense',
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
        side: 'offense',
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
        side: 'offense',
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
        side: 'offense',
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
        side: 'offense',
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
        side: 'offense',
        type: 'wall',
        path: [
          [165, 516.2265625],
          [51, 200.2265625],
        ],
      },
      {
        id: 10,
        description: 'B Main',
        side: 'offense',
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
        side: 'offense',
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
        side: 'defense',
        type: 'wall',
        path: [
          [585, 134.2265625],
          [588, 433.2265625],
        ],
      },
      {
        id: 13,
        description: 'A Tower',
        side: 'defense',
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
        side: 'defense',
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
        side: 'defense',
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
