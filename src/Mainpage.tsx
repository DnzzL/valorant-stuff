import styled from '@emotion/styled';
import { Card, Layout, List, Menu, message, Modal, Switch } from 'antd';
import * as d3 from 'd3';
import React, { useEffect, useRef, useState } from 'react';
import { Agent, agents } from './Agents';
import { ReactComponent as BindSvg } from './assets/maps/bind.svg';
import { ReactComponent as HavenSvg } from './assets/maps/haven.svg';
import { ReactComponent as SplitSvg } from './assets/maps/split.svg';
import { ReactComponent as AscentSvg } from './assets/maps/ascent.svg';
import { ReactComponent as IceboxSvg } from './assets/maps/icebox.svg';
import { bindTrajectories } from './assets/trajectories/bind/trajectories';
import { havenTrajectories } from './assets/trajectories/haven/trajectories';
import { splitTrajectories } from './assets/trajectories/split/trajectories';
import { ascentTrajectories } from './assets/trajectories/ascent/trajectories';
import { iceboxTrajectories } from './assets/trajectories/icebox/trajectories';
import { AgentTrajectory, Trajectory } from './shared/interfaces';
import { addTrajectory, resetMap, resetSide } from './shared/svgUtils';
import { StuffDetailsComponent } from './StuffDetails';

const { Meta } = Card;

const { Content, Sider, Footer } = Layout;

