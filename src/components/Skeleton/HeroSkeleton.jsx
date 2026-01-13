import React from 'react'

function HeroSkeleton() {
    return (
        <div className="relative h-[70vh] xl:h-[90vh] w-full overflow-hidden bg-black">
            <div className="absolute inset-0 flex items-center">
                <div className="px-6 md:px-16 max-w-2xl w-full">
                    <div className="flex flex-col gap-4 w-full">
                        <div className="h-10 md:h-20 w-full rounded-2xl bg-slate-800 animate-pulse" />
                        <div className="h-10 md:h-20 w-full rounded-2xl bg-slate-800 animate-pulse" />

                        {/* Button */}
                        <div className="mt-4 h-10 w-32 rounded-xl bg-slate-700 animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSkeleton
