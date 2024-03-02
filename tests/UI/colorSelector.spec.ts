import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import ColorOptionsComponent from '../../src/components/UI/ColorSelector.vue';

describe('ColorSelector Component', () => {
    it('It should renders color', () => {
        const wrapper = mount(ColorOptionsComponent, {
            props: {
                id: 1,
                selectedColor: 'green',
                handler: vi.fn(),
            },
        });

        const colorOptions = wrapper.findAll('.color-option');
        expect(colorOptions.length).toBe(5);

        expect(colorOptions[1].classes()).toContain('green');
        expect(colorOptions[1].classes()).toContain('active');
    });

    it('It should calls handler with correct color', async () => {
        const mockHandler = vi.fn();
        const wrapper = mount(ColorOptionsComponent, {
            props: {
                id: 2,
                selectedColor: 'blue',
                handler: mockHandler,
            },
        });

        await wrapper.findAll('.color-option')[1].trigger('click');
        expect(mockHandler).toHaveBeenCalledWith('green');
    });
});
