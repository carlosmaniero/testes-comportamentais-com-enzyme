import React from 'react';
import mainBg from '../assets/mainBg.png';
import createTheme from 'spectacle/lib/themes/default';
import CodeSlide from 'spectacle-code-slide';
import { Heading } from './deck/Heading';
import { Ola as OlaMount } from './examples/mount/Ola';
import { Ola as OlaFind } from './examples/find/Ola';
import { OlaPessoas as OlaPessoasShallow } from './examples/shallow/OlaPessoas';

import mountTestExample from 'raw-loader!./.raw/examples/mount/Ola.test.js';
import mountExample from 'raw-loader!./.raw/examples/mount/Ola.js';
import findTestExample from 'raw-loader!./.raw/examples/find/Ola.test.js';
import shallowTestExample from 'raw-loader!./.raw/examples/shallow/OlaPessoas.test.jsx';
import shallowExample from 'raw-loader!./.raw/examples/shallow/OlaPessoas.jsx';
import specieListTest from 'raw-loader!./.raw/examples/pokemon-adoption/species/__tests__/SpecieList.spec.jsx';
import specieListIntegrationTest from 'raw-loader!./.raw/examples/pokemon-adoption/species/__tests__/integration/SpecieList.spec.jsx';

import App from './examples/pokemon-adoption/App';
import { configureStore } from './examples/pokemon-adoption/store';
import { actions } from './examples/pokemon-adoption/species/actions';
import { Provider } from 'react-redux';

const store = configureStore();

