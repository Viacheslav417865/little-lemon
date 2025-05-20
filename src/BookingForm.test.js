import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders the BookingForm heading", () => {
  const mockTimes = ["17:00", "18:00", "19:00"];
  render(<BookingForm availableTimes={mockTimes} />);
  const heading = screen.getByText(/book now/i);
  expect(heading).toBeInTheDocument();
});
