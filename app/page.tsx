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
          href={"https://thhsclubs.vercel.app/clubs/hackclub"}
        >
          Join Hack Club!
        </a>
      </div>
      <section className={"px-10 mt-20"}>
          <p className='text-center text-black'>
            Hack Club is a 501(c)(3) non-profit organization aimed at making
            programming more accessible to high schoolers across the globe. <span className="">So
            what? This means that...</span>
          </p>
        <section className={"grid grid-cols-2 mt-2 gap-2"}>
          <div className="infoBox">
            <Globe className={"infoBoxIcon"} color={"white"}/>
            <p>Be part of a globally inclusive, comfortable, and convenient environment where high schoolers are enabled to produce projects that they never thought were possible..</p>
          </div>
          <div className="infoBox">
            <BookOpen className={"infoBoxIcon"} width={20} color={"white"}/>
            <p>Learn to code by creating real, impactful projects and contributing to open-source programs, even if you have zero prior experience!</p>
          </div>
        </section>
        <section className="mt-20">
          <h1>
          Hack Club is not about "hacking"!
          </h1>
          <p className="text-center text-black">Hacking refers to overcoming challenges through creative solutions. This is what we do at Hack Club, not hacking into banks.</p>
        </section>
        <h2 className="mt-20">Join us every XXXday at XX:XX in room XXX after school!</h2>
      </section>
    </main>
  );
}
