const sampleGallery = [
  {
    name: "Beach Sunset",
    description: "A stunning sunset view by the beach.",
    image: "https://via.placeholder.com/150x100?text=Beach+Sunset"
  },
  {
    name: "Mountain View",
    description: "Snow-capped mountains with a clear blue sky.",
    image: "https://via.placeholder.com/150x100?text=Mountain"
  },
  {
    name: "City Lights",
    description: "Aerial shot of a city skyline at night.",
    image: "https://via.placeholder.com/150x100?text=City+Lights"
  },
  {
    name: "Resort Pool",
    description: "Luxury resort pool area during the day.",
    image: "https://via.placeholder.com/150x100?text=Resort+Pool"
  },
  {
    name: "Forest Trail",
    description: "A calm nature trail through dense forest.",
    image: "https://via.placeholder.com/150x100?text=Forest+Trail"
  }
];

export default function Booking() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Galley</h1>
      <p>View and manage all gallery.</p>
      <br />

<table class="min-w-full border border-gray-200 rounded-lg shadow text-sm">
  <thead class="bg-gray-100 text-gray-700">
    <tr>
      <th class="px-4 py-2 text-left">Name</th>
      <th class="px-4 py-2 text-left">Description</th>
      <th class="px-4 py-2 text-left">Image</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-gray-200">

    {sampleGallery.map(
      (gallery, index)=>{
        return(
          <tr key={index}>
            <td>{gallery.name}</td>
            <td>{gallery.description}</td>
            <td>{gallery.image}</td>
          </tr>
        )
      }
    )}
    
    
   </tbody>
</table>
</div>
  )
}