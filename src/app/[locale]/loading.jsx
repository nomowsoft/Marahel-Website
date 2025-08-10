import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <Image
        src="/hero/marahel.gif"
        alt="Loading..."
        width={300}
        height={150}
        priority
      />
    </div>
  );
}
