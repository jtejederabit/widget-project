import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import ToggleButton from '../../src/components/UI/Toggle.vue';

describe('ToggleButton', () => {
    it('It should check active state correctly', async () => {
        const wrapper = mount(ToggleButton, {
            props: {
                id: 1,
                active: false,
                handler: vi.fn(),
            },
        });

        expect(wrapper.classes()).not.toContain('active');

        await wrapper.setProps({ active: true });
        expect(wrapper.classes()).toContain('active');
    });

    it('It should calls the handler on click', async () => {
        const mockHandler = vi.fn();
        const wrapper = mount(ToggleButton, {
            props: {
                id: 2,
                active: false,
                handler: mockHandler,
            },
        });

        await wrapper.trigger('click');
        expect(mockHandler).toHaveBeenCalledTimes(1);
    });
});
