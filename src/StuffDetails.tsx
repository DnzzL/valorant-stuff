import { Carousel, Descriptions, Layout } from 'antd';
import React from 'react';
import { Trajectory } from './shared/interfaces';

const { Content } = Layout;

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
  const IMG = (
    map: string,
    selectedAgent: string,
    id: number,
    position: boolean = false
  ) => {
    return position
      ? require(`./assets/trajectories/${map.toLowerCase()}/${selectedAgent.toLowerCase()}/${id}_start.png`)
      : require(`./assets/trajectories/${map.toLowerCase()}/${selectedAgent.toLowerCase()}/${id}.png`);
  };

  const getImages = () => {
    const throwImage = IMG(map, selectedAgent, trajectory.id);
    try {
      const positionImage = IMG(map, selectedAgent, trajectory.id, true);
      return (
        <Carousel>
          <img alt={positionImage} src={throwImage} />
          <img alt={selectedAgent} src={throwImage} />
        </Carousel>
      );
    } catch {
      return (
        <Carousel>
          <img alt={selectedAgent} src={throwImage} />
        </Carousel>
      );
    }
  };

  return (
    <Layout>
      <Content>
        {getImages()}
        <Descriptions bordered>
          {trajectory.details &&
            Object.entries(trajectory.details).map(([key, value]) => (
              <Descriptions.Item label={key}>
                {value as String}
              </Descriptions.Item>
            ))}
        </Descriptions>
      </Content>
    </Layout>
  );
};
