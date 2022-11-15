import React from "react";
import { format } from "date-fns";
const BookingModal = ({ booking, selectedDate, setBooking }) => {
  // console.log(booking)
  const { name, slots } = booking;
  const date = format(selectedDate, "PP");
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const name = form.name.value;
    const number = form.number.value;
    const slot = form.slot.value;
    const email = form.email.value;
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: name,
      slot,
      email,
      number,
    };
    setBooking(null);
    console.log(booking);
  };
  return (
    <form onSubmit={handleBooking}>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="py-4 grid grid-cols-1 gap-4">
            <input
              type="text"
              name="date"
              value={date}
              disabled
              className="input w-full bg-slate-500"
            />
            <select className="select select-bordered w-full" name="slot">
              {slots?.map((slot, index) => (
                <option value={slot} key={index}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input w-full "
            />
            <input
              type="text"
              name="number"
              placeholder="Phone Number"
              className="input w-full "
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="input w-full "
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </p>
        </div>
      </div>
    </form>
  );
};

export default BookingModal;
