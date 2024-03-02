import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import MyComponent from '../../src/components/UI/Checkbox.vue';

describe('Checkbox', () => {
    it('It should renders correctly', () => {
        const wrapper = mount(MyComponent, {
            props: {
                id: 1,
                linked: false,
                handler: () => {},
            },
        });
        expect(wrapper.exists()).toBeTruthy();
        const checkbox = wrapper.find('input[type="checkbox"]');
        expect(checkbox.exists()).toBeTruthy();
        expect(checkbox.attributes('id')).toBe('checkbox-1');
    });

    it('It should check and uncheck corrrectly', async () => {
        const mockHandler = vi.fn();
        const wrapper = mount(MyComponent, {
            props: {
                id: 2,
                linked: true,
                handler: mockHandler,
            },
        });

        const checkbox = wrapper.find('input[type="checkbox"]');
        const checkboxElement = checkbox.element as HTMLInputElement;
        expect(checkboxElement.checked).toBe(true);

        await checkbox.setValue(false);
        expect(checkboxElement.checked).toBe(false);
        expect(mockHandler).toHaveBeenCalledTimes(1);

        await checkbox.setValue(true);
        expect(checkboxElement.checked).toBe(true);
        expect(mockHandler).toHaveBeenCalledTimes(2);
    });
});
