import "../styles/styles.css";
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    rpassword: "",
  };

  const { name, email, password, rpassword, onChange, onSubmit } =
    useForm(initialValues);

  return (
    <div>
      <h1>Regiter page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Repeat Password"
          name="rpassword"
          value={rpassword}
          onChange={onChange}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};
