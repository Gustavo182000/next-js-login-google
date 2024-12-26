import Image from "next/image";
import LearnImage from "../../public/assets/Learning-rafiki.svg";

export default function Home() {
  return (
    <div
    >
      <div className="container mx-auto align-middle flex flex-col justify-center items-center">
        <Image
          src={LearnImage}
          alt="Exams"
          width={450}
          height={450}
          priority
        />
        <h1 className="text-4xl font-bold text-center text-white ">
          Welcome to the Learning Platform
        </h1>
        <div className="flex flex-row  items-center justify-around space-x-10 mt-10">
          <section className="text-black font-bold text-center bg-white p-3 rounded-lg shadow-lg space-x-10 hover:scale-105 transition-transform duration-500">
            <span>+ 12 posts</span>
          </section>
          <section className="text-black text-center font-bold bg-white p-3 rounded-lg shadow-lg space-x-10 hover:scale-105 transition-transform duration-500">
            <span>+ 29 comments</span>
          </section>
        </div>
      </div>
    </div>
  );
}
