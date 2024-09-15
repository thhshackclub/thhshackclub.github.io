import { BookOpen, Globe, HelpCircle } from "react-feather";
export default function Home() {
  return (
    <main>
      <div className={"mt-10"}>
        <h1>This website looks like crap right now.</h1>
        <h2>
          But <span className={"font-black"}>you</span> can fix it!
        </h2>
      </div>

      <div className={"flex justify-center mt-20"}>
        <a
          className={"buttonLike text-3xl"}
          href={"https://forms.gle/sARDysWZLkyEBQ3R7"}
        >
          Join Hack Club!
        </a>
      </div>
      <section className={"px-10 mt-20"}>
        <p className="text-center text-black">
          Hack Club is a 501(c)(3) non-profit organization aimed at making
          programming more accessible to high schoolers across the globe.{" "}
        </p>
        <p className="pt-4 text-black text-center">
          So what? This means that...
        </p>

        <section className={"grid md:grid-cols-2 mt-2 gap-2 xl:px-52"}>
          <div className="infoBox">
            <Globe className={"infoBoxIcon"} color={"white"} />
            <p className={"text-white"}>
              Be part of a globally inclusive, comfortable, and convenient
              environment where high schoolers are enabled to produce projects
              that they never thought were possible..
            </p>
          </div>
          <div className="infoBox">
            <BookOpen className={"infoBoxIcon"} width={20} color={"white"} />
            <p className={"text-white"}>
              Learn to code by creating real, impactful projects and
              contributing to open-source programs, even if you have zero prior
              experience!
            </p>
          </div>
        </section>
        <section className="mt-20">
          <h1>Hack Club is not about "hacking"!</h1>
          <p className="text-center text-black">
            Hacking refers to overcoming challenges through creative solutions.
            This is what we do at Hack Club, not hacking into banks.
          </p>
        </section>
        <img
          className={"mx-auto mt-4"}
          src={
            "https://github.com/hackclub/dinosaurs/raw/main/suryanshmak_dino.png"
          }
          alt={""}
        />
        <h2 className="">
          Join us every <b>Wednesday</b> after school in room <b>634</b>!
        </h2>
      </section>
    </main>
  );
}
