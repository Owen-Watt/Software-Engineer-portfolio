function Job({ start, finish, title, description, software }) {
    
    return (
    <>
        <div className="flex flex-col md:flex-row h-fit items-start w-full lg:w-4/6 py-10 px-6 lg:p-10 text-white hover:bg-slate-800/70 rounded-md transition duration-200 hover:drop-shadow-lg">   
            {/* Job TimeLine */}
            <div className="mb-2 mt-1 text-s font-semibold uppercase tracking-wide text-slate-300 sm:col-span-2 min-w-[175px] hidden lg:block">
                {start} - {finish}
            </div>

            {/* Job Details */}
            <div className="flex-1 flex items-start justify-start flex-col gap-2 md:ml-10 w-full px-4 word-wrap">
                <div className="font-medium text-xl w-[300px] sm:w-fit">{title}</div>
                <div className="mb-2 mt-1 text-s font-semibold uppercase tracking-wide text-slate-300 sm:col-span-2 min-w-[175px] lg:hidden block">
                    {start} - {finish}
                </div>
                <div className="text-left text-lg text-slate-300/80 ">{description}</div>
                {/* Software tags */}
                <div className="flex gap-3 flex-wrap">
                    {software.map((s) => {
                        return <div key={s} className="flex items-center rounded-full px-3 py-1 text-orange-500 bg-orange-200/10">{s}</div>
                    })}
                </div>
            </div>
        </div>
    </>
  );
}

export default Job;
