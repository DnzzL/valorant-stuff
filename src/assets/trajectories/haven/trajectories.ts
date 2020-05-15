import { AgentTrajectory } from '../../../shared/interfaces';

export const havenTrajectories: AgentTrajectory[] = [
  {
    agent: 'Sova',
    trajectories: [
      {
        id: 1,
        description: 'B Site',
        type: 'projectile',
        side: 'defense',
        details: {
          strength: 'full',
          bounces: 2,
          description:
            'find the sun and line it up with the middle of the wood wall, look at the roof and find the third window from the left, aim up in the middle.',
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
        side: 'defense',
        details: {
          strength: 'full',
          bounces: 2,
          description:
            'line up yourself with the last window on the right of the roof, aim in the middle of the window and then the wooden bea above.',
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
        side: 'offense',
        details: {
          strength: 2,
          bounces: 0,
          description:
            'stand up on top of the yellow thing, turn around and aim at the faded orange cloth inside the gap where you can see the sky.',
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
        side: 'offense',
        details: {
          strength: 'full',
          bounces: 1,
          description: 'stand against the window near the garage, ',
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
        side: 'defense',
        details: {
          strength: 2,
          bounces: 0,
          description: 'sat on the edge of the window in Heaven',
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
        side: 'offense',
        details: {
          strength: 3,
          bounces: 2,
          description: 'sat on the sleeve',
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
        side: 'defense',
        details: {
          strength: 3,
          bounces: 0,
          description:
            'stand on these boxes, aim under a little bit below at the corner of the groove.',
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
        side: 'defense',
        details: {
          strength: 2,
          bounces: 0,
          description:
            'stand on this orange line, and line the e of the charge up to the electrical unit of the pole.',
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
        side: 'defense',
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
        side: 'defense',
        details: {
          strength: 3,
          bounces: 0,
          description: 'stand next to the tiny box on the top of the plateau.',
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
        side: 'offense',
        details: {
          strength: 3,
          bounces: 0,
          description:
            'stand on the third rock outside of A long and aim towards the third notch of the wall and aim slightly down from it',
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
        side: 'offense',
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
        side: 'offense',

        path: [
          [483.5, 477.2265625],
          [586.5, 221.2265625],
        ],
      },
      {
        id: 3,
        description: 'C Lobby',
        type: 'projectile',
        side: 'offense',

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
        side: 'offense',

        path: [
          [148, 537.2265625],
          [95, 211.2265625],
        ],
      },
      {
        id: 5,
        description: 'C Lobby',
        type: 'projectile',
        side: 'offense',

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
        side: 'offense',

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
        side: 'offense',

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
        side: 'offense',

        path: [
          [300, 466.2265625],
          [94, 225.2265625],
        ],
      },
      {
        id: 9,
        description: 'B Site',
        type: 'wall',
        side: 'defense',
        path: [
          [414, 274.2265625],
          [672, 274.2265625],
        ],
      },
      {
        id: 10,
        description: 'C Link',
        type: 'wall',
        side: 'defense',

        path: [
          [288, 230.2265625],
          [66, 356.2265625],
        ],
      },
      {
        id: 11,
        description: 'C Link',
        type: 'projectile',
        side: 'defense',

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
        side: 'defense',

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
        side: 'defense',

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
        side: 'defense',
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
  {
    agent: 'Cypher',
    trajectories: [
      {
        id: 1,
        description: 'A Long',
        type: 'projectile',
        side: 'defense',
        details: {
          info: 'Jump throw from the top of the box',
          visibility: 'Back of A site',
        },
        path: [
          [483.04681396484375, 242.74522399902344],
          [524.2212524414062, 309.02606201171875],
        ],
      },
      {
        id: 2,
        description: 'A tower',
        type: 'projectile',
        side: 'defense',
        details: {
          info: 'Go to the edge of A tower window',
          visibility: 'A Site',
        },
        path: [
          [619.6255493164062, 215.6303253173828],
          [668.8340454101562, 215.6303253173828],
        ],
      },
      {
        id: 3,
        description: 'A site',
        type: 'projectile',
        side: 'defense',
        details: {
          info: 'Jump throw from the edge of the box',
          visibility: 'A site',
        },
        path: [
          [583.4723510742188, 282.91546630859375],
          [554.3489379882812, 352.20904541015625],
        ],
      },
      {
        id: 4,
        description: 'A long',
        type: 'projectile',
        side: 'offense',
        details: {
          info: 'Jump throw from the concrete box',
          visibility: 'A tower',
        },
        path: [
          [524.2212524414062, 473.72393798828125],
          [518.1957397460938, 426.52392578125],
        ],
      },
      {
        id: 5,
        description: 'A Lobby',
        type: 'projectile',
        side: 'offense',
        details: { info: 'Jump throw the garden', visibility: 'A long' },
        path: [
          [475.01275634765625, 514.8983764648438],
          [460.95318603515625, 516.9069213867188],
        ],
      },
      {
        id: 6,
        description: 'B site',
        type: 'projectile',
        side: 'defense',
        details: {
          info: 'Jump throw from the edge of the box',
          visibility: 'B Site & A Link',
        },
        path: [
          [403.71063232421875, 326.098388671875],
          [313.3276672363281, 317.06011962890625],
        ],
      },
      {
        id: 7,
        description: 'Garage',
        type: 'projectile',
        side: 'defense',
        details: {
          info: 'Jump throw from the edge of the window',
          visibility: 'Garage, C window',
        },
        path: [
          [243.5, 299.2166748046875],
          [225.5, 335.2166748046875],
        ],
      },
      {
        id: 8,
        description: 'C site',
        type: 'projectile',
        side: 'defense',
        details: {
          info: 'Jump throw from the edge of the window',
          visibility: 'C site, C cubby & C connector',
        },
        path: [
          [60.255313873291016, 283.919677734375],
          [55.23404312133789, 350.2005615234375],
        ],
      },
      {
        id: 9,
        description: 'C site',
        type: 'projectile',
        side: 'defense',
        details: {
          info: 'Run from Plat, jump and throw',
          visibility: 'C site',
        },
        path: [
          [74.31489562988281, 286.93243408203125],
          [166.7063751220703, 328.10693359375],
        ],
      },
    ],
  },
];
