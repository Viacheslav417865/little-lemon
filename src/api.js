// src/api.js

export function fetchAPI(date) {

  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
  ];
}

export function submitAPI(formData) {
  console.log('Submitting booking data:', formData);
  return true;
}
