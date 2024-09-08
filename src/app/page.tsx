import Image from "next/image";

export default function Home() {
  return (
      <div className="...">
        <main className="...">
          <h1 className="...">Home Page</h1>  {/* Added heading */}
          <Image
              className="dark:invert"
              src="https://nextjs.org/icons/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
          />
          {/* ... rest of your component */}
        </main>
        {/* ... */}
      </div>
  );
}
