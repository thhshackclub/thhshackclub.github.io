import { BookOpen, HelpCircle } from "react-feather";
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
        <div className={"bg-primary border-muted border-2 rounded-xl p-2 flex"}>
          <HelpCircle className={"w-20 my-auto"} width={20} color={"white"} />
          <p>
            Hack Club is a 501(c)(3) non-profit organization aimed at making
            programming more accessible to high schoolers across the globe. So
            what?
          </p>
        </div>
        <section className={"grid grid-cols-2"}>
          <div>
            <BookOpen />
            <p>Learn to </p>
          </div>
        </section>
      </section>
    </main>
  );
}
