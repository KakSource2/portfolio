import "./styles.css";

const TestPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="Test">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type={"text"} />
        </label>
        <label>
          <p>Email</p>
          <input type={"email"} />
        </label>
        <label>
          <p>Password</p>
          <input type={"password"} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default TestPage;
