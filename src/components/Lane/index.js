import React from 'react';
import * as PropTypes from 'prop-types';
import Card from '../../components/Card';
import { Content, Header, Body, AddCardLink, EditableName } from './styled';

const Lane = ({ title }) => (
  <Content>
    <Header>
      <EditableName defaultValue={title} />
    </Header>
    <Body>
      <Card>Test</Card>
      <Card>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum ante in justo volutpat, non consequat orci rutrum. Quisque cursus lectus gravida congue sagittis. Nulla facilisi. Pellentesque et aliquet arcu. Donec viverra ligula sit amet urna ultricies, quis commodo arcu pellentesque. Vestibulum eleifend neque et posuere feugiat. Quisque nibh diam, maximus quis tincidunt in, pulvinar at odio. Donec non dictum massa. Quisque venenatis risus et arcu aliquet pretium. Ut dictum porta ante, vel maximus nunc vestibulum sit amet. In eleifend lacus erat, quis suscipit eros volutpat ut.</Card>
      <Card>ABC</Card>
      <Card>ABC</Card>
    </Body>
    <AddCardLink href="#">
      Add a card
    </AddCardLink>
  </Content>
);

Lane.propTypes = {
  title: PropTypes.string.isRequired,
};

Lane.defaultProps = {
  title: '',
};

export default Lane;