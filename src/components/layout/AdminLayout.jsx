import { NavLink, Outlet } from "react-router-dom";
import {
  CiBookmark,
  CiViewList,
  CiHome,
  CiImageOn,
  CiUser,
  CiChat1,
} from "react-icons/ci";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-[#2B1B12] text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Serenity Admin</h2>

       


        <nav className="flex flex-col gap-4">
          <NavLink
            to="/admin/bookings"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive
                  ? "text-[#DDC7BB] font-semibold"
                  : "hover:text-[#DDC7BB] hover:font-bold"
              }`
            }
          >
            <CiBookmark size={20} />
            Bookings
          </NavLink>

          <NavLink
            to="/admin/category"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive
                  ? "text-[#DDC7BB] font-semibold"
                  : "hover:text-[#DDC7BB] hover:font-bold"
              }`
            }
          >
            <CiViewList size={20} />
            Category
          </NavLink>

          <NavLink
            to="/admin/rooms"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive
                  ? "text-[#FEF7F2] font-semibold"
                  : "hover:text-[#DDC7BB] hover:font-bold"
              }`
            }
          >
            <CiHome size={20} />
            Rooms
          </NavLink>

          <NavLink
            to="/admin/gallery"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive
                  ? "text-[#FEF7F2] font-semibold"
                  : "hover:text-[#DDC7BB] hover:font-bold"
              }`
            }
          >
            <CiImageOn size={20} />
            Gallery
          </NavLink>

          <NavLink
            to="/admin/users"
            end
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive
                  ? "text-[#FEF7F2] font-semibold"
                  : "hover:text-[#DDC7BB] hover:font-bold"
              }`
            }
          >
            <CiUser size={20} />
            Users
          </NavLink>

          <NavLink
            to="/admin/feedback"
            end
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive
                  ? "text-[#FEF7F2] font-semibold"
                  : "hover:text-[#DDC7BB] hover:font-bold"
              }`
            }
          >
            <CiChat1 size={20} />
            Feedback
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-text-[#FFDFC8] p-6 overflow-y-scroll max-h-[100vh]">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
