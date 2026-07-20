import { describe, it, test, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import App from '../App.vue'

describe('App', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('mounts renders properly', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [createPinia()],
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  test('deberia alternar el modo oscuro al pulsar el boton', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [createPinia()],
      },
      attachTo: document.body,
    })

    await wrapper.find('#btn-theme-toggle').trigger('click')

    expect(document.documentElement.classList.contains('dark-mode')).toBe(true)
    expect(localStorage.getItem('kitly-theme')).toBe('dark')

    await wrapper.find('#btn-theme-toggle').trigger('click')

    expect(document.documentElement.classList.contains('dark-mode')).toBe(false)
    expect(localStorage.getItem('kitly-theme')).toBe('light')

    wrapper.unmount()
  })
})