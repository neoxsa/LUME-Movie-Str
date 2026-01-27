import React from 'react'

function HeroSkeletonDetailView() {
    return (
        <div className="elative -top-17 w-full h-full lg:h-[90vh] overflow-hidden bg-black">

            <div className="inset-0 flex h-full w-full items-center justify-center flex-col lg:flex-row gap-5 mt-25 ">
                {/* Card */}
                <div className="w-48 h-80 md:w-64 md:h-96 lg:w-80 lg:h-112 rounded-2xl shadow-2xl border border-white/20 bg-slate-800 animate-pulse" />
                {/* Content */}
                <div className="px-6 md:px-16 w-full space-y-3 lg:space-y-6 max-w-2xl">
                    <div className="flex flex-col gap-4 w-full">
                        <div className="h-10 md:h-20 w-full rounded-2xl bg-slate-800 animate-pulse" />
                        <div className="h-10 md:h-20 w-full rounded-2xl bg-slate-800 animate-pulse" />

                        {/* Button */}
                        <div className="mt-4 h-10 w-32 rounded-xl bg-slate-700 animate-pulse mb-5" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSkeletonDetailView
