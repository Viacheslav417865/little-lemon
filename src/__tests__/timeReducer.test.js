import { initializeTimes, updateTimes } from '../Main';
import { fetchAPI } from '../api';

jest.mock('../api', () => ({
  fetchAPI: jest.fn(),
}));

describe('initializeTimes', () => {
  it('should return available times from fetchAPI for today', () => {
    const mockTimes = ['17:00', '18:00', '19:00'];
    fetchAPI.mockReturnValue(mockTimes);

    const result = initializeTimes();
    expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
    expect(result).toEqual(mockTimes);
  });
});

describe('updateTimes', () => {
  it('should update times based on selected date', () => {
    const mockDate = '2025-05-20';
    const mockTimes = ['17:00', '18:30', '20:00'];
    fetchAPI.mockReturnValue(mockTimes);

    const action = { type: 'UPDATE_DATE', date: mockDate };
    const result = updateTimes([], action);

    expect(fetchAPI).toHaveBeenCalledWith(new Date(mockDate));
    expect(result).toEqual(mockTimes);
  });

  it('should return current state for unknown action types', () => {
    const state = ['17:00', '18:00'];
    const action = { type: 'UNKNOWN' };
    const result = updateTimes(state, action);

    expect(result).toEqual(state);
  });
});
