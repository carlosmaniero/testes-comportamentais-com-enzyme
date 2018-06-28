import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.waitForPromises = () =>
    new Promise((resolve) => setImmediate(resolve));
global.ensureRender = (wrapper) =>
    waitForPromises().then(() => wrapper.update());