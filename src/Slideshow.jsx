import React from 'react';
import mountExample from 'raw-loader!./.raw/examples/basic/mount';
import mainBg from '../assets/mainBg.png';
import createTheme from 'spectacle/lib/themes/default';
import { Heading } from './deck/Heading';

import {
    Appear,
    BlockQuote,
    Cite,
    CodePane,
    Code,
    Deck,
    Fill,
    Fit,
    Image,
    Layout,
    ListItem,
    List,
    Quote,
    Slide,
    Text
  } from 'spectacle';

const textColor = '#333';


const theme = createTheme(
    {
        primary: '#eeeeee',
        secondary: textColor,
        tertiary: textColor,
        quarternary: textColor
    },
    {
        primary: 'Open Sans',
        secondary: 'Open Sans',
    }
);

export default class Slideshow extends React.Component {
  render() {
    return (
        <Deck theme={theme}>
            <Slide bgImage="https://dynamic.thoughtworks.com/homepage/background_image-12dd6edacbc98fc9912d790ae6762e5f.png">
                <Heading textColor="white">TECH RADAR</Heading>
                <Text textColor="white">Testes Comportamentais Com Enzyme!</Text>
            </Slide>
            <Slide>
                <Heading textSize="4rem" margin={50}>O que é o Enzyme?</Heading>
                <Text bgColor="rgba(0,0,0,.3)" textColor="white" padding={20}>
                    Enzyme é um utilitário que facilita muito a manipulação e asserssão de componentes React.
                </Text>
            </Slide>
            <Slide>
                <CodePane textSize="2rem" lang="javascript" theme="light" source={mountExample}></CodePane>
            </Slide>
        </Deck>
      );
  }
}