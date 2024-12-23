import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-items-center justify-between p-6 sm:p-12 lg:p-24">
      <div className="w-full max-w-5xl flex flex-col items-center justify-between font-mono text-sm lg:flex-row">
        {/* Fixed header */}
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Class-11 Assignment
        </p>
        
      </div>

      {/* Props Section */}
      <div className="text-center mb-16 sm:mb-24 lg:mb-56 px-6 sm:px-12 lg:px-24">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-white mb-6 sm:mb-8 lg:mb-10">Props</h1>
        <p className="text-white text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-10">
          Props (short for properties) are used in React to pass data from a parent component to a child component.
        </p>
        <Link href="/props">
          <button className="leading-9 mt-6 sm:mt-8 lg:mt-10 px-6 py-2 text-white font-bold rounded hover:bg-gray-700 transition duration-200">
            Read More
          </button>
        </Link>
      </div>
    </main>
  );
}
