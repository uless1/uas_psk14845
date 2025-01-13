import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-4 text-gray-700">Selamat datang di Admin Dashboard!</p>
      
      {/* Ringkasan Data Banjir */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-indigo-800">Ringkasan Data Banjir</h2>
        <div className="mt-4 bg-blue-100 p-4 rounded-md">
          <p className="text-gray-700">Jumlah wilayah yang terdampak banjir: 3</p>
          <p className="text-gray-700">Status banjir terkini: Sedang (1 meter)</p>
          <p className="text-gray-700">Perkiraan waktu puncak banjir: 12 Januari 2025, 17:00</p>
        </div>
      </div>
      
      {/* Link ke Halaman Data Banjir */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-indigo-800">Lihat Data Banjir</h2>
        <p className="mt-2 text-gray-700">
          Klik di bawah untuk melihat data banjir secara lengkap:
        </p>
        <Link to="/data-banjir" className="text-blue-500 underline">
          Lihat Data Banjir
        </Link>
      </div>

      {/* Link ke Halaman Edukasi Banjir */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-indigo-800">Edukasi Banjir</h2>
        <p className="mt-2 text-gray-700">
          Pelajari lebih lanjut tentang cara menghadapi banjir dan tips pencegahan:
        </p>
        <Link to="/edukasi-banjir" className="text-blue-500 underline">
          Lihat Edukasi Banjir
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
