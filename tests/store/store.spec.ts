import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { useWidgetStore } from '../../src/stores/widget';

vi.mock("../../src/services/fetchWidgets", () => ({
    fetchWidgets: vi.fn(() => Promise.resolve([
        { id: 1, name: 'Widget 1', active: false, linked: false, selectedColor: 'blue' },
        { id: 2, name: 'Widget 2', active: false, linked: false, selectedColor: 'green' },
        { id: 3, name: 'Widget 3', active: false, linked: true, selectedColor: 'beige' }
    ]))
}));

describe('useWidgetStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('It should initializes widgets', async () => {
        const store = useWidgetStore();
        expect(store.widgets.length).toBe(0);

        await store.initWidgets();
        expect(store.widgets.length).toBeGreaterThan(0);
        expect(store.widgets.length).toBe(3);
        expect(store.widgets[0].name).toBe('Widget 1');
        expect(store.widgets[1].name).toBe('Widget 2');
        expect(store.widgets[2].name).toBe('Widget 3');
    });

    it('It should toggles widget link status', async () => {
        const store = useWidgetStore();
        await store.initWidgets();

        const initialLinkedStatus = store.widgets[0].linked;
        store.toggleLinkToProfile(1);
        expect(store.widgets[0].linked).not.toBe(initialLinkedStatus);
    });

    it('It should change widget color', async () => {
        const store = useWidgetStore();
        await store.initWidgets();

        store.changeWidgetColor(1, 'black');
        expect(store.widgets[0].selectedColor).toBe('black');
    });
});
