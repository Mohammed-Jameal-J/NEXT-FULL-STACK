import { useForm , type SubmitHandler  } from "react-hook-form"
import FormHandling from "./formHandling";

type UserFormInputs = {
  name: string;
  email: string;
};

function App() {
    const { register,reset, handleSubmit, watch , formState: { errors }} = useForm<UserFormInputs>(
      {
      defaultValues: {
        name: "",
        email: "",
      }
    });

    const dataSubmit: SubmitHandler<UserFormInputs> = (data) => {
        console.log(data);
        reset();
    }

    const watchName = watch("name"); 

  return (
    <>
      <form onSubmit={handleSubmit(dataSubmit)}>
        <input type="text" placeholder="Enter name" 
        {...register("name",{
          required: "Name is required",
        })}  />
        <br />
        <input type="text" placeholder="Enter email" 
        {...register("email",{
          required: "Email is required",
        })} />
        {errors.name && <p>{errors.name.message}</p>}
        {errors.email && <p>{errors.email.message}</p>}
        <br />
        <p>Watched name: {watchName}</p>
        <button type="submit">Submit</button>
      </form>
      <FormHandling />
    </>
  )
}

export default App
