import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/useAuth";

const AddTourists = () => {

  const {user} = UseAuth() || {};
  const userEmail = user.email;

  console.log(userEmail);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const {
      name,
      country,
      location,
      description,
      cost,
      seasonality,
      time,
      totalVisitor,
      email,
      userName,
      imgURL,
    } = data;

    const newSpot = {
      name,
      country,
      location,
      description,
      cost,
      seasonality,
      time,
      totalVisitor,
      email,
      userName,
      imgURL,
      userEmail
    };

    console.log(newSpot);


    // send data to server
    fetch('http://localhost:4000/spot', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newSpot)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: "success!",
          text: "Added Tourists Spot Successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        // reset();
      }      
    })
  };

  return (
    <div>
      <section className="p-6 mt-20 container">
        <h2 className="text-center text-2xl font-bold">Add Tourists Spot : </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-4 shadow-2xl p-6"
        >
          <div className="grid grid-cols-6 gap-2 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3 text-left">
              <label className="text-sm text-left mb-2">
                Tourists Sport Name : :
              </label>
              <input
                type="text"
                name="name"
                placeholder="Sport Name"
                className="w-full rounded-md p-1 pl-2 border-2 text-sm text-primary"
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="col-span-full sm:col-span-3 text-left">
              <label className="text-sm text-left mb-2">Country Name :</label>
              <input
                type="text"
                name="country"
                placeholder="Country Name"
                className="w-full rounded-md p-1 pl-2 border-2 text-sm text-primary"
                {...register("country", { required: true })}
              />
              {errors.country && <span>This field is required</span>}
            </div>

            <div className="col-span-full sm:col-span-3 text-left">
              <label className="text-sm text-left mb-2">Location :</label>
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="w-full rounded-md p-1 pl-2 border-2 text-sm text-primary"
                {...register("location", { required: true })}
              />
              {errors.location && <span>This field is required</span>}
            </div>
            <div className="col-span-full sm:col-span-3 text-left">
              <label className="text-sm text-left mb-2">
                Short Description :
              </label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="w-full rounded-md p-1 pl-2 border-2 text-sm text-primary"
                {...register("description", { required: true })}
              />
              {errors.description && <span>This field is required</span>}
            </div>

            <div className="col-span-full sm:col-span-3 text-left">
              <label className="text-sm text-left mb-2">Average Cost :</label>
              <input
                type="text"
                name="cost"
                placeholder="Average Cost"
                className="w-full rounded-md p-1 pl-2 border-2 text-sm text-primary"
                {...register("cost", { required: true })}
              />
              {errors.cost && <span>This field is required</span>}
            </div>
            <div className="col-span-full sm:col-span-3 text-left">
              <label className="text-sm text-left mb-2">Seasonality :</label>
              <input
                type="text"
                name="seasonality"
                placeholder="Summer/Winter"
                className="w-full rounded-md p-1 pl-2 border-2 text-sm text-primary"
                {...register("seasonality", { required: true })}
              />
              {errors.seasonality && <span>This field is required</span>}
            </div>

            <div className="col-span-full sm:col-span-3 text-left">
              <label className="text-sm text-left mb-2">Travel Time :</label>
              <input
                type="number"
                name="time"
                placeholder="7 Days"
                className="w-full rounded-md p-1 pl-2 border-2 text-sm text-primary"
                {...register("time", { required: true })}
              />
              {errors.time && <span>This field is required</span>}
            </div>
            <div className="col-span-full sm:col-span-3 text-left">
              <label className="text-sm text-left mb-2">
                Total Visitors Per Year :
              </label>
              <input
                type="number"
                name="totalVisitor"
                placeholder="10000"
                className="w-full rounded-md p-1 pl-2 border-2 text-sm text-primary"
                {...register("totalVisitor", { required: true })}
              />
              {errors.totalVisitor && <span>This field is required</span>}
            </div>

            <div className="col-span-full sm:col-span-3 text-left">
              <label className="text-sm text-left mb-2">User Email :</label>
              <input
                type="email"
                name="email"
                placeholder="Yourmail@abc.com"
                className="w-full rounded-md p-1 pl-2 border-2 text-sm text-primary"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="col-span-full sm:col-span-3 text-left">
              <label className="text-sm text-left mb-2">User Name :</label>
              <input
                type="text"
                name="userName"
                placeholder="User Name"
                className="w-full rounded-md p-1 pl-2 border-2 text-sm text-primary"
                {...register("userName", { required: true })}
              />
              {errors.userName && <span>This field is required</span>}
            </div>

            <div className="col-span-full text-left">
              <label className="text-sm text-left mb-2">Image URL :</label>
              <input
                type="text"
                name="imgURL"
                placeholder="Image URL"
                className="w-full rounded-md p-1 pl-2 border-2 text-sm text-primary"
                {...register("imgURL", { required: true })}
              />
              {errors.imgURL && <span>This field is required</span>}
            </div>
          </div>
          <input
            type="submit"
            value="Add"
            className="btn btn-sm btn-neutral m-0"
          />
        </form>
      </section>
    </div>
  );
};

export default AddTourists;
