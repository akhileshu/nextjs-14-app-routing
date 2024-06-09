import Link from "next/link";
import React from "react";

/* 
/blogs : we render links to individual blogs
/blogs/[slug] : we render the details of the blog
*/

interface Blog {
  id: number;
  title: string;
}

interface Params {
  params: {
    slug?: string;
  };
}

const Page: React.FC<Params> = ({ params }) => {
  const blogs: Blog[] = [
    { id: 1, title: "blog 1" },
    { id: 2, title: "blog 2" },
    { id: 3, title: "blog 3" },
  ];

  return (
    <>
      {params.slug ? (
        <BlogComponent params={params} />
      ) : (
        <AllBlogsNavigation blogs={blogs} />
      )}
    </>
  );
};

const AllBlogsNavigation: React.FC<{ blogs: Blog[] }> = ({ blogs }) => {
  return (
    <ul>
      {blogs.map((blog) => (
        <li key={blog.id}>
          <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
        </li>
      ))}
    </ul>
  );
};

const BlogComponent: React.FC<{ params: { slug: string } }> = ({ params }) => {
  return (
    <div>
      <div>My blog (gives slug/dynamic id): {params.slug}</div>
      <div>To show blog data on navigate, pass data in href</div>
      <div>blog.id: {params.slug}</div>{" "}
      {/* Example placeholder for dynamic blog data */}
      <div>blog.title: {"Sample Title"}</div>{" "}
      {/* Example placeholder for dynamic blog data */}
    </div>
  );
};

export default Page;
