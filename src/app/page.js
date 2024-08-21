import Image from "next/image";
import ImageSlider from "./components/ImageSlider";
import Head from "next/head";

export default function Home() {
  return (
    <main className="flex h-[90vh] bg-black">
      <ImageSlider />
    </main>
  );
}
