const Videotitle = (props) => {
    const {title,overview} = props
    return(
        <div className="pt-[25%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video ">
            <div className="-mt-[40px]">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className=" w-1/3 py-6">{overview}</p>
        </div>
        <div>
            <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-50">▶️ Play</button>
            <button className="bg-black text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg mx-2">More Info..</button>
        </div>
        </div>
    )
}

export default Videotitle;