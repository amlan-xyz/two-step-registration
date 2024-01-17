import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { UserType, addUserAsync } from "../../features/users/userSlice";

export const RegistrationForm = () => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<UserType>({
    name: "",
    age: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addUserAsync(formData));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className="form">
      <h3>Form</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={handleChange} />
        <br />
        <label htmlFor="age">Age</label>
        <input type="number" id="age" onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};
