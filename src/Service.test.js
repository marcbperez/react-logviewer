import Service from './Service';

fetch = jest.fn(() => new Promise(resolve => resolve()));

it('gets entries', () => {
  const service = new Service('', '');
  service.getEntries();
});
