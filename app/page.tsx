export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
          AI-Powered Learning
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          AI Study Planner
        </h1>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          Create personalized study plans and organize your preparation
          with the help of AI.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/planner"
            className="rounded-lg bg-black px-5 py-3 font-medium text-white hover:bg-gray-800"
          >
            Start Planning
          </a>

          <a
            href="/about"
            className="rounded-lg border border-gray-300 px-5 py-3 font-medium hover:bg-gray-50"
          >
            Learn More
          </a>
        </div>
      </section>
    </main>
  );
}