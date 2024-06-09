import { processCbAfterDelay, wait } from "@/utilities/functions";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  // const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
  //   headers: {
  //     "Content-Type": "application/json",
  //     "API-Key": process.env.DATA_API_KEY!,
  //   },
  // });

  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (r) => r.json()
  );

  // below code to simulate loading did not work as expected
  // const dataAfterDelay = await processCbAfterDelay(2000, () => posts);
  // return Response.json({ posts: dataAfterDelay });

  // or

  //   wait(2000);

  return Response.json({ posts });
}
