import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            
            {/* Title */}
            <div className="text-center mb-10">
              <h1 className="text-5xl font-bold">
                Contact Me
              </h1>

              <p className="text-muted-foreground mt-4 text-lg">
                Have a project in mind or want to collaborate? 
                Feel free to send me a message.
              </p>
            </div>


            {/* Contact Form */}
            <form className="
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-8
              shadow-sm
              space-y-6
              transition-all
              duration-300
              hover:shadow-xl
              hover:border-black
            ">
              
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="
                    w-full
                    rounded-lg
                    border
                    border-gray-300
                    px-4
                    py-3
                    outline-none
                    transition
                    focus:border-black
                    focus:ring-2
                    focus:ring-gray-200
                  "
                />
              </div>


              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    w-full
                    rounded-lg
                    border
                    border-gray-300
                    px-4
                    py-3
                    outline-none
                    transition
                    focus:border-black
                    focus:ring-2
                    focus:ring-gray-200
                  "
                />
              </div>


              {/* Subject */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="What is this about?"
                  className="
                    w-full
                    rounded-lg
                    border
                    border-gray-300
                    px-4
                    py-3
                    outline-none
                    transition
                    focus:border-black
                    focus:ring-2
                    focus:ring-gray-200
                  "
                />
              </div>


              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write your message here..."
                  className="
                    w-full
                    rounded-lg
                    border
                    border-gray-300
                    px-4
                    py-3
                    outline-none
                    resize-none
                    transition
                    focus:border-black
                    focus:ring-2
                    focus:ring-gray-200
                  "
                />
              </div>


              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="
                    px-8
                    py-3
                    rounded-lg
                    bg-black
                    text-white
                    font-medium
                    transition-all
                    duration-300
                    hover:bg-gray-800
                    hover:shadow-lg
                  "
                >
                  Send Message
                </button>
              </div>

            </form>


            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">

              <div className="p-6 rounded-xl border hover:border-black transition">
                <h3 className="font-semibold mb-2">
                  Email
                </h3>
                <p className="text-muted-foreground">
                  your@email.com
                </p>
              </div>


              <div className="p-6 rounded-xl border hover:border-black transition">
                <h3 className="font-semibold mb-2">
                  Location
                </h3>
                <p className="text-muted-foreground">
                  Philippines
                </p>
              </div>


              <div className="p-6 rounded-xl border hover:border-black transition">
                <h3 className="font-semibold mb-2">
                  Social
                </h3>
                <p className="text-muted-foreground">
                  GitHub / LinkedIn
                </p>
              </div>

            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}