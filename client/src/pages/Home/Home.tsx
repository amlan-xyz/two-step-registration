import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RegistrationForm } from "../../components/RegistrationForm/Form";
import { fetchUsersAsync } from "../../features/users/userSlice";

export const Home = () => {
  const { users, status } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsersAsync());
    }
  }, [status, dispatch]);

  return (
    <div className="home">
      <h1>Home page</h1>
      <RegistrationForm />
      {users?.map((user) => (
        <p>{user?.name}</p>
      ))}
    </div>
  );
};
