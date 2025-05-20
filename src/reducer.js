
const fetchAPI = (date) => {
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
  ];
};

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_DATE') {
    const newDate = new Date(action.date);
    return fetchAPI(newDate);
  }
  return state;
};
