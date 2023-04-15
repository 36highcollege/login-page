interface Navbar {
    lable: string,
    path?: string,

}
export const NavItem: Array<Navbar> = [
    {
        lable: "Home",
        path: "/"
    },
    {
        lable: "About",
        path: "/"
    },
    {
        lable: "Courses",
        path: "/"
    },
    {
        lable: "Contact",
        path: "/"
    },
];
export default function Nbar() {
    return (
        <>
            <div className="hidden sm:flex h-20 items-center  space-x-10 ">
                {NavItem.map((item: any) => (
                    <>
                        <div className="hover:mb-4  hover:underline  hover:text-green-500 font-bold text-xl transition-all duration-700 ">
                            <div className="cursor-pointer select-none">
                                {item.lable}
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}
