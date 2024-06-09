import Link from "next/link";

export default function Layout({
  children,
  posts,
  profile,
  settings,
  orders
}: {
  children: React.ReactNode;
  posts: React.ReactNode;
  profile: React.ReactNode;
  settings: React.ReactNode;
  orders: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <Link href={"/dashboard"}> dashboard</Link>
        <Link href={"/dashboard/settings"}> dashboard settings</Link>{/* this will try to render the sub route(settings) of all slots(posts,profile etc) and the root of parallel route(dashboard) */}
      </nav>
      {children}
      {posts}
      {profile}
      {settings}
      {orders}
    </>
  );
}
