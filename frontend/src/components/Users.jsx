import { useRecoilState } from "recoil";
import { userDetailAtom } from "../atoms/userAtom";
import { RecoilRoot } from "recoil";
import { Topbar } from "../components/topbar";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Users() {
    const [userinfo] = useRecoilState(userDetailAtom);

    const [orders, setOrders] = useState([
        { id: 1, customer: "John Doe", date: "2024-09-10", status: "Pending", total: 250 },
        { id: 2, customer: "Jane Smith", date: "2024-09-12", status: "Shipped", total: 150 },
        { id: 3, customer: "Bob Johnson", date: "2024-09-11", status: "Delivered", total: 400 },
      ]);
    
      const [showOrders, setShowOrders] = useState(false);  // New state to show/hide orders

      const navigate = useNavigate();
      
      const goToOrders = () => {
        navigate('/orders'); // Navigates to the order list page
      };

      const goTodashboard = () => {
        navigate('/admin'); // Navigates to the order list page
      };

    return (
        <div>
            <Topbar />
            <div className="m-5 shadow-lg h-screen">
                <div className="m-10 mb-4 font-bold text-3xl">
                    Welcome Admin
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="m-10 mt-0 w-[200px] h-[200px] flex flex-col gap-10">
                    <button 
                    onClick={goToOrders}
                    className="border px-3 py-1 rounded-lg bg-orange-400 font-medium hover:bg-orange-300 text-white">Orders</button>
                    <button 
                    onClick={goTodashboard}
                    className="border px-3 py-1 rounded-lg bg-orange-400 font-medium hover:bg-orange-300 text-white">Admin Dashboard</button>
                    </div>
                    <div className="flex-grow p-10 pt-0">
                        <div className="text-xl mb-5 font-bold"><br />
                            <div className="font-light text-lg w-100 h-[200px] flex-row gap-10">
                            <h1 className="font-bold">Orders</h1>
                            <table  className="min-w-full table-auto border-collapse border border-gray-300">
                            <thead>
                            <tr>
                            <th className="px-4 py-2 border border-gray-300">Customer Name</th>
                            <th className="px-4 py-2 border border-gray-300">Date Registered</th>
                            </tr>
                            </thead>
                            <tbody>
        <tr>
            <td className="px-4 py-2 border border-gray-300">John Doe</td>
            <td className="px-4 py-2 border border-gray-300">2024-09-19</td>
        </tr>
        <tr>
            <td className="px-4 py-2 border border-gray-300">Mary Johnson</td>
            <td className="px-4 py-2 border border-gray-300">2024-09-20</td>
        </tr>
    </tbody>
                            </table>
                            </div>
                        </div>
                        <div className="text-xl font-bold">  <br />
                            <div className="font-light text-lg">
                                
                            </div>
                        </div>
                        <div className="mt-5">
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
}

export default function USERS() {
    return (
        <RecoilRoot>
            <Users />
        </RecoilRoot>
    );
}
