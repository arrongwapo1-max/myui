import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
                Let’s Connect
              </span>

              <div className="space-y-4">
                <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
                  Contact Me
                </h1>
                <p className="max-w-xl text-base leading-8 text-slate-600 md:text-lg">
                  Have a project in mind or want to collaborate? Feel free to send
                  me a message and I’ll get back to you as soon as possible.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <div className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-900 hover:shadow-[0_18px_40px_-22px_rgba(15,23,42,0.55)]">
                  <h3 className="mb-2 text-lg font-bold text-slate-950">Email</h3>
                  <p className="text-slate-600">your@email.com</p>
                </div>

                <div className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-900 hover:shadow-[0_18px_40px_-22px_rgba(15,23,42,0.55)]">
                  <h3 className="mb-2 text-lg font-bold text-slate-950">Location</h3>
                  <p className="text-slate-600">Philippines</p>
                </div>

                <div className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-900 hover:shadow-[0_18px_40px_-22px_rgba(15,23,42,0.55)]">
                  <h3 className="mb-2 text-lg font-bold text-slate-950">Social</h3>
                  <p className="text-slate-600">GitHub / LinkedIn</p>
                </div>
              </div>
            </div>

            <form className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.55)] sm:p-8 lg:p-10">
              <div className="grid gap-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all duration-300 focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-200"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all duration-300 focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-200"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="What is this about?"
                    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all duration-300 focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-200"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none resize-none transition-all duration-300 focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-200"
                  />
                </div>

                <div className="pt-2">
                  <Button className="w-full justify-center px-8 py-3 sm:w-auto">Send Message</Button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}