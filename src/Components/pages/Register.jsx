import Image from "../images/Avatar.png";

export default function Register() {
  return (
    <>
      <div className="formcontainer">
        <div className="formwrapper">
          <h4 className="text-center">LamaChat</h4>
          <form action="">
            <input type="text" placeholder="Display Name" />
            <input type="email" name="" id="" placeholder="Email" />
            <input type="password" name="pwd" id="" placeholder="password" />
            <input type="file" name="" id="fileInput" />
            <label className="fileSection" htmlFor="fileInput">
              <img src={Image} alt="" />
              <p className="">Add your Avatar</p>
            </label>
          </form>
          <button type="submit">SignUp</button>
          <p className="loginMsg">Already SignedUp? Login</p>
        </div>
      </div>
    </>
  );
}
