const sampleRooms = [
  {
    roomId: "RM101",
    category: "Deluxe",
    avaliable: true,
    maxGuests: 3,
    photos: ["https://via.placeholder.com/150x100?text=Room+101"],
    SpecialDescription: "Sea-facing with king-sized bed.",
    note: "Booked for 2 nights from April 23"
  },
  {
    roomId: "RM102",
    category: "Standard",
    avaliable: false,
    maxGuests: 2,
    photos: ["https://via.placeholder.com/150x100?text=Room+102"],
    SpecialDescription: "City view, queen bed, compact room.",
    note: "Currently undergoing maintenance"
  },
  {
    roomId: "RM103",
    category: "Family Suite",
    avaliable: true,
    maxGuests: 5,
    photos: ["https://via.placeholder.com/150x100?text=Room+103"],
    SpecialDescription: "2 bedrooms, perfect for families.",
    note: ""
  },
  {
    roomId: "RM104",
    category: "Executive",
    avaliable: true,
    maxGuests: 2,
    photos: ["https://via.placeholder.com/150x100?text=Room+104"],
    SpecialDescription: "Luxury room for business travelers.",
    note: "Includes breakfast and airport pickup"
  }
];

export default function Rooms() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-1">Rooms</h1>
      <p className="text-gray-600 mb-4">View and manage all hotel rooms.</p>

      <table className="min-w-full border border-gray-200 rounded-lg shadow text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-2 text-left">Room ID</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Available</th>
            <th className="px-4 py-2 text-left">Max Guests</th>
            <th className="px-4 py-2 text-left">Photo</th>
            <th className="px-4 py-2 text-left">Special Description</th>
            <th className="px-4 py-2 text-left">Note</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {sampleRooms.map((room, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2">{room.roomId}</td>
              <td className="px-4 py-2">{room.category}</td>
              <td className="px-4 py-2">
                <span className={room.avaliable ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                  {room.avaliable ? "Yes" : "No"}
                </span>
              </td>
              <td className="px-4 py-2">{room.maxGuests}</td>
              <td className="px-4 py-2">
                <img
                  src={room.photos[0]}
                  alt={room.roomId}
                  className="w-24 h-16 object-cover rounded"
                />
              </td>
              <td className="px-4 py-2">{room.SpecialDescription}</td>
              <td className="px-4 py-2">{room.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
