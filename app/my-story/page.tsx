"use client";
import Header from "@/components/header";

export default function MyStoryPage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-white text-black">
      <Header />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Our Story</h1>
        <p className="text-lg leading-relaxed">
          Isa Kombucha began with a passion for health, flavor, and community. Every batch is brewed with care,
          using traditional fermentation methods and natural ingredients. This journey is fueled by our love for
          kombucha and a desire to share its benefits with the world.
        </p>
      </div>
    </main>
  );
}