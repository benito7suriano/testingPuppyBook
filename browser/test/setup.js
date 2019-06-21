import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import axios from 'axios'
import axiosMockAdapter from 'axios-mock-adapter'

Enzyme.configure({ adapter: new Adapter() })

import { puppies, puppy, newPuppy } from './testData'

const mock = new axiosMockAdapter(axios)

mock.onGet('/api/puppies').reply(200, puppies)
mock.onGet(`/api/puppies/${puppy.id}`).reply(200, puppy)
mock.onPost('/api/puppies').reply(201, newPuppy)
