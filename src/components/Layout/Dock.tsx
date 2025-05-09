import { HomeIcon, PencilIcon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
  
const DATA = {
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "/create", icon: PencilIcon, label: "Create" },
    ],
};

export const Dock = () => {
    return (
        <div className="bg-white rounded-xl fixed bottom-10 left-[50%] translate-x-[-50%] flex flex-col items-center justify-center">

            <div className="border-[1px] border-neutral-300 flex gap-5 rounded-xl items-center justify-center py-3 px-5">
                <div className="flex gap-5 border-r-1 border-neutral-300 pr-5">
                    {DATA.navbar.map((item, index) => (
                        <div key={index} className="group relative flex items-center">
                            <Link 
                                to={item.href}
                                aria-label={item.label}
                                className="p-2 hover:bg-neutral-100 rounded-full hover:scale-110 transition-all duration-300 ease-in-out"
                            >
                                <item.icon className="size-5" />
                            </Link>
                            <span className="absolute left-1/2 transform -translate-x-1/2 mt-[-50px] text-xs text-black bg-white rounded-md p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>

                <div>
                    <Sun className="size-5" />
                </div>
            </div>
        </div>
    );
};
