# Valorant Stuff (Work in Progress)

The goal of this project is to provide a cheatsheet to throw accurate and efficient stuff in Valorant.

## How to contribute ?

Let say you want to contribute for the agent _Omen_ on the map _Bind_ .

- Fork the Github repository.
- Put a screenshot of the launching spot for each spot you want to add (Name it `1.png` , `2.png` ...) under the following repository:

```
src/
├── assets/
│   └── trajectories/
|       └── bind/
|           └── omen/

```

- Add the trajectories to the following file:

```
src/
├── assets/
│   └── trajectories/
|       └── bind/
|           ├── trajectories.ts

```

- Add the details of the trajectory to the corresponding array of trajectories. (details of interfaces in `src/shared/interfaces.ts`)

```
{
    agent: 'Omen',
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
    ],
}
```

**NB: you can obtain the coordinates for the path by clicking on the corresponsing map and opening the developer console (ctrl + shift + i)**

- Create a Pull request
- Add Credits to `src/Mainpage.tsx`

```
<a href='link'>Name</a>
```
