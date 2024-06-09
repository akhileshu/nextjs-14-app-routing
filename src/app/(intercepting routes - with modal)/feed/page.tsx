import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div>
      {/* <h1>feed for photos</h1> */}
      <AllPhotosNavigationLinks />
    </div>
  );
}

const AllPhotosNavigationLinks = () => {
  const photos = [
    { id: 1, title: "post 1" },
    { id: 2, title: "post 2" },
    { id: 3, title: "post 3" },
  ];
  return (
    <>
      {photos.map((photo) => (
        <li key={photo.id}>
          <Link href={`/photo/${photo.id}`}>{photo.title}</Link>
        </li>
      ))}
    </>
  );
};

export default Page;
