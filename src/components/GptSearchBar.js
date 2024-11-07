import lang from "../Utils/languageConstants"
import { useSelector } from "react-redux";
const GptSearchBar = () => {
    const langKey = useSelector(store => store.appconfigs.lang);
    return (
        <div className='pt-[10%] flex justify-center'>
        <form className='m-4 bg-black w-1/2 grid grid-cols-12'>
        <input type='text' placeholder={lang[langKey].gptSearchPlaceholder} className='p-4 m-4 col-span-9'/>
        <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3'>{lang[langKey].search}</button>

        </form> 
        </div>
    )
}
export default GptSearchBar