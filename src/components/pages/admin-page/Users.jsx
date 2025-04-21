const sampleUsers = [
  {
    email: "john.doe@example.com",
    password: "********",
    firstName: "John",
    lastName: "Doe",
    image: "https://www.w3schools.com/howto/img_avatar.png",
    type: "user",
    phoneNumber: "0711234567",
    disabled: false,
    emailVerified: true
  },
  {
    email: "admin@serenity.com",
    password: "********",
    firstName: "Serenity",
    lastName: "Admin",
    image: "https://www.w3schools.com/howto/img_avatar2.png",
    type: "admin",
    phoneNumber: "0717654321",
    disabled: false,
    emailVerified: true
  },
  {
    email: "guest@example.com",
    password: "********",
    firstName: "Guest",
    lastName: "User",
    image: "https://www.w3schools.com/howto/img_avatar.png",
    type: "user",
    phoneNumber: "",
    disabled: true,
    emailVerified: false
  }
];

export default function Users() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-1">Users</h1>
      <p className="text-gray-600 mb-4">View and manage all registered users.</p>

      <table className="min-w-full border border-gray-200 rounded-lg shadow text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-2 text-left">Avatar</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Phone</th>
            <th className="px-4 py-2 text-left">Type</th>
            <th className="px-4 py-2 text-left">Verified</th>
            <th className="px-4 py-2 text-left">Disabled</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {sampleUsers.map((user, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2">
                <img
                  src={user.image}
                  alt={user.firstName}
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="px-4 py-2">{user.firstName} {user.lastName}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.phoneNumber || "-"}</td>
              <td className="px-4 py-2 capitalize">{user.type}</td>
              <td className="px-4 py-2">
                <span className={user.emailVerified ? "text-green-600" : "text-red-600"}>
                  {user.emailVerified ? "Yes" : "No"}
                </span>
              </td>
              <td className="px-4 py-2">
                <span className={user.disabled ? "text-red-600" : "text-green-600"}>
                  {user.disabled ? "Yes" : "No"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
