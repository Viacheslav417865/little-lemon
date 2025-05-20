import React, { useState } from 'react';

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  function handleDateChange(event) {
    const selectedDate = event.target.value;
    setFormData(prev => ({ ...prev, date: selectedDate }));

    dispatch({ type: 'UPDATE_DATE', date: selectedDate });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  const isFormValid = formData.date && formData.time && formData.guests >= 1 && formData.guests <= 10;

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.time) {
      setSubmissionStatus('Please select a time.');
      return;
    }

    const success = submitForm(formData);

    if (success) {
      setSubmissionStatus('✅ Booking submitted successfully!');
      setFormData({ date: '', time: '', guests: 1 });
    } else {
      setSubmissionStatus('❌ Failed to submit booking. Please try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleDateChange}
          required
        />
      </label>

      <label>
        Time:
        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option value="">-- Select time --</option>
          {availableTimes.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </label>

      <label>
        Number of guests:
        <input
          type="number"
          name="guests"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit" disabled={!isFormValid}>Book Now</button>

      {submissionStatus && (
        <p style={{ marginTop: '1em', color: submissionStatus.includes('✅') ? 'green' : 'red' }}>
          {submissionStatus}
        </p>
      )}
    </form>
  );
}
