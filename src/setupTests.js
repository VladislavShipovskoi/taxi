import '@testing-library/jest-dom';

export const mockMapOn = jest.fn();
export const mockMapRemove = jest.fn();
export const mockGetLayer = jest.fn();
export const mockFlyTo = jest.fn();

jest.mock('mapbox-gl', () => ({
    Map: function () {
        this.on = mockMapOn;
        this.remove = mockMapRemove;
        this.getLayer = mockGetLayer;
        this.flyTo = mockFlyTo;
    }
}));
