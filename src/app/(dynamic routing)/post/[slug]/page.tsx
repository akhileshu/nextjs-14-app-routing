import React from "react";
import Link from "next/link";

/* 
dynamic routing
*/


function Page({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <div>My Post (gives slug/dynamic id): {params.slug}</div>
      <div>to show post data on navigate ,pass data in href</div>
      <div>{"post.id"}</div>
      <div>{"post.title"}</div>
    </>
  );
}

export default Page;
