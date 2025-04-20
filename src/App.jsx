import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import HomePage from "./components/pages/client-page/home-page.jsx";
import AdminLayout from "./components/layout/AdminLayout.jsx";
import AdminDashboard from "./components/pages/admin-page/AdminDashboard.jsx";
import Rooms from "./components/pages/admin-page/Rooms.jsx";
import Booking from "./components/pages/admin-page/Booking.jsx";
import Category from "./components/pages/admin-page/Category.jsx";
import Users from "./components/pages/admin-page/Users.jsx";
import Feedbacks from "./components/pages/admin-page/Feedbacks.jsx";
import Gallery from "./components/pages/admin-page/gallery.jsx";
import NotFound from "./components/pages/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Admin Layout with Nested Pages */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="bookings" element={<Booking />} />
          <Route path="category" element={<Category />} />
          <Route path="users" element={<Users />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="feedback" element={<Feedbacks />} />
        </Route>

        {/* 404 Page */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
