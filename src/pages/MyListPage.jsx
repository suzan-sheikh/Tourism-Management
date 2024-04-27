import { useEffect, useState } from "react";
import UseAuth from "../Hooks/useAuth";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const MyListPage = () => {
  const { user } = UseAuth() || {};

  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/mySpot/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);


  const handleDelete = _id => {
    console.log(_id);

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


                    {/* <Link to={`/update/${item._id}}`>   */}

                        <Link to={`/update/${i._id}`}>
                            <button className="btn btn-ghost btn-xs border-2 border-black"> <FaPencil /></button>                         
                        </Link>                   



                    <button onClick={() => handleDelete()} 
                    
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
