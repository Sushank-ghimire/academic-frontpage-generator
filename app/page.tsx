"use client";

import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import { useRouter } from "nextjs-toploader/app";

const features = [
  {
    title: "Elegant Design",
    desc: "Professional and attractive front pages tailored for Academic submission.",
  },
  {
    title: "Quick Generator",
    desc: "Fill details once and generate polished output in seconds.",
  },
  {
    title: "Single-Subject Focus",
    desc: "Create one clean, examiner-friendly page per subject.",
  },
];

export default function Home() {
  const router = useRouter();

  const handleClick = () => router.push("/create");
  return (
    <main className="relative min-h-screen px-6 py-12 bg-linear-to-b from-background via-background to-muted/40">
      <section className="max-w-5xl mx-auto text-center mt-12">
        <p className="inline-flex rounded-full border px-3 py-1 text-xs text-muted-foreground">
          Academic Front Page Generator
        </p>

        <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight">
          Build Beautiful Index Pages
        </h1>

        <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Create clean, modern and examiner-friendly report front pages with a
          fast and simple workflow.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <Button onClick={handleClick} size="lg">
            Get Started
          </Button>

          <Button onClick={handleClick} size="lg" variant="outline">
            Try Demo
          </Button>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
        {features.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border bg-background/80 backdrop-blur p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-muted-foreground mt-2 text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
