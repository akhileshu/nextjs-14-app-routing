export default function Page({ params }: { params: { slug: string } }) {
  return <div className="square">{params.slug}</div>;
}
