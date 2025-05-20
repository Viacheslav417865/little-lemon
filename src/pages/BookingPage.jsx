
import React, { useReducer } from 'react';
import BookingForm from '../BookingForm';
import { initializeTimes, updateTimes } from '../reducer';
import { submitAPI } from '../api';
import { useNavigate } from 'react-router-dom';

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmed');
    } else {
      alert('Booking failed. Try again.');
    }
  };

  return (
    <div>
      <h1>Reserve a Table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </div>
  );
}
