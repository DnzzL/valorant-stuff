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
  {
    agent: 'Cypher',
    trajectories: [
      {
        id: 1,
        description: 'B Tower',
        type: 'projectile',
        side: 'defense',
        details: {
          visibility: 'Mid mail & B ropes',
        },
        path: [
          [225.9574432373047, 342.16650390625],
          [279.1829833984375, 364.2601318359375],
        ],
      },
      {
        id: 2,
        description: 'B Site',
        type: 'projectile',
        side: 'defense',
        details: {
          info: 'Jump throw',
          visibility: 'B site & B Main',
        },
        path: [
          [166.7063751220703, 238.7281951904297],
          [56.23830032348633, 207.59629821777344],
        ],
      },
      {
        id: 3,
        description: 'B Main',
        type: 'projectile',
        side: 'offense',
        details: {
          info: 'Jump throw',
          visibility: 'B Main',
        },
        path: [
          [67.28511047363281, 326.098388671875],
          [36.15319061279297, 426.52392578125],
        ],
      },
      {
        id: 4,
        description: 'Top Mid',
        type: 'projectile',
        side: 'defense',
        details: {
          info: 'Jump throw',
          visibility: 'Mid mail, Top Mid & Bottom Mid',
        },
        path: [
          [286.2127685546875, 360.24310302734375],
          [353.49786376953125, 345.17926025390625],
        ],
      },
      {
        id: 5,
        description: 'A Tower',
        type: 'projectile',
        side: 'defense',
        details: {
          info: 'Jump throw on top of the boxes',
          visibility: 'A tower',
        },
        path: [
          [454.92767333984375, 226.67713928222656],
          [508.1531982421875, 191.52821350097656],
        ],
      },
      {
        id: 6,
        description: 'A Screens',
        type: 'projectile',
        side: 'defense',
        details: {
          info: 'Jump throw from the edge of A tower',
          visibility: 'Screens, A Rafters, A Main, path to Spawn',
        },
        path: [
          [542.2978515625, 205.58778381347656],
          [544.306396484375, 110.18351745605469],
        ],
      },
      {
        id: 7,
        description: 'A Screens',
        type: 'projectile',
        side: 'defense',
        details: {
          info: 'Jump from the edge of A tower and throw',
          visibility: 'A Rafters, A Main & Back A',
        },
        path: [
          [553.3446655273438, 206.59202575683594],
          [542.2978515625, 154.3707733154297],
        ],
      },
      {
        id: 8,
        description: 'A Screens',
        type: 'projectile',
        side: 'defense',
        details: {
          info: 'Jump throw',
          visibility: 'Screens & A Main',
        },
        path: [
          [585.4808349609375, 134.28565979003906],
          [561.3787231445312, 93.11119079589844],
        ],
      },
      {
        id: 9,
        description: 'A Site',
        type: 'projectile',
        side: 'defense',
        details: {
          visibility: 'A Site',
        },
        path: [
          [649.753173828125, 197.55372619628906],
          [675.8638305664062, 167.4260711669922],
        ],
      },
      {
        id: 10,
        description: 'A Lobby',
        type: 'projectile',
        side: 'offense',
        details: { info: 'Jump throw' },
        path: [
          [638.7063598632812, 472.71966552734375],
          [586.485107421875, 436.56646728515625],
        ],
      },
      {
        id: 11,
        description: 'A Lobby',
        type: 'projectile',
        side: 'offense',
        details: {
          info: 'Jump throw',
          visibility: 'ALobby, A Main & part of screens',
        },
        path: [
          [638.7063598632812, 472.71966552734375],
          [672.85107421875, 417.48565673828125],
        ],
      },
      {
        id: 12,
        description: 'A Lobby',
        type: 'projectile',
        side: 'offense',
        details: {
          info: 'Jump throw',
          visibility: 'A Lobby, A Ramp & A Tower',
        },
        path: [
          [638.7063598632812, 472.71966552734375],
          [672.85107421875, 417.48565673828125],
        ],
      },
    ],
  },
];
