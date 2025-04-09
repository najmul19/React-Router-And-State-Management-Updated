const ReuseblaeForm = ({ handleSubmit, submitBtn = "Submit", children }) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      emal: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };
  return (
    <div>
      {/* <h2>{formTitle}</h2> */}
      {children}
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name" /> <br />
        <input type="email" name="email" /> <br />
        <input type="password" name="password" /> <br />
        {/* <button>Submit</button> */}
        <input type="submit" value={submitBtn} />
      </form>
    </div>
  );
};

export default ReuseblaeForm;
