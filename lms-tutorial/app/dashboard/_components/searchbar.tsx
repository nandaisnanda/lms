import { Search, User } from "lucide-react"

export const Searchbar  = () => {
    return (
        <div className="flex gap-3 text-[14px] items-center border p-2 rounded-md bg-gray-50 text-gray-500">
            <Search height={20}/>
            <input type="text" placeholder="Search for courses or quiz" className="bg-transparent outline-none">
            </input>
        </div>
        
    )}
