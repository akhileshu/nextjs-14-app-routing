import { Modal } from "@/components/modal";


export default function Page({ params }: { params: { slug: string } }) {
  return (
    <Modal>
      <div className={"square"}>{params.slug}</div>
    </Modal>
  );
}
