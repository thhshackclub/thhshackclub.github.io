import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";

export default function Page() {
  return (
    <div>
      <h1 className={"mt-10"}>Projects</h1>
      <p className={"text-center"}>
        These are just some of the projects Hack Clubbers are able to do!
      </p>
      <section>
        <ul
          className={
            "w-fit mx-auto gap-10 px-10 md:px-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 "
          }
        >
          <Project
            name={"Sprig"}
            description={
              "Create your own game for and receive your own Sprig console!"
            }
            url={"https://sprig.hackclub.com/"}
            image={"https://sprig.hackclub.com/stories-tiny/sprig-front.jpeg"}
          />
          <Project
            name={"Boba Drops"}
            description={"Make a website and get free boba!"}
            url={"https://boba.hackclub.com/"}
            image={"https://boba.hackclub.com/images/logo.svg"}
          />
          <Project
            name={"OnBoard"}
            description={"Get $100 to make your own PCBs!"}
            url={"https://hackclub.com/onboard/"}
            image={
              "https://hackaday.com/wp-content/uploads/2023/06/Hack-Club-OnBoard.png"
            }
          />
        </ul>
        <p
          className={
            "mx-auto text-white  text-center bg-red w-fit p-4 rounded-md drop-shadow-2xl"
          }
        >
          And so much more!
        </p>
      </section>
    </div>
  );
}

function Project(props: {
  name: string;
  description: string;
  image: string;
  url: string;
}) {
  return (
    <li className={"w-fit p-4 rounded-md"}>
      <h2 className={"text-left"}>
        <a href={props.url}>{props.name}</a>
      </h2>
      <img className={"rounded-xl w-64"} src={props.image} alt={""} />
      <p className={"w-64"}>{props.description}</p>
    </li>
  );
}
