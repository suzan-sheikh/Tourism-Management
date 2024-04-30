
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useEffect} from "react";

const UpdateSpot = () => {
    
    const { id } = useParams();  

    useEffect(() => {
        fetch(`https://server-gold-five.vercel.app/singleSpot/${id}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      }, [id]);

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
      imgURL,
    } = data;

    const updateData = {
        name,
        country,
        location,
        description,
        cost,
        seasonality,
        time,
        totalVisitor,
        imgURL,
    };

    // send data to server
    fetch(`https://server-gold-five.vercel.app/updateSpot/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount > 0){
        Swal.fire({
          title: "success!",
          text: "Update Successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        reset();
      }      
    })
  };

  return (
    <div>
      <section className="p-6 mt-20 container w-2/3">
        <h2 className="text-center text-2xl font-bold">Update Your Added Spot : </h2>
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
                type="text"
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
                type="text"
                name="totalVisitor"
                placeholder="10000"
                className="w-full rounded-md p-1 pl-2 border-2 text-sm text-primary"
                {...register("totalVisitor", { required: true })}
              />
              {errors.totalVisitor && <span>This field is required</span>}
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
            value="Update"
            className="btn btn-sm btn-neutral bg-primary m-0"
          />
        </form>
      </section>
    </div>
  );
};

export default UpdateSpot;
