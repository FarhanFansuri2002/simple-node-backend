export default async (req) => {
  const url = new URL(req.url);
  const name = url.searchParams.get("name") || "world";

  return Response.json({ message: `Hello, ${name}!` });
};

export const config = {
  path: "/api/hello",
};
