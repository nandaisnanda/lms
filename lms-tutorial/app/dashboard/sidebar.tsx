import { Logo } from "./logo"
export const Sidebar = () => {
    return (
        <div className="h-full border-r flex flex-col overflow-y-auto bg-red-900 shadow-sm">
            <div className="p-10">
            <Logo />
            </div>
        </div>
    )
}