export const MainPage = () => {
  const [selectedMap, setSelectedMap] = useState<string>('Bind');
  const [selectedAgent, setSelectedAgent] = useState<string>('Sova');
  const [isOffense, setOffense] = useState<boolean>(true);

  const bindRef = useRef(null);
  const havenRef = useRef(null);
  const splitRef = useRef(null);
  const ascentRef = useRef(null);
  const iceboxRef = useRef(null);
  const refs = new Map([
    ['Bind', bindRef],
    ['Haven', havenRef],
    ['Split', splitRef],
    ['Ascent', ascentRef],
    ['Icebox', iceboxRef]
  ]);

  const trajectories = new Map([
    ['Bind', bindTrajectories],
    ['Haven', havenTrajectories],
    ['Split', splitTrajectories],
    ['Ascent', ascentTrajectories],
    ['Icebox', iceboxTrajectories]
  ]);

  function onTrajectoryClicked(this: any, d: any, i: any) {
    const trajectoryId = +d3.select(this).attr('id');
    const trajectory = trajectories
      .get(selectedMap)!
      .find(
        (agentTrajectory: AgentTrajectory) =>
          agentTrajectory.agent === selectedAgent
      )!
      .trajectories.find(
        (trajectory: Trajectory) => trajectory.id === trajectoryId
      )!;
    Modal.info({
      content: (
        <StuffDetailsComponent
          map={selectedMap}
          selectedAgent={selectedAgent}
          trajectory={trajectory}
        />
      ),
      width: '100%',
    });
  }

  useEffect(() => {
    const mapRef = refs.get(selectedMap)!;
    const svg = d3.select(mapRef.current);
    svg.on('click', clicked);
  });

  useEffect(() => {
    const mapRef = refs.get(selectedMap)!;
    const svg = d3.select(mapRef.current);
    resetSide(svg, !isOffense);
  }, [isOffense, selectedMap]);

  useEffect(() => {
    const mapRef = refs.get(selectedMap)!;
    const svg = d3.select(mapRef.current);

    resetMap(svg, selectedAgent);

    const agentTrajectory = trajectories
      .get(selectedMap)!
      .find(
        (AgentTrajectory: AgentTrajectory) =>
          AgentTrajectory.agent === selectedAgent
      );

    agentTrajectory
      ? agentTrajectory.trajectories
          .filter((trajectory: Trajectory) =>
            isOffense
              ? trajectory.side === 'offense'
              : trajectory.side === 'defense'
          )
          .forEach((trajectory: Trajectory) =>
            addTrajectory(svg, trajectory, selectedAgent, onTrajectoryClicked)
          )
      : message.warn(`no stuff for ${selectedAgent} on ${selectedMap} yet.`);
  });

  function clicked(this: any) {
    var clickpos = d3.mouse(this);
    console.log('hey', clickpos);
  }

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider breakpoint='lg' collapsedWidth='0'>
        <div className='logo' />
        <Menu
          theme='dark'
          mode='inline'
          selectedKeys={[selectedMap]}
          onSelect={({ item, key, keyPath, selectedKeys, domEvent }) =>
            setSelectedMap(key)
          }
        >
          <Menu.Item key='Bind'>Bind</Menu.Item>
          <Menu.Item key='Haven'>Haven</Menu.Item>
          <Menu.Item key='Split'>Split</Menu.Item>
          <Menu.Item key='Ascent'>Ascent</Menu.Item>
          <Menu.Item key='Icebox'>Icebox</Menu.Item>
        </Menu>
      </Sider>
      <StyledContent>
        <List
          size='small'
          grid={{
            gutter: 16,
            xs: 3,
            md: 6,
            xl: 10,
          }}
          dataSource={agents.filter((agent: Agent) =>
            trajectories
              .get(selectedMap)!
              .map((agentTrajectory: AgentTrajectory) => agentTrajectory.agent)
              .includes(agent.name)
          )}
          renderItem={(item) => (
            <List.Item>
              <StyledCard
                hoverable
                className={`clickable ${
                  selectedAgent === item.name ? '-selected' : ''
                }`}
                cover={<img alt='example' src={item.avatar} />}
                onClick={() => setSelectedAgent(item.name)}
              >
                <Meta description={item.name} />
              </StyledCard>
            </List.Item>
          )}
        />
        <StyledSwitch
          checkedChildren='Offense'
          unCheckedChildren='Defense'
          defaultChecked
          onChange={() => setOffense(!isOffense)}
        />
        {selectedMap === 'Bind' ? (
          <StyledMap>
            <BindSvg ref={bindRef}></BindSvg>
          </StyledMap>
        ) : selectedMap === 'Haven' ? (
          <StyledMap>
            <HavenSvg ref={havenRef}></HavenSvg>
          </StyledMap>
        ) : selectedMap === 'Split' ? (
          <StyledMap>
            <SplitSvg ref={splitRef}></SplitSvg>
          </StyledMap>
        ) : selectedMap === 'Icebox' ? (
          <StyledMap>
            <IceboxSvg ref={iceboxRef}></IceboxSvg>
          </StyledMap>
        ) :  <StyledMap>
        <AscentSvg ref={ascentRef}></AscentSvg>
      </StyledMap>}
        <Footer style={{ textAlign: 'center' }}>
          <div>
            Created by
            <a href='https://thomas.legrand.sh'> Thomas Legrand </a>
            {new Date().getFullYear()}
          </div>
          <div>
            Credits: <a href='https://www.proguides.com'>ProGuides Valorant</a>,
            <a href='https://www.youtube.com/channel/UCWpzQrZm1zKTX8w7fkgZwLQ'>
              301 Entertainment
            </a>
            ,
            <a href='https://www.youtube.com/channel/UCfmXDMVBR0hu9bdUiJRMOgQ'>
              FeyRazzle
            </a>
            ,<a href='https://www.youtube.com/user/Fenhri'> Peak</a>
          </div>
          <div>
            <a href='https://github.com/DnzzL/valorant-stuff/blob/master/README.md'>
              How to contribute
            </a>
          </div>
        </Footer>
      </StyledContent>
    </Layout>
  );
};

const StyledContent = styled(Content)`
  padding: 10px;
`;

const StyledCard = styled(Card)`
  width: 100px;
  cursor: pointer;

  &.-selected {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
const StyledSwitch = styled(Switch)`
  margin: 0px 1em;
`;

const StyledMap = styled.div`
  width: 100vh:
  margin-top: 2em;
  display: flex;
  justify-content: center;
`;
