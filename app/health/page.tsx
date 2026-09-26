import { headers } from "next/headers";

async function getHealthData() {
  const headersList = await headers();

  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";

  const response = await fetch(
    `${protocol}://${host}/api/health`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch health data");
  }

  return response.json();
}

export default async function HealthPage() {
  const health = await getHealthData();

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-bold">Health Check</h1>

      <div className="mt-6 rounded-lg border border-gray-200 p-6">
        <p>
          <strong>Status:</strong> {health.status}
        </p>

        <p className="mt-2">
          <strong>Service:</strong> {health.service}
        </p>

        <p className="mt-2">
          <strong>Checked at:</strong> {health.timestamp}
        </p>
      </div>
    </main>
  );
}