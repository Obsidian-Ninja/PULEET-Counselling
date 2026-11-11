import { House, MoveRight } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-6 px-4 py-8 text-center md:flex-row md:gap-12 md:text-left lg:gap-16">
      {/* Image */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <img
          src="/images/404.png"
          alt="404 Not Found"
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex max-w-md flex-col items-center gap-3 md:items-start">
        <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600">
          Looks like you have taken a wrong turn in your college journey.
        </p>
        <p className="text-gray-600">Let's get you back on track!</p>

        {/* Actions */}
        <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="/"
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
          >
            <House size={18} />
            Go to home
          </a>
          <a
            href="/contact"
            className="flex items-center gap-2 underline underline-offset-4 hover:text-blue-600"
          >
            Contact us <MoveRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;