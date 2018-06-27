import * as React from 'react';

export class Ola extends React.PureComponent {
    render() {
        return <div>
            Olá, <strong>{this.props.nome}</strong>!
        </div>;
    }
}