import Navber from "@/Components/Navber";

const DashboardLayout = ({children}) => {
    return (
        <div>
            <div className="bg-slate-700 text-white"> 
                <h1>Dashboard Layout</h1>
            </div>
            {children}
    
        </div>
    );
};

export default DashboardLayout;