import { throwError } from "@/utilities/functions";

export async function GET(request: Request) {
  try {
    const posts = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    ).then((r) => r.json());
    // throw new Error("Internal Server Error");
    return Response.json({ posts });
  } catch (error) {
    // This will catch the error and return a response with the error message
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export const revalidate = 0;
