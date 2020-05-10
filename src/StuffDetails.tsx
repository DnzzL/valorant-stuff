import Icon from '@ant-design/icons/lib/components/Icon';
import styled from '@emotion/styled';
import { Card, Layout } from 'antd';
import React from 'react';
import { ReactComponent as BounceSvg } from './assets/details/bounce.svg';
import { ReactComponent as GaugeSvg } from './assets/details/gauge.svg';
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

  const BounceIcon = (props: any) => <Icon component={BounceSvg} {...props} />;
  const GaugeIcon = (props: any) => <Icon component={GaugeSvg} {...props} />;

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

const StyledDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledDetail = styled.div``;
