import { useState } from "react";
import Button from "../../../shared/components/Button";
import FormInput from "../../../shared/components/FormInput";
import { updateName } from "../context/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function CreateUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;

    dispatch(updateName(username));

    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="md:tex-base mb-4 text-sm text-stone-600">
        👋 Welcome! Please start by telling us your name:
      </p>
      <FormInput
        className="mb-10 max-w-72"
        type="text"
        name="address"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required={true}
      />
      {username !== "" && (
        <div>
          <Button type="primary">
            {username !== "" ? "Start ordering" : "Continue"}
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
