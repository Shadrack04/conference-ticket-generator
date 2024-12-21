import logo from "../assets/images/logo-full.svg";

export default function Logo() {
  const style = {
    paddingBottom: "0",
  };
  return (
    <div>
      <div className=" mt-2 w-40" style={style}>
        <img src={logo} />
      </div>
    </div>
  );
}
