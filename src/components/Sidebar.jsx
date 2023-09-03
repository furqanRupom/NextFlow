import logo from "../assets/nexusFlow.png"

const  Sidebar = () => {

    return (
        <header className="min-h-screen bg-slate-900 shadow">
            <div className="flex items-center">
            <img className="w-24 h-24 object-cover" src={logo} alt="logo" />
            <h3 className="text-2xl text-white mb-2 font-semibold -ml-5"> Nexus<span className="text-slate-500"> Flow</span></h3>
            </div>


        </header>
    );
};


export default Sidebar;