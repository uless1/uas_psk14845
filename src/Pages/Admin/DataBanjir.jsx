import React from 'react';

const Banjir = () => {
  const dataBanjir = [
    {
      id: 1,
      lokasi: 'Kendal - Wilayah A',
      status_banjir: 'Tinggi',
      level: '2 meter',
      timestamp: '2025-01-12T14:30:00Z'
    },
    {
      id: 2,
      lokasi: 'Kendal - Wilayah B',
      status_banjir: 'Sedang',
      level: '1 meter',
      timestamp: '2025-01-12T15:00:00Z'
    },
    {
      id: 3,
      lokasi: 'Kendal - Wilayah C',
      status_banjir: 'Rendah',
      level: '0.5 meter',
      timestamp: '2025-01-12T15:30:00Z'
    }
  ];

  const handleEdit = (id) => {
    alert(`Edit data banjir dengan ID: ${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus data banjir dengan ID: ${id}?`)) {
      alert(`Data banjir dengan ID: ${id} telah dihapus.`);
    }
  };

  return (
    <div>
      <h1>Data Banjir</h1>
      {dataBanjir.length > 0 ? (
        <table border="1" cellPadding="10" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>No</th>
              <th>Lokasi</th>
              <th>Status Banjir</th>
              <th>Tinggi Air</th>
              <th>Timestamp</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataBanjir.map((banjir, index) => (
              <tr key={banjir.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td>{index + 1}</td>
                <td>{banjir.lokasi}</td>
                <td>{banjir.status_banjir}</td>
                <td>{banjir.level}</td>
                <td>{new Date(banjir.timestamp).toLocaleString()}</td>
                <td>
                  <button onClick={() => handleEdit(banjir.id)} style={buttonStyle}>Edit</button>
                  <button onClick={() => handleDelete(banjir.id)} style={{ ...buttonStyle, backgroundColor: 'red' }}>Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Tidak ada data banjir yang tersedia.</p>
      )}
    </div>
  );
};

const buttonStyle = {
  padding: '5px 10px',
  margin: '5px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '14px'
};

export default Banjir;
