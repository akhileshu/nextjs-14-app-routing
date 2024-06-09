import Link from "next/link";

export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {

  return (
    <>
      <nav>
        <Link href={"/dashboard"}> dashboard</Link>
        <Link href={"/dashboard/settings"}> dashboard settings</Link>
        {/* this will try to render the sub route(settings)[if exists] of all slots(posts,profile etc) and the root of parallel route(dashboard) */}
      </nav>
      <h1>feed - photos</h1>

      {children}
      {modal}
    </>
  );
}
