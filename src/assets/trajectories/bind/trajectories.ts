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
  {
    agent: 'Cypher',
    trajectories: [
      {
        id: 1,
        description: 'B site',
        type: 'projectile',
        side: 'defense',
        details: {
          info: 'Run and throw',
          visibility: 'B Site, Elbow & Path from spawn',
        },
        path: [
          [162.68934631347656, 172.44737243652344],
          [234.99574279785156, 160.3962860107422],
        ],
      },
      {
        id: 2,
        description: 'B site',
        type: 'projectile',
        side: 'defense',
        details: {
          info: 'Jump throw from the top of the green boxes',
          visibility: 'B Site & B Long',
        },
        path: [
          [108.45956420898438, 186.50694274902344],
          [58.24680709838867, 231.6984100341797],
        ],
      },
      {
        id: 3,
        description: 'B site',
        type: 'projectile',
        side: 'defense',
        details: {
          info: 'Jump throw from the top of the green boxes',
          visibility: 'B  Site & Elbow',
        },
        path: [
          [108.45956420898438, 186.50694274902344],
          [149.634033203125, 234.71119689941406],
        ],
      },
      {
        id: 4,
        description: 'Hookah',
        type: 'projectile',
        side: 'defense',
        details: {
          info: 'Throw from the top of the boxes',
          visibility: 'Hookah',
        },
        path: [
          [159.6765899658203, 326.098388671875],
          [171.72764587402344, 331.11968994140625],
        ],
      },
      {
        id: 5,
        description: 'A site',
        type: 'projectile',
        side: 'defense',
        details: { info: 'Jump throw', visibility: 'A Site, Bath & A short' },
        path: [
          [478.0255432128906, 177.46864318847656],
          [479.02978515625, 136.29417419433594],
        ],
      },
      {
        id: 6,
        description: 'A tower',
        type: 'projectile',
        side: 'defense',
        details: { info: 'Jump from A tower and throw' },
        path: [
          [549.32763671875, 165.4175567626953],
          [589.4978637695312, 157.38352966308594],
        ],
      },
      {
        id: 7,
        description: 'A short',
        type: 'projectile',
        side: 'defense',
        details: { info: 'Jump throw', visibility: 'A Site, A short & Vent' },
        path: [
          [434.8425598144531, 284.9239501953125],
          [384.6297912597656, 320.0728759765625],
        ],
      },
      {
        id: 8,
        description: 'A short',
        type: 'projectile',
        side: 'defense',
        details: { info: 'Jump throw', visibility: 'A short, part of A site' },
        path: [
          [434.8425598144531, 284.9239501953125],
          [384.6297912597656, 320.0728759765625],
        ],
      },
    ],
  },
];
