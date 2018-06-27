import * as React from 'react';

export class Ola extends React.PureComponent {
    render() {
        return <div>
            Olá, {this.props.nome}!
        </div>;
    }
}