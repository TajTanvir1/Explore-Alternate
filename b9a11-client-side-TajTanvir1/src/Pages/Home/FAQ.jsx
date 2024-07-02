import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div data-aos="fade-right" data-aos-duration="2000" className="mx-1 md:mx-4 my-6 md:my-10">
      <section className="dark:bg-[#ffebcc1d] border border-orange-300 rounded-lg dark:text-gray-800">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl text-center">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8 dark:text-gray-600 text-center md:w-[60%] mx-auto">
            Here we providing some (FAQ) Frequently Asked Questions with
            answers. Check it now, these can help you to know your basic
            Questions.
          </p>
          <div className="space-y-4">
            {/* 1st */}
            <details
              className="w-full border border-orange-200 rounded-lg"
              open=""
            >
              <summary className="px-4 text-lg font-semibold py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                <span className="font-bold">1.</span> What is Explore Alternate?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 lg:text-lg -mt-4 dark:text-gray-600">
                <span className="font-semibold">Answer:</span> Explore Alternate
                is a website designed to help you discover alternative products
                or solutions based on your preferences. Whether you're looking
                for substitutes for familiar items, eco-friendly alternatives,
                or unique options, Explore Alternate provides curated
                recommendations to broaden your choices.{" "}
              </p>
              <div className="-mt-6 ml-6 p-2">
                <Link to="allQueries">
                  <button className="btn btn-sm md:btn-wide btn-accent mt-2">
                    <span className="lg:text-xl">Click to See Queries</span>
                  </button>
                </Link>
              </div>
            </details>
            {/* 2nd */}
            <details
              className="w-full border border-orange-200 rounded-lg"
              open=""
            >
              <summary className="px-4 text-lg font-semibold py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                <span className="font-bold">2.</span> How does Explore Alternate
                work?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 lg:text-lg -mt-4 dark:text-gray-600">
                <span className="font-semibold">Answer:</span> Explore Alternate
                works by analyzing your specified product or query and
                suggesting comparable alternatives. Our platform employs
                sophisticated algorithms that consider various factors such as
                product features, reviews, and user preferences to deliver
                tailored recommendations that align with your needs.{" "}
              </p>
              <div className="-mt-6 ml-6 p-2">
                <Link to="/addQueries">
                  <button className="btn btn-sm md:btn-wide btn-warning mt-2">
                    <span className="lg:text-xl">Click to Add Queries</span>
                  </button>
                </Link>
              </div>
            </details>
            {/* 3rd */}
            <details
              className="w-full border border-orange-200 rounded-lg"
              open=""
            >
              <summary className="px-4 text-lg font-semibold py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                <span className="font-bold">3.</span> Is Explore Alternate free
                to use?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 lg:text-lg -mt-4 dark:text-gray-600">
                <span className="font-semibold">Answer:</span> Yes, Explore
                Alternate is completely free to use for all users. Simply visit
                our website, Login and enter your product or query, and start
                exploring a variety of alternate options tailored to your
                preferences. There are no hidden costs or subscriptions required
                to access our platform and discover new possibilities.{" "}
              </p>
              <div className="-mt-6 ml-6 p-2">
                <Link to="/login">
                  <button className="btn btn-sm md:btn-wide btn-info mt-2">
                    <span className="lg:text-xl">Click to Login</span>
                  </button>
                </Link>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
