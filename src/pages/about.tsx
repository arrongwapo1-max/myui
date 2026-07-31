import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import profile from "@/assets/2profile.png";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              About Me
            </span>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              A small story, a big ambition
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              Learn more about my journey, skills, and passion for building
              modern web applications.
            </p>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="flex justify-center">
              <div className="rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.4)]">
                <img
                  src={profile}
                  alt="Arron profile"
                  className="h-[420px] w-full max-w-[420px] rounded-[20px] object-cover object-center transition-all duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>

            <div className="space-y-5">
              <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
                Hi, I'm Arron 👋
              </h2>

              <p className="text-base leading-8 text-slate-600">
                I am an aspiring developer passionate about creating clean,
                efficient, and user-friendly applications. I enjoy exploring
                new technologies, solving problems, and improving my skills
                through hands-on projects.
              </p>

              <p className="text-base leading-8 text-slate-600">
                My goal is to become a skilled software developer who can build
                reliable solutions and contribute to meaningful projects.
                Currently, I focus on strengthening my frontend and backend
                development skills.
              </p>
            </div>
          </div>

          <section className="mt-20 rounded-[28px] border border-slate-200 bg-slate-50/70 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-center text-3xl font-bold text-slate-950 md:text-4xl">
                Skills
              </h2>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
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

          <section className="mt-20">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_-34px_rgba(15,23,42,0.5)]">
              <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
                My Journey
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-600">
                My development journey started with curiosity about how
                websites and applications work. Since then, I have been
                continuously learning programming concepts, frameworks, and
                best practices to improve my ability to create better software.
              </p>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}