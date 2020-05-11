import { Card, Layout } from 'antd';
import React from 'react';
import { Trajectory } from './shared/interfaces';

const { Content, Footer } = Layout;

const { Meta } = Card;

type Props = {
  map: string;
  selectedAgent: string;
  trajectory: Trajectory;
};

export const StuffDetailsComponent = ({
  map,
  selectedAgent,
  trajectory,
}: Props) => {
  const IMG = (map: string, selectedAgent: string, id: number) => {
    return require(`./assets/trajectories/${map.toLowerCase()}/${selectedAgent.toLowerCase()}/${id}.png`);
  };

  return (
    <Layout>
      <Content>
        <Card
          cover={
            <img
              alt={selectedAgent}
              src={IMG(map, selectedAgent, trajectory.id)}
            />
          }
        >
          <Meta
            title={trajectory.description}
            description={
              trajectory.details &&
              Object.entries(trajectory.details)
                .map(([key, value]) => `${key}: ${value}`)
                .join(', ')
            }
          />
        </Card>
      </Content>
    </Layout>
  );
};
