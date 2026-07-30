    import { Footer } from "@/components/common/footer";
    import { Header } from "@/components/common/header";
    import profile from "@/assets/2profile.png";
    import { Button } from "@/components/ui/button";

    export default function AboutPage() {
    return (
        <>
        <Header />

        <main className="flex-1">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold">
                About Me
                </h1>

                <p className="text-muted-foreground text-lg mt-4 max-w-3xl mx-auto">
                Learn more about my journey, skills, and passion for building
                modern web applications.
                </p>
            </div>


            {/* Profile Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="flex justify-center">
               <img
                   src={profile}
                  alt="Arron profile"
                        className="
                        h-96
                        w-96
                        rounded-2xl
                        object-cover
                        border
                        border-gray-200
                        shadow-lg
                        transition-all
                        duration-300
                        hover:border-black
                        hover:shadow-2xl
                        hover:scale-105
                        "
                        />
                        </div>


                {/* Description */}
                <div>
                <h2 className="text-3xl font-bold mb-5">
                    Hi, I'm Arron 👋
                </h2>

                <p className="text-muted-foreground leading-8 mb-5">
                    I am an aspiring developer passionate about creating clean,
                    efficient, and user-friendly applications. I enjoy exploring
                    new technologies, solving problems, and improving my skills
                    through hands-on projects.
                </p>

                <p className="text-muted-foreground leading-8">
                    My goal is to become a skilled software developer who can build
                    reliable solutions and contribute to meaningful projects.
                    Currently, I focus on strengthening my frontend and backend
                    development skills.
                </p>
                </div>

            </div>


            {/* Skills Section */}
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
            {/* Journey Section */}
            <section className="mt-20">

                <div
                className="
                    rounded-2xl
                    border
                    p-8
                    bg-white
                    shadow-sm
                    hover:border-black
                    hover:shadow-xl
                    transition-all
                    duration-300
                "
                >
                <h2 className="text-3xl font-bold mb-4">
                    My Journey
                </h2>

                <p className="text-muted-foreground leading-8">
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