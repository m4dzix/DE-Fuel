import { useState, useRef } from "react";

const Form = () => {
  const [cityName, setCityName] = useState("");
  const inputRef = useRef(null);
  const onFormSubmit = (event) => {
    event.preventDefault();

    const contentTrimmed = cityName.trim();
    if (contentTrimmed === "") {
      return;
    }
    setCityName("");
    inputRef.current.focus();
  };
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <label>
        <input
          ref={inputRef}
          className="input"
          value={cityName}
          name="city"
          type="text"
          onChange={(event) => setCityName(event.target.value)}
          required
        />
      </label>
      <button>Search</button>
    </form>
  );
};

export default Form;
