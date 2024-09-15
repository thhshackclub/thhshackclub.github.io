export default function Navbar() {
  return (
    <section className={"border-b-2 border-hack-gray py-2 flex justify-around"}>
      <a href="https://hackclub.com/">
        <img
          className={"w-24"}
          src="https://assets.hackclub.com/flag-orpheus-top.svg"
          alt="Hack Club"
        />
      </a>
      <a href={"/"} className={"text-2xl my-auto no-underline 	"}>
        Home
      </a>
      <a href={"/projects"} className={"text-2xl my-auto no-underline 	"}>
        Projects
      </a>
    </section>
  );
}
