import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {

    const navigate = useNavigate();
    const [form, setForm] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]:value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://demo-api.syaifur.io/api/register', form, {
                headers : {
                    'Content-Type': 'application/json',
                },
            });

            if (response.data.code === 201){

                Swal.fire({
                    icon: "success",
                    title: "Registrasi Berhasil",
                    text: response.data.message,
                });

                setForm({
                    name: '',
                    email: '',
                    password: '',
                });
                navigate('/');
            }

        } catch (error) {
            Swal.fire({
                icon:"error",
                title: "Registrasi Gagal",
                text: error.response?.data?.message || "Silakan coba lagi",
            });
        }
    };

    return (
        <div>
            <div>Halaman Register</div>
            <div>
                <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name">Nama:</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-lg" 
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="name">Email:</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-lg" 
                    required
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="name">Password:</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-lg" 
                    required
                    name="password"
                    value={form.password}
                    onChange={handleChange}/>
                </div>
                <div className="flex justify-end">
                    <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Batal</button>
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mr-2">Register</button>
                </div>
                </form>
            </div>
        </div>
    )
}


export default Register