import React from 'react';
import mountExample from 'raw-loader!./.raw/examples/basic/mount';

import {
    Appear,
    BlockQuote,
    Cite,
    CodePane,
    Code,
    Deck,
    Fill,
    Fit,
    Heading,
    Image,
    Layout,
    ListItem,
    List,
    Quote,
    Slide,
    Text
  } from 'spectacle';

export default class Slideshow extends React.Component {
  render() {
    return (
        <Deck>
            <Slide>
                <Heading>Tech Radar</Heading>
                <Text>Testes Comportamentais Com Enzyme!</Text>
            </Slide>
            <Slide>
                <Fill><Heading>O que é o Enzyme?</Heading></Fill>
                <Text>Enzyme é um utilitário que facilita muito a manipulação e asserssão de componentes reacts.</Text>
            </Slide>
            <Slide>
                <Fit><CodePane lang="javascript" theme="light" source={mountExample}></CodePane></Fit>
            </Slide>
        </Deck>
      );
  }
}