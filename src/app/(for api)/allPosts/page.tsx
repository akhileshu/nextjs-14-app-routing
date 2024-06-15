import ErrorBoundaryAndSuspenseWrapper from "@/components/ErrorBoundaryAndSuspenseWrapper";
import { throwError } from "@/utilities/functions";
import { use } from "react";

function page() {
  return (
    <div>
      <h2>posts</h2>
      <ErrorBoundaryAndSuspenseWrapper loadingMsg={"fetching posts..."}>
        <FetchPosts />
      </ErrorBoundaryAndSuspenseWrapper>
    </div>
  );
}
const fetchData = async () => {
  const res = await fetch("http://localhost:3000/api/allPosts");
  const { error, posts } = await res.json();
  if (!res.ok) throw new Error(error || "something went wrong");
  return posts;
};

const FetchPosts = async () => {
  const posts = await fetchData();
  return (
    <div>
      {posts.slice(0, 5).map((post, id) => {
        return (
          <div key={id}>
            <div>id : {post.id}</div>
            <div>title : {post.title}</div>
            <div>body : {post.body}</div>
            <div>userId : {post.userId}</div>
          </div>
        );
      })}
    </div>
  );
};

export default page;
export const revalidate = 0;
