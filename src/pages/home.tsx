import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Card } from "@/components/ui/card";
import profile from "@/assets/profile.png";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.08),_transparent_40%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <span className="inline-flex items-center rounded-full border border-gray-300 bg-white/80 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm backdrop-blur">
                  Frontend Developer in Progress
                </span>

                <h1 className="text-5xl md:text-6xl font-black tracking-tight text-gray-950">
                  Hi, I'm <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 bg-clip-text text-transparent">Arron aspiring dev</span>
                </h1>

                <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600 lg:mx-0">
                  An enthusiastic learner actively building skills in web
                  development, frontend architecture, and practical problem-solving.
                  Constantly expanding my technical toolkit and working toward
                  delivering clean, user-focused software.
                </p>

                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-2">
                  <Button className="px-6 py-3">View Projects</Button>
                  <Button variant="secondary" className="px-6 py-3">Get In Touch</Button>
                </div>
              </div>

              <div className="rounded-[28px] border border-gray-200 bg-white/80 p-5 shadow-[0_20px_70px_-30px_rgba(15,23,42,0.4)] backdrop-blur-sm">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-950 p-5 text-white">
                    <p className="text-sm text-slate-300">Focus</p>
                    <p className="mt-2 text-2xl font-bold">Responsive UI</p>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-5">
                    <p className="text-sm text-slate-500">Current Stack</p>
                    <p className="mt-2 text-2xl font-bold text-slate-900">React + TS</p>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-5 sm:col-span-2">
                    <p className="text-sm text-slate-500">What I enjoy</p>
                    <p className="mt-2 text-lg leading-7 text-slate-700">
                      Building interfaces that feel smooth, intuitive, and easy to use on any screen size.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">About Me</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-950">A thoughtful builder with a clean design mindset</h2>
              <p className="text-base md:text-lg leading-8 text-slate-600">
                I enjoy building clean and scalable web applications that solve
                real-world problems. My focus is on creating intuitive user
                experiences with modern technologies while continuously learning
                new tools and best practices.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-3 shadow-sm">
              <img
                src={profile}
                alt="Arron profile"
                className="h-[420px] w-full rounded-[20px] object-cover object-center shadow-lg transition-all duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Featured Projects</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-950">Recent work worth sharing</h2>
            </div>

            <p className="text-slate-600">
              Some of my recent work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              title="Portfolio Website"
              description="A modern portfolio built with Next.js and Tailwind CSS."
              buttonLabel="View Project"
              buttonVariant="primary"
            />

            <Card
              title="HTML & CSS Showcase"
              description="A clean, responsive landing page built with semantic HTML and polished CSS styling."
              buttonLabel="View Project"
              buttonVariant="primary"
            />

            <Card
              title="Task Management"
              description="Productivity app with drag-and-drop functionality."
              buttonLabel="View Project"
              buttonVariant="primary"
            />
          </div>
        </section>

        <section className="bg-slate-50/70 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Skills</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-950">Tools I’m actively growing with</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Tailwind CSS",
              ].map((skill) => (
                <Button key={skill} variant="tertiary">
                  {skill}
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.45)] sm:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-950">Let's Build Something Amazing</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-slate-600">
              I'm currently open to internships, freelance work, and full-time
              opportunities.
            </p>

            <div className="mt-8 flex justify-center">
              <Button className="px-8 py-3">Get In Touch</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
