export async function GET() {
  return Response.json({
    status: "ok",
    service: "AI Study Planner",
    timestamp: new Date().toISOString(),
  });
}