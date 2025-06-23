"use client";
import Header from "@/components/header";

export default function MyStoryPage() {
  return (
    <main className="min-h-screen px-6 bg-white text-black">
      <Header />
      <div className="max-w-3xl mx-auto mt-32">
        <h1 className="text-4xl font-bold mb-4">Our Story</h1>
        <p className="text-lg leading-relaxed">
          Isa Kombucha began with a passion for health, flavor, and community...
        </p>
      </div>
    </main>
  );
}