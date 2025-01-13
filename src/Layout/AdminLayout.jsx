import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { logout } from '../Redux/AuthSlice';

function AdminLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth); // Pastikan struktur state benar

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="flex flex-row min-h-screen bg-gray-100">
      <aside className="bg-indigo-900 w-64 text-white">
        <div className="p-4">
          <h2 className="font-bold">Aplikasi Sipanjir</h2>
          <nav className="mt-4 ml-4">
            <ul>
              <li><a href="/Admin">Dashboard</a></li>
              <li><a href="/Admin/DataBanjir">Laporan Banjir</a></li>
              <li><a href="/Admin/EdukasiBanjir">Edukasi Banjir</a></li>
            </ul>
          </nav>
        </div>
      </aside>

      <div className="flex flex-col flex-1">
        <header className="bg-gray-200 p-4">
          <div className="flex justify-end items-center">
            {user ? (
              <p className="px-4 py-2">Welcome, {user.name} ({user.email})</p>
            ) : (
              <p className="px-4 py-2">Welcome, Guest</p>
            )}
            <button
              onClick={handleLogout}
              className="bg-blue-500 text-white px-4 py-2 rounded ml-4"
            >
              Logout
            </button>
          </div>
        </header>

        <main className="p-4 flex-grow">
          <Outlet />
        </main>

        <footer className="bg-indigo-900 text-center text-white p-2 mt-auto">
          <p>&copy; Aku Admin</p>
        </footer>
      </div>
    </div>
  );
}

export default AdminLayout;
