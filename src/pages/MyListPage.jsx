import { useEffect, useState } from "react";
import UseAuth from "../Hooks/useAuth";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyListPage = () => {
  const { user } = UseAuth() || {};

  const [item, setItem] = useState([]);

  console.log(item);

  const [control, setControl] = useState([false]);

  useEffect(() => {
    fetch(`http://localhost:4000/mySpot/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user, control]);


  const handleDelete = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
          
      fetch(`http://localhost:4000/delet/${id}`, {
          method: 'DELETE'
      } )
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if(data.deletedCount > 0){
              Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
              });

              setControl(!control)
              
          }
      })

      }
    })



  }


  return (
    <div className="container mt-28">
      
        <div className="overflow-x-auto"> 
          <table className="table">
            <tbody>            
            {item?.map((i) => (
              <tr className="shadow-2xl" key={i._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={i.imgURL} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">TOURISTS SPOT NAME </div>
                      <div className="text-sm opacity-50">{i.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">TOTAL VISITORS</div>
                  <div className="text-sm opacity-50">{i.totalVisitor}</div>
                </td>
                <td>
                  <div className="font-bold">TRAVEL TIME</div>
                  <div className="text-sm opacity-50">{i.time}</div>
                </td>
                <th>
                  <div className="flex gap-2 justify-center items-center">


                        <Link to={`/update/${i._id}`}>
                            <button className="btn btn-ghost btn-xs border-2 border-black"> <FaPencil /></button>                         
                        </Link>                   


                    <button onClick={() => handleDelete(i._id)}                     
                    className="btn btn-ghost btn-xs border-2 border-black">
                      <MdDelete />
                    </button>
                  </div>
                </th>
              </tr>
            ))}
            </tbody>
          </table>
        </div>

    </div>
  );
};

export default MyListPage;
