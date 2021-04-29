import Astra from './assets/agents/astra.png'
import Breach from './assets/agents/breach.png';
import Brimstone from './assets/agents/brimstone.png';
import Cypher from './assets/agents/cypher.png';
import Jett from './assets/agents/jett.png';
import Killjoy from './assets/agents/killjoy.png'
import Omen from './assets/agents/omen.png';
import Phoenix from './assets/agents/phoenix.png';
import Raze from './assets/agents/raze.png';
import Reyna from './assets/agents/reyna.png'
import Sage from './assets/agents/sage.png';
import Skye from './assets/agents/skye.png'
import Sova from './assets/agents/sova.png';
import Viper from './assets/agents/viper.png';
import Yoru from './assets/agents/yoru.png'

export type AgentName =
  | 'Astra'
  | 'Breach'
  | 'Brimstone'
  | 'Cypher'
  | 'Jett'
  | 'Killjoy'
  | 'Omen'
  | 'Phoenix'
  | 'Raze'
  | 'Reyna'
  | 'Sage'
  | 'Skye'
  | 'Sova'
  | 'Viper'
  | 'Yoru';

export type Agent = {
  name: AgentName;
  avatar: string;
};

export const agents: Agent[] = [
  { name: 'Astra', avatar: Astra },
  { name: 'Breach', avatar: Breach },
  { name: 'Brimstone', avatar: Brimstone },
  { name: 'Cypher', avatar: Cypher },
  { name: 'Jett', avatar: Jett },
  { name: 'Killjoy', avatar: Killjoy },
  { name: 'Omen', avatar: Omen },
  { name: 'Phoenix', avatar: Phoenix },
  { name: 'Raze', avatar: Raze },
  { name: 'Reyna', avatar: Reyna },
  { name: 'Sage', avatar: Sage },
  { name: 'Skye', avatar: Skye },
  { name: 'Sova', avatar: Sova },
  { name: 'Viper', avatar: Viper },
  { name: 'Yoru', avatar: Yoru },
];
