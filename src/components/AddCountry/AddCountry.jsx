import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
// import UseAuth from "../../Hooks/useAuth";

const AddCountry = () => {

  // const {user} = UseAuth() || {};
  // const userEmail = user.email;

  // console.log(userEmail);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const {
      country,
      description,
      imgURL      
    } = data;

    const newSpot = {
      country,
      description,
      imgURL
    };

    console.log(newSpot);


    // send data to server
    fetch('https://server-gold-five.vercel.app/country', {
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
        reset();
      }      
    })
  };

  return (
    <div>
      <section className="p-6 mt-20 container w-2/4">
        <h2 className="text-center text-2xl font-bold">Add Tourists Spot : </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-4 shadow-2xl p-6"
        >
          <div className="grid grid-cols-6 gap-2 col-span-full lg:col-span-3">

            <div className="col-span-full text-left">
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
            <div className="col-span-full text-left">
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

export default AddCountry;
