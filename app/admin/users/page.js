'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUsers, deleteUser, logoutUser } from '@/lib/api';
import Swal from 'sweetalert2';

export default function User() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tokenState, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setToken(token);
    if (!token) {
      router.push('/login');
      return;
    }

    async function fetchUsers() {
      try {
        const data = await getUsers({ limit: 100, page: 1 });
        setItems(data.data || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        if (error.message.includes('401') || error.message.includes('Unauthorized')) {
          localStorage.removeItem('token');
          router.push('/login');
        }
        setLoading(false);
      }
    }

    fetchUsers();
    // Fetch every 5 seconds instead of 1 second
    const interval = setInterval(fetchUsers, 5000);
    return () => clearInterval(interval);
  }, [router]);

  const handleSignOut = async () => {
    try {
      await logoutUser();
      setToken(null);
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
      // Still redirect even if API call fails
      localStorage.removeItem('token');
      router.push('/login');
    }
  };

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: 'ยืนยันการลบ',
        text: 'คุณแน่ใจว่าต้องการลบผู้ใช้นี้?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'ลบ',
        cancelButtonText: 'ยกเลิก',
      });

      if (result.isConfirmed) {
        await deleteUser(id);
        setItems(items.filter(item => item.id !== id));
        Swal.fire('สำเร็จ', 'ลบผู้ใช้เรียบร้อยแล้ว', 'success');
      }
    } catch (error) {
      console.error('Delete error:', error);
      Swal.fire('เกิดข้อผิดพลาด', error.message || 'ไม่สามารถลบผู้ใช้ได้', 'error');
    }
  };

  if (loading) {
    return <div className='text-center' style={{fontFamily: "'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif'"}}><h1>Loading...</h1></div>;
  }

  return (
    <>
      <br /><br /><br /><br />
      <div className="container" style={{fontFamily: "'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif'"}}>
        <div className="d-flex justify-content-end mb-3">
          {tokenState && (
            <button
              type="button"
              onClick={handleSignOut}
              className="btn btn-outline-danger"
            >
              <i className="bi bi-box-arrow-right"></i> SignOut
            </button>
          )}
        </div>
        <div className="card">
          <div className="card-header">
            Users List
          </div>
          <div className="card-body">
            <div className="row">
              <table className="table table-striped table-hover table-responsive">
                <thead>
                  <tr>
                    <th className='col-md-2 text-center'>#</th>
                    <th className='col-md-4'>Firstname</th>
                    <th className='col-md-4'>Fullname</th>
                    <th className='col-md-4'>Lastname</th>
                    <th className='col-md-4'>Username</th>
                    {/* <th className='col-md-4'>Password</th> */}
                    <th className='col-md-4'>Address</th>
                    <th className='col-md-4'>Sex</th>
                    <th className='col-md-4'>Birthday</th>
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
                      <td>{item.username}</td>
                      {/* <td>{item.password}</td> */}
                      <td>{item.address}</td>
                      <td>{item.sex}</td>
                      <td>{item.birthday}</td>
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
      <br /><br />
    </>
  );
}