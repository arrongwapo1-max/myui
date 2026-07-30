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
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Hi, I'm <span className="text-primary">Arron aspiring dev</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3x1  mx-auto ">
              An enthusiastic learner actively building skills in web
              development, backend architecture, and practical problem-solving.
              Constantly expanding my technical toolkit and working toward
              delivering clean, user-focused software.
            </p>

            <div className="flex justify-center gap-4 pt-4">
              <button className="px-6 py-3 rounded-lg bg-primary text-white hover:opacity-90 transition">
                View Projects
              </button>

            
            </div>
          </div>
        </section>

        {/* About */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Me</h2>

              <p className="text-muted-foreground leading-8">
                I enjoy building clean and scalable web applications that solve
                real-world problems. My focus is on creating intuitive user
                experiences with modern technologies while continuously learning
                new tools and best practices.
              </p>
            </div>

            <div className="bg-muted rounded-2xl h-80 flex items-center justify-center">
              <span className="text-muted-foreground">
              
                <div className="flex justify-center">
                  <img
                    src={profile}
                    alt="Arron profile"
                    className="
                        h-[400px]
                        w-[600px]
                        rounded-2xl
                        object-cover
                        border 
                        border-gray-200
                        shadow-lg
                        transition-all
                        duration-300
                        hover:border-grey-500
                        hover:shadow-2xl grey
                        hover:scale-105
                       "
                  />
                </div>
              </span>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Featured Projects</h2>

            <p className="text-muted-foreground mt-2">
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
              title="E-Commerce App"
              description="Full-stack shopping platform with authentication and payments."
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

        {/* Skills */}
         {/* Skills */}
<section className="bg-muted/40 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-3xl font-bold text-center mb-10">
      Skills
    </h2>

    <div className="flex flex-wrap justify-center gap-4">
      {[
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
      ].map((skill) => (
        <Button
          key={skill}
          variant="tertiary"
        >
          {skill}
        </Button>
      ))}
    </div>

  </div>
</section>
        {/* Contact CTA */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-4xl font-bold">Let's Build Something Amazing</h2>

          <p className="text-muted-foreground mt-4">
            I'm currently open to internships, freelance work, and full-time
            opportunities.
          </p>

          <button className="mt-8 px-8 py-3 rounded-lg bg-primary text-white hover:opacity-90 transition">
            Get In Touch
          </button>
        </section>
      </main>

      <Footer />
    </>
  );
}
