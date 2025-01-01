import React from 'react';

const Admin = () => {
  const menuItems = [
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 8 },
    { id: 3, name: 'Pasta', price: 12 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 p-4">ID</th>
              <th className="border-b-2 p-4">Name</th>
              <th className="border-b-2 p-4">Price</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr key={item.id}>
                <td className="p-4 border-b">{item.id}</td>
                <td className="p-4 border-b">{item.name}</td>
                <td className="p-4 border-b">${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
