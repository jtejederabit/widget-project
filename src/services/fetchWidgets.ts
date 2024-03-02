import type { Widget } from '@/types/widget';
export const fetchWidgets = async () => {
    try {
        const response = await fetch('https://api.mocki.io/v2/016d11e8/product-widgets');
        if (!response.ok) {
            throw new Error('Failed to fetch widgets');
        }
        return await response.json() as Array<Widget>;
    } catch (error) {
        console.error("Error fetching widgets:", error);
    }
}
