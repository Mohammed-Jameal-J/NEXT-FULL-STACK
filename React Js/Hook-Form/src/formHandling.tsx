import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// 1. Zod schema
const userFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email"),
});

// 2. Type inferred from schema
type UserFormInputs = z.infer<typeof userFormSchema>;

function FormHandling() {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserFormInputs>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  // 3. Submit handler
  const dataSubmit: SubmitHandler<UserFormInputs> = (data) => {
    console.log(data);
    reset();
  };

  const watchName = watch("name");

  return (
    <>
      <form onSubmit={handleSubmit(dataSubmit)}>
        <input
          type="text"
          placeholder="Enter name"
          {...register("name")}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <br />

        <input
          type="text"
          placeholder="Enter email"
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <br />

        <p>Watched name: {watchName}</p>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FormHandling;
