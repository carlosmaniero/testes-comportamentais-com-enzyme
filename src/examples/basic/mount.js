import * as React from 'react';
import { mount } from 'enzyme';

class Hello extends React.PureComponent {
    render () {
        return <div>Hello, World!</div>
    }
}

const wrapper = mount(Hello);
console.log(wrapper.text()); // output: Hello, World!