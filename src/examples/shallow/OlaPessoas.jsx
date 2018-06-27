import * as React from 'react';
import { Ola } from '../find/Ola';

export class OlaPessoas extends React.PureComponent {
    render() {
        return <div>
            {this.props.nomes.map(nome => 
                <Ola key={nome} nome={nome} />)}
        </div>;
    }
}