import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/index'
import { h } from 'vue'

import AccountLayout from '../AccountLayout'

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})


const $store = {
    dispatch: jest.fn()
}

const wrapper = mount(AccountLayout, {
    global: {
        plugins: [router],
        mocks: {
            $store
        }
    },
    props: {
        title: 'Test'
    },
    slots: {
        form: h('h1', {}, 'Named Slot'),
    }
})

describe('AccountLayout tests:', () => {
    test('props', async () => {
        expect(wrapper.text()).toMatch('Test')
    })

    test('slot', async () => {
        expect(wrapper.html()).toMatch('<h1>Named Slot</h1>')
    })
})