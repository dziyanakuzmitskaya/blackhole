import { h } from 'vue'
import { mount } from '@vue/test-utils'
import { router } from '@/components/__mocks__/router'

import AccountLayout from '@/components/layout/AccountLayout'

const wrapper = mount(AccountLayout, {
  global: {
    plugins: [router]
  },
  slots: {
    form: h('h1', {}, 'Named Slot')
  }
})

describe('AccountLayout component', () => {
  it('should displayed the html tag which was passed in slot', async () => {
    expect(wrapper.html()).toMatch('<h1>Named Slot</h1>')
  })
})
