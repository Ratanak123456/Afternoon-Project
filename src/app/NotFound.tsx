import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import erroGif from "../assets/404 Error.gif"

export default function NotFound() {
  return (
    <div>
      <Header />
      <main>
        <section className="flex items-center justify-center min-h-screen bg-[var(--color-bg)] ">
          <div className="text-center animate-fadeIn w-full">
            <img
              src={erroGif}
              alt="404 Illustration"
              className="mx-auto w-[500px] animate-[float_3s_infinite] bg-[var(--color-bg)] "
            />
            <h1 className="text-7xl font-extrabold text-[var(--color-text)] mt-6">
              Looks Like You're Lost!
            </h1>
            <p className="text-xl text-[var(--color-subtext)] mt-2">
              We can't seem to find the page you're looking for.
            </p>
            <Link
              to="/"
              className="mt-6 inline-block bg-[var(--color-primary)] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform transition hover:scale-105 hover:bg-[var(--color-primary-hover)]"
            >
              Return Home
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
