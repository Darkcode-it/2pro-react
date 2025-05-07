import React, { useState } from 'react';
import MainLayout from '../../components/layout/MainLayout';
import SimpleTable from '../../components/dashboard/SimpleTable';
import { Search, PlusCircle, Edit, Trash2 } from 'lucide-react';
import './Users.css';

const usersData = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    role: 'Admin',
    status: 'active',
    joinedDate: '12 Jan 2023',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    role: 'User',
    status: 'inactive',
    joinedDate: '23 Mar 2023',
  },
  {
    id: 3,
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    role: 'Editor',
    status: 'active',
    joinedDate: '05 Feb 2023',
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    role: 'User',
    status: 'active',
    joinedDate: '17 Apr 2023',
  },
  {
    id: 5,
    name: 'Robert Wilson',
    email: 'robert.wilson@example.com',
    role: 'User',
    status: 'pending',
    joinedDate: '30 May 2023',
  },
  {
    id: 6,
    name: 'Jennifer Lee',
    email: 'jennifer.lee@example.com',
    role: 'Editor',
    status: 'active',
    joinedDate: '14 Jun 2023',
  },
  {
    id: 7,
    name: 'David Martinez',
    email: 'david.martinez@example.com',
    role: 'User',
    status: 'inactive',
    joinedDate: '08 Jul 2023',
  },
  {
    id: 8,
    name: 'Lisa Anderson',
    email: 'lisa.anderson@example.com',
    role: 'User',
    status: 'active',
    joinedDate: '19 Aug 2023',
  },
];

const tableColumns = [
  { key: 'name', title: 'نام', className: 'min-w-[160px]' },
  { key: 'email', title: 'ایمیل', className: 'min-w-[240px]' },
  { key: 'role', title: 'نقش', className: 'min-w-[120px]' },
  { 
    key: 'status', 
    title: 'وضعیت',
    className: 'min-w-[120px]',
    render: (value) => {
      const statusConfig = {
        active: { label: 'فعال', variant: 'success' },
        inactive: { label: 'غیرفعال', variant: 'secondary' },
        pending: { label: 'در انتظار', variant: 'warning' }
      };
      
      return (
        <span className={`badge badge-${statusConfig[value].variant}`}>
          {statusConfig[value].label}
        </span>
      )
    }
  },
  { key: 'joinedDate', title: 'تاریخ عضویت', className: 'min-w-[140px]' },
  { 
    key: 'actions', 
    title: 'عملیات',
    className: 'min-w-[160px]',
    render: (_, record) => (
      <div className="action-buttons">
        <button 
          className="action-button edit"
          aria-label="ویرایش کاربر"
        >
          <Edit className="icon" />
        </button>
        <button
          className="action-button delete"
          aria-label="حذف کاربر"
        >
          <Trash2 className="icon" />
        </button>
      </div>
    )
  },
];

const Users = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredUsers = usersData.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="users-container">
        <div className="users-header">
          <div>
            <h1 className="users-title">مدیریت کاربران</h1>
            <p className="users-subtitle">کاربران برنامه خود را مدیریت کنید</p>
          </div>
          
          <div className="users-actions">
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="جستجوی کاربران..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="search-icon" />
            </div>
            <button className="add-user-button">
              <PlusCircle className="icon" />
              افزودن کاربر
            </button>
          </div>
        </div>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                {tableColumns.map((column) => (
                  <th key={column.key} className={column.className}>
                    {column.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id}>
                    {tableColumns.map((column) => (
                      <td key={column.key} className={column.className}>
                        {column.render ? column.render(user[column.key], user) : user[column.key]}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={tableColumns.length} className="empty-state">
                    هیچ کاربری یافت نشد
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
};

export default Users;