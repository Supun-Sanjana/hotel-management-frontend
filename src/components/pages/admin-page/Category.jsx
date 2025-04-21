const sampleCategory = [
  {
    name: "Test",
    description: "Lorem ipsum dolor sit amet",
    image: "test.png",
  },
  {
    name: "Test",
    description: "Lorem ipsum dolor sit amet",
    image: "test.png",
  },
  {
    name: "Test",
    description: "Lorem ipsum dolor sit amet",
    image: "test.png",
  },
  {
    name: "Test",
    description: "Lorem ipsum dolor sit amet",
    image: "test.png",
  },
];

export default function Category() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Category</h1>
      <p>View and manage all category.</p>
      <br />

      <table class="min-w-full border border-gray-200 rounded-1g shadow-md text-sm">
        <thead class="bg-gray-100 text-gray-700">
          <tr>
            <th class="px-4 py-2 text-left">Name</th>
            <th class="px-4 py-2 text-left">Description</th>
            <th class="px-4 py-2 text-left">Image</th>
          </tr>
        </thead>
        <tbody>
          {sampleCategory.map((categories, index) => {
            return (
              <tr key={index}>
                <td>{categories.name}</td>
                <td>{categories.description}</td>
                <td>{categories.image}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
