import { Sidebarnav }  from "./_components/sidebarnav";
import { Header }  from "./_components/header";
const DashboardLayout = (
    {
        children 
    }: {
        children?: React.ReactNode;
    }
) => {
    return (
        <div>
            <div className="h-ful w-80 flex-col fixed inset-y-0 z-50">
            <Sidebarnav />
            </div>
        <Header />
        <div className="ml-80 p-5 ">
        {children}
        </div>
        </div>
    );
}
export default DashboardLayout;