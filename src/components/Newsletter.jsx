import React from "react";

function Newsletter() {
    return (
        <section className="mt-20 px-4">
            <form
                className="flex flex-col items-center gap-6 max-w-xl mx-auto"
            >
                <label className="text-xl md:text-2xl font-medium text-center">
                    Subscribe to get latest{" "}
                    <span className="text-red-500">updates</span>
                </label>

                {/* Input + Button */}
                <div
                    className="flex flex-col sm:flex-row gap-3 w-full"
                >
                    <input
                        type="email"
                        placeholder="johndoe@example.com"
                        className="w-full border px-4 py-3 text-base md:text-lg rounded-xl outline-none  focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        aria-label="Email address"
                    />

                    <button
                        type="submit"
                        className="w-full sm:w-auto  bg-red-500 hover:bg-red-600 active:bg-red-600  px-6 py-3 rounded-xl text-base md:text-lg font-medium transition  active:scale-9 "
                    >
                        Subscribe
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Newsletter;
