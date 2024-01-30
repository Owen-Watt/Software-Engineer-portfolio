function Job({ start, finish, title, description, software }) {
    
    return (
    <>
        <div className="flex items-center justify-between w-4/6 py-10 px-8 text-white hover:bg-slate-800/70 rounded-xl transition duration-200 ease-in-out hover:drop-shadow-lg">   
            {/* Job TimeLine */}
            <div className="mb-2 mt-1 text-s font-semibold uppercase tracking-wide text-slate-300 sm:col-span-2">
                {start} - {finish}
            </div>

            {/* Job Details */}
            <div className="flex-1 flex items-start justify-start flex-col gap-2 ml-10">
                <div className="font-medium text-xl">{title}</div>
                <div className="text-left text-lg text-slate-300/80">{description}</div>
                {/* Software tags */}
                <div className="flex gap-3">
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
