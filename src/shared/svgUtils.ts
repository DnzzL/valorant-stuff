import * as d3 from 'd3';
import { agents, Agent } from '../Agents';
import { Trajectory } from './interfaces';

export const addTrajectory = (
  svg: any,
  trajectory: Trajectory,
  selectedAgent: string,
  onTrajectoryClicked: Function
): void => {
  const start = trajectory.path[0];
  svg
    .append('circle')
    .attr('cx', start[0])
    .attr('cy', start[1])
    .attr('r', 4)
    .attr('fill', 'green')
    .attr('agent', selectedAgent)
    .attr('side', trajectory.side)
    .attr('id', trajectory.id)
    .on('click', onTrajectoryClicked);
  trajectory.type === 'projectile'
    ? svg
        .append('polyline')
        .attr('points', trajectory.path.join(' '))
        .attr('stroke-width', 3)
        .attr('stroke-dasharray', '4, 1')
        .attr('stroke', 'green')
        .attr('agent', selectedAgent)
        .attr('side', trajectory.side)
        .attr('id', trajectory.id)
        .on('click', onTrajectoryClicked)
        .on('mouseover', function (this: any, d: any, i: any) {
          d3.select(this).attr('stroke', 'red');
        })
        .on('mouseout', function (this: any, d: any, i: any) {
          d3.select(this).attr('stroke', 'green');
        })
    : svg
        .append('polyline')
        .attr('points', trajectory.path.join(' '))
        .attr('stroke-width', 3)
        .attr('stroke', 'green')
        .attr('agent', selectedAgent)
        .attr('side', trajectory.side)
        .attr('id', trajectory.id)
        .on('click', onTrajectoryClicked)
        .on('mouseover', function (this: any, d: any, i: any) {
          d3.select(this).attr('stroke', 'red');
        })
        .on('mouseout', function (this: any, d: any, i: any) {
          d3.select(this).attr('stroke', 'green');
        });
};

export const resetMap = (svg: any, selectedAgent: string) => {
  agents
    .filter((agent: Agent) => agent.name !== selectedAgent)
    .forEach((agent: Agent) => {
      svg.selectAll(`[agent=${agent.name}]`).remove();
    });
};

export const resetSide = (svg: any, isOffense: boolean) => {
  svg.selectAll(`[side=${isOffense ? 'offense' : 'defense'}]`).remove();
};
