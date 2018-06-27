import React from 'react';
import mainBg from '../assets/mainBg.png';
import createTheme from 'spectacle/lib/themes/default';
import { Heading } from './deck/Heading';

import olaTestExample from 'raw-loader!./.raw/examples/mount/Ola.test.js';
import olaExample from 'raw-loader!./.raw/examples/mount/Ola.js';

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

import CodeSlide from 'spectacle-code-slide';
import { Ola } from './examples/mount/Ola';

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
        <Deck theme={theme} progress="bar">
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
                <Heading textSize="4rem" margin={50}>Primeiro teste</Heading>
                <Text padding={20}>
                    Conhecendo o <Code>mount()</Code>.
                </Text>
            </Slide>
            <CodeSlide
                lang="js"
                bgColor="black"
                code={olaTestExample}
                ranges={[
                    { loc: [0, 13] },
                    { loc: [1, 3] },
                    { loc: [5, 13] },
                    { loc: [6, 12] },
                    { loc: [7, 9] },
                    { loc: [9, 11] }
                ]} />
            <Slide>
                <Heading textSize="4rem" margin={50}>Fazendo o teste passar</Heading>
            </Slide>
            <CodeSlide
                lang="js"
                bgColor="black"
                code={olaExample}
                ranges={[{ loc: [0, 7] }]}
                />
            <Slide>
                <Heading textSize="4rem" margin={50}>Resultado Final:</Heading>
                
                <Ola name="Mundo" />
                
                <Appear>
                    <Text>Sim! O código acima é o nosso component :)</Text>
                </Appear>
            </Slide>
        </Deck>
      );
  }
}