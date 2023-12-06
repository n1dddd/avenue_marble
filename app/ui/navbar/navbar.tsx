import NavLinks from "./nav-links";

export default function NavBar() {
  return (
    <div className="flex flex-row md:flex-col gap-y-48 sticky top-20">
      <NavLinks />
    </div>
  );
}
