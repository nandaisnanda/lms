import { Sidebar } from "./sidebar";

const DashboardLayout =  (
    {
        children 
    }: {
        children?: React.ReactNode;
    }
) => {
    return (
        <div className="h-full">
            <div className="hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-60">
                <Sidebar />
            </div>
        {children}
        </div>
    );
}
export default DashboardLayout;