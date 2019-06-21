import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import sinon from 'sinon'
import SinglePuppy from '../components/SinglePuppy'
import { puppy } from './testData'

describe('SinglePuppy Component', () => {
  let listAll
  let wrapper

  beforeEach('set up wrapper', () => {
    listAll = sinon.spy()
    wrapper = shallow(<SinglePuppy puppy={puppy} listAll={listAll} />)
  })

  it('displays the puppy\'s name, age and photo', () => {
    const img = wrapper.find('img')
    expect(img.html()).to.include(puppy.image)
    const text = wrapper.text()
    expect(text).to.include(puppy.name)
    expect(text).to.include(puppy.age)
  })

  it('invokes `listAll` when `List All Puppies` button is cliked', () => {
    wrapper.find('button').simulate('click')

    expect(listAll.called).to.be.true
  })
})
