import React from 'react';

import {Heading as SpectacleHeading} from 'spectacle';

export class Heading extends React.PureComponent {
    render() {
        return <SpectacleHeading textSize="4rem" margin={50} {...this.props} />;
    }
}