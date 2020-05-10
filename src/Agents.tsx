import Breach from './assets/agents/breach.png';
import Brimstone from './assets/agents/brimstone.png';
import Cypher from './assets/agents/cypher.png';
import Jett from './assets/agents/jett.png';
import Omen from './assets/agents/omen.png';
import Phoenix from './assets/agents/phoenix.png';
import Raze from './assets/agents/raze.png';
import Sage from './assets/agents/sage.png';
import Sova from './assets/agents/sova.png';
import Viper from './assets/agents/viper.png';

export type AgentName =
  | 'Breach'
  | 'Brimstone'
  | 'Cypher'
  | 'Jett'
  | 'Omen'
  | 'Phoenix'
  | 'Raze'
  | 'Sage'
  | 'Sova'
  | 'Viper';

export type Agent = {
  name: AgentName;
  avatar: string;
};

export const agents: Agent[] = [
  { name: 'Breach', avatar: Breach },
  { name: 'Brimstone', avatar: Brimstone },
  { name: 'Cypher', avatar: Cypher },
  { name: 'Jett', avatar: Jett },
  { name: 'Omen', avatar: Omen },
  { name: 'Phoenix', avatar: Phoenix },
  { name: 'Raze', avatar: Raze },
  { name: 'Sage', avatar: Sage },
  { name: 'Sova', avatar: Sova },
  { name: 'Viper', avatar: Viper },
];
