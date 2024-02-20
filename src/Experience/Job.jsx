function Job({ start, finish, title, description, software }) {
    
    return (
    <>
        <div className="flex flex-col md:flex-row items-start w-full lg:w-4/6 py-10 px-5 lg:p-10 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-slate-800/70 rounded-md transition duration-200 hover:drop-shadow-lg">   
            {/* Job TimeLine */}
            <div className="mb-2 mt-1 text-s font-semibold uppercase tracking-wide dark:text-slate-300 sm:col-span-2 min-w-[175px] hidden lg:block">
                {start} - {finish}
            </div>

            {/* Job Details */}
            <div className="flex-1 flex items-start justify-start flex-col gap-2 md:ml-10 w-full px-4 word-wrap">
                <div className="font-medium text-xl w-[300px] sm:w-fit">{title}</div>
                <div className="mb-2 mt-1 text-s font-semibold uppercase tracking-wide dark:text-slate-300 sm:col-span-2 min-w-[175px] lg:hidden block">
                    {start} - {finish}
                </div>
                <div className="text-left text-lg dark:text-slate-300/80 ">{description}</div>
                {/* Software tags */}
                <div className="flex gap-3 flex-wrap">
                    {software.map((s) => {
                        return <div key={s} className="flex items-center rounded-full px-3 py-1 text-blue-800 bg-blue-100 dark:text-orange-500 dark:bg-orange-200/10">{s}</div>
                    })}
                </div>
            </div>
        </div>
    </>
  );
}

export default Job;
