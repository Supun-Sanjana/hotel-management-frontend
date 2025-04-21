const sampleBooking = [
  {
    bookingId: 1001,
    email: "john.doe@example.com",
    status: "confirmed",
    reason: "Vacation",
    start: new Date("2025-05-01T14:00:00Z"),
    end: new Date("2025-05-05T10:00:00Z"),
    notes: "Prefers a room with a sea view",
    timeStamp: new Date("2025-04-20T08:00:00Z"),
  },
  {
    bookingId: 1002,
    email: "jane.smith@example.com",
    status: "pending",
    reason: "Business trip",
    start: new Date("2025-06-10T16:00:00Z"),
    end: new Date("2025-06-12T09:00:00Z"),
    notes: "Late check-in requested",
    timeStamp: new Date("2025-04-21T09:30:00Z"),
  },
  {
    bookingId: 1003,
    email: "alex.wilson@example.com",
    status: "cancelled",
    reason: "Family emergency",
    start: new Date("2025-05-15T12:00:00Z"),
    end: new Date("2025-05-20T12:00:00Z"),
    notes: "",
    timeStamp: new Date("2025-04-19T13:45:00Z"),
  },
  {
    bookingId: 1004,
    email: "maria.fernandez@example.com",
    status: "confirmed",
    reason: "Honeymoon",
    start: new Date("2025-07-01T14:00:00Z"),
    end: new Date("2025-07-07T10:00:00Z"),
    notes: "Needs airport pickup",
    timeStamp: new Date("2025-04-18T11:00:00Z"),
  },
  {
    bookingId: 1005,
    email: "li.chen@example.com",
    status: "pending",
    reason: "Conference",
    start: new Date("2025-08-03T10:00:00Z"),
    end: new Date("2025-08-06T09:00:00Z"),
    notes: "",
    timeStamp: new Date("2025-04-21T10:15:00Z"),
  },

];

export default function Booking() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Booking</h1>
      <p>View and manage all bookings.</p>
      <br />

      <table class="min-w-full border border-gray-200 rounded-lg shadow-sm text-sm">
        <thead class="bg-gray-100 text-gray-700">
          <tr>
            <th class="px-4 py-2 text-left">Booking ID</th>
            <th class="px-4 py-2 text-left">Email</th>
            <th class="px-4 py-2 text-left">Status</th>
            <th class="px-4 py-2 text-left">Reason</th>
            <th class="px-4 py-2 text-left">Start</th>
            <th class="px-4 py-2 text-left">End</th>
            <th class="px-4 py-2 text-left">Note</th>
          </tr>
        </thead>
        <tbody>
          {/*array name. map */}
          {sampleBooking.map(
            /* create unique key inside of perent component (in this case tr)
            if there is no unique element in array use Index of array which is always unique
            (, index -> carry array index value) */
            (booking, index) => {
              return (
                <tr key={index}>
                  <td>{booking.bookingId}</td>
                  <td>{booking.email}</td>
                  <td>{booking.status}</td>
                  <td>{booking.bookingId}</td>
                  <td>{booking.bookingId}</td>
                  <td>{booking.bookingId}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}
