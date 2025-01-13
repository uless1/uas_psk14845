import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/AuthSlice";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]:value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://demo-api.syaifur.io/api/login', form, {
                headers : {
                    'Content-Type': 'application/json',
                },
            });

            if (response.data.code === 200){
                const {user, token } = response.data.data;
                dispatch(login({ user, token }));

                Swal.fire({
                    icon: "success",
                    title: "Login Berhasil",
                    text: response.data.message,
                });

                setForm({
                    email: '',
                    password: '',
                });
                navigate('/admin');
            }

        } catch (error) {
            Swal.fire({
                icon:"error",
                title: "Login Gagal",
                text: error.response?.data?.message || "Silakan coba lagi",
            });
        }
    };

    

    return (
        <div>
            <div>Halaman Login</div>
            <div>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mr-2">Login</button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Login