import {
    Appear,
    BlockQuote,
    Cite,
    CodePane,
    Code,
    Deck,
    S,
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
        <Deck theme={theme} progress="bar">
            <Slide bgImage="https://dynamic.thoughtworks.com/homepage/background_image-12dd6edacbc98fc9912d790ae6762e5f.png">
                <Heading textColor="white">TECH RADAR</Heading>
                <Text textColor="white">Testes Comportamentais Com Enzyme!</Text>
            </Slide>
            <Slide>
                <Heading textSize="4rem" margin={50}>Carlos Maniero</Heading>
                <Appear>
                    <Text padding={20}>
                        Twitter: @carlosmaniero
                    </Text>
                </Appear>
                <Appear>
                    <Text padding={20}>
                        github: /carlosmaniero
                    </Text>
                </Appear>
                <Appear>
                    <Text padding={20}>
                        Linkedin: /carlosmaniero
                    </Text>
                </Appear>
            </Slide>
            <Slide>
                <Heading textSize="4rem" margin={50}>O que é o Enzyme?</Heading>
                <Text bgColor="rgba(0,0,0,.3)" textColor="white" padding={20}>
                    Enzyme é um utilitário que facilita muito a manipulação e asserção de componentes React.
                </Text>
            </Slide>
            <Slide>
                <Heading textSize="4rem" margin={50}>Primeiro teste</Heading>
                <Appear>
                    <Text padding={20}>
                        Conhecendo o <Code>mount()</Code>.
                    </Text>
                </Appear>
                <Appear>
                    <Text padding={20}>
                        Vamos dizer olá!
                    </Text>
                </Appear>
            </Slide>
            <CodeSlide
                lang="js"
                bgColor="black"
                code={mountTestExample}
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

                <Appear>
                    <Text>Afinal, a gente usa <Code>TDD</Code>, né?</Text>
                </Appear>
            </Slide>
            <CodeSlide
                lang="js"
                bgColor="black"
                code={mountExample}
                ranges={[{ loc: [0, 9] }]}
                />
            <Slide>
                <Heading textSize="4rem" margin={50}>Resultado:</Heading>
                <OlaMount nome="Mundo" />
                <Appear>
                    <Text>Sim! O código acima é o nosso component :)</Text>
                </Appear>
            </Slide>
            <Slide>
                <Heading textSize="4rem" margin={50}>Buscando por elementos</Heading>
                <Appear>
                    <Text padding={20}>
                        Vamos dizer olá em <Code bold={true}>negrito</Code>!
                    </Text>
                </Appear>
            </Slide>
            <CodeSlide
                lang="js"
                bgColor="black"
                code={findTestExample}
                ranges={[
                    { loc: [6, 12] },
                    { loc: [9, 11] },
                    { loc: [16, 18] },
                    { loc: [9, 11] }
                ]} />
            <Slide>
                <Heading textSize="4rem" margin={50}>Resultado:</Heading>
                <OlaFind nome="Mundo" />
            </Slide>
            <Slide>
                <Heading textSize="4rem" margin={50}>Renderizando parcialmente componentes</Heading>
                <Appear>
                    <Text padding={20}>
                        <Code>shallow()</Code>.
                    </Text>
                </Appear>
                <Appear>
                    <Text padding={20}>
                        Vamos dizer olá para várias pessoas!
                    </Text>
                </Appear>
            </Slide>
            <CodeSlide
                lang="js"
                bgColor="black"
                code={shallowTestExample}
                ranges={[
                    { loc: [0, 26] },
                    { loc: [1, 4] },
                    { loc: [5, 8] },
                    { loc: [9, 25] },
                    { loc: [10, 13] },
                    { loc: [14, 15] },
                    { loc: [2, 3] },
                    { loc: [16, 18] },
                    { loc: [19, 24] },
                    { loc: [14, 15] },
                    { loc: [19, 24] },
                ]} />
            <Slide>
                <Heading textSize="4rem" margin={50}>Implementação:</Heading>
            </Slide>
            <CodeSlide
                lang="js"
                bgColor="black"
                code={shallowExample}
                ranges={[
                    { loc: [3, 11] },
                ]} />
            <Slide>
                <Heading textSize="4rem" margin={50}>Resultado:</Heading>
                <OlaPessoasShallow nomes={['Ada', 'Grace']} />
            </Slide>
            <Slide>
                <Heading textSize="4rem" margin={50}>Navegando com <Code>shallow</Code>:</Heading>
            </Slide>
            <CodeSlide
                lang="js"
                bgColor="black"
                code={shallowTestExample}
                ranges={[
                    { loc: [26, 37] },
                    { loc: [33, 36] },
                ]} />
            <Slide>
                <Heading textSize="4rem" margin={50}>Onde estão os testes de comportamento?</Heading>
                <Appear>
                    <Text padding={20}>
                        Adotando pokemons com <Code>pokeapi</Code>
                    </Text>
                </Appear>
            </Slide>
            <Slide>
                <Provider store={store}><App /></Provider>
            </Slide>
            <Slide>
                <Heading margin={50}>React + Redux + Enzyme</Heading>
                <Appear>
                    <Text textSize="8rem" textColor="red">♥</Text>
                </Appear>
            </Slide>
            <CodeSlide
                lang="js"
                bgColor="black"
                code={specieListTest}
                ranges={[
                    { loc: [8, 11] },
                    { loc: [12, 17] },
                    { loc: [18, 33] },
                    { loc: [19, 20] },
                    { loc: [20, 33] },
                    { loc: [34, 39] },
                    { loc: [44, 61] },
                    { loc: [45, 49] },
                    { loc: [50, 60] },
                    { loc: [51, 52] },
                    { loc: [53, 59] },
                    { loc: [21, 33] },
                ]} />
            <Slide>
                <Heading margin={50}>Testes de integração entre componentes</Heading>
            </Slide>
            <CodeSlide
                lang="js"
                bgColor="black"
                code={specieListIntegrationTest}
                ranges={[
                    { loc: [8, 22] },
                    { loc: [12, 16] },
                    { loc: [23, 38] },
                    { loc: [38, 45] },
                    { loc: [47, 52] },
                ]} />
            <Slide>
                <Heading textSize="4rem" margin={50}>Vantagens de usar esse modelo:</Heading>
                <Appear>
                    <Text padding={20}>
                        Liberdade de refatorar sem ter que mudar nenhum ou quase nenhum teste.
                    </Text>
                </Appear>
                <Appear>
                    <Text padding={20}>
                        <Code>stubs / mocks</Code> somente onde realmente necessáŕio (ex: request).
                    </Text>
                </Appear>
                <Appear>
                    <Text padding={20}>
                        Testes de <Code>Reducers</Code> são quase sempre testes de <Code>Setters/Getters</Code>.
                    </Text>
                </Appear>
            </Slide>
            <Slide>
                <Heading textSize="4rem" margin={50}>Desvantagens:</Heading>
                <Appear>
                    <Text padding={20}>
                        As vezes para fazer um teste passar é necessário muito código.
                    </Text>
                </Appear>
                <Appear>
                    <Text padding={20}>
                        Nem sempre quando um teste falha é tão óbvio qual foi o problema.
                    </Text>
                </Appear>
            </Slide>
            <Slide>
                <Heading textSize="4rem" margin={50}>Experimente!</Heading>
            </Slide>
            <Slide>
                <Heading textSize="8rem" margin={50}>Obrigado :)</Heading>
                <Text padding={20}>
                    Twitter: @carlosmaniero
                </Text>
                <Text padding={20}>
                    github: /carlosmaniero
                </Text>
                <Text padding={20}>
                    Linkedin: /carlosmaniero
                </Text>
            </Slide>
        </Deck>
      );
  }
}