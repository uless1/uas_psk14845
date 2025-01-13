import React from 'react';

const EdukasiBanjir = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-indigo-900">Edukasi Banjir</h1>
      <p className="mt-4 text-gray-700">
        Selamat datang di halaman Edukasi Banjir! Di sini Anda akan mendapatkan informasi dan panduan terkait cara menghadapi, 
        mencegah, dan meminimalkan dampak dari banjir.
      </p>
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-indigo-800">Panduan dan Tips</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Mengenali tanda-tanda awal banjir di sekitar Anda.</li>
          <li>Memastikan dokumen penting tersimpan di tempat aman dan tahan air.</li>
          <li>Membuat rencana evakuasi bersama keluarga.</li>
          <li>Menghindari area rawan banjir dan arus deras.</li>
          <li>Memanfaatkan aplikasi atau sumber daya lokal untuk memonitor kondisi cuaca.</li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-indigo-800">Sumber Daya Terkait</h2>
        <p className="mt-2 text-gray-700">
          Anda dapat mengakses informasi lebih lanjut melalui tautan berikut:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>
            <a href="https://www.bnpb.go.id/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              Badan Nasional Penanggulangan Bencana (BNPB)
            </a>
          </li>
          <li>
            <a href="https://www.weather.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              Informasi Cuaca Global
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-indigo-800">Video Edukasi Banjir</h2>
        <p className="mt-2 text-gray-700">
          Tonton video berikut untuk memahami lebih lanjut tentang terjadinya banjir:
        </p>
        <div className="mt-4">
          <iframe 
            width="100%" 
            height="400" 
            src="https://www.youtube.com/embed/b5wjvTA4ao4" // Link embed video
            title="Video Edukasi Banjir"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default EdukasiBanjir;
