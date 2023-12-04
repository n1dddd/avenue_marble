import NavLinks from "./nav-links";

export default function NavBar() {
  return (
    <div className="flex flex-row grow xl:w-3/4 justify-around">
      <NavLinks />
    </div>
  );
}
