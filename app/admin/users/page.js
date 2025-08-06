'use client';
import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function Page() {
  const [items, setItems] = useState([]);

  // Delete user with confirmation and refresh
  const handleDelete = async (id) => {
    if (typeof window === 'undefined') return;
    const Swal = (await import('sweetalert2')).default;
    Swal.fire({
      title: 'คุณต้องการลบข้อมูลนี้ใช่หรือไม่?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'ลบ',
      cancelButtonText: 'ยกเลิก',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`, {
            method: 'DELETE',
            headers: {
              Accept : 'application/json',
            },
          });
          const data = await res.json();
          if (res.ok) {
            Swal.fire({ icon: 'success', title: 'ลบข้อมูลสำเร็จ!', timer: 1200, showConfirmButton: false });
            // Refresh user list
            setItems(items => items.filter(u => u.id !== id));
          } else {
            Swal.fire({ icon: 'error', title: 'เกิดข้อผิดพลาด', text: data.message || 'ไม่สามารถลบข้อมูลได้' });
          }
        } catch (error) {
          Swal.fire({ icon: 'error', title: 'เกิดข้อผิดพลาด', text: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์' });
        }
      }
    });
  };


  useEffect(() => {

    async function getUsers() {
      try {
        const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users');
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
 
  getUsers()
  const interval  = setInterval(getUsers, 1000);
  return () => clearInterval(interval);
}, []);

  return (
    <div className="register-bg min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="card">
          <div className="card-header">
            Users List
          </div>
          <div className="card-body">
            <div className="row">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th className='col-md-2 text-center'>#</th>
                    <th className='col-md-4'>Firstname</th>
                    <th className='col-md-4'>Fullname</th>
                    <th className='col-md-4'>Lastname</th>
                    <th className='col-md-1'>Eidt</th>
                    <th className='col-md-1'>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td className='text-center'>{item.id}</td>
                      <td>{item.firstname}</td>
                      <td>{item.fullname}</td>
                      <td>{item.lastname}</td>
                      <td><Link href={`/admin/users/edit/${item.id}`} className="btn btn-warning">Edit</Link></td>
                      <td><button className="btn btn-pill btn-danger" type="button" onClick={() => handleDelete(item.id)}><i className="fa fa-trash"></i>Del</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .register-bg {
          background: linear-gradient(135deg, #14532d 0%, #3bb78f 100%);
        }
      `}</style>
    </div>
  );
}