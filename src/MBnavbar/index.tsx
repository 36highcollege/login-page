import { NavItem } from "@/app/navbar";


export default function Mbnav() {
    return (
        <>
            <div className="flex flex-col text-center w-full bg-gray-400  space-y-1  p-4 mt-1 border-8 border-cyan-300">
                {
                    NavItem.map((item: any) => (
                        <>
                            <div className="w-full  hover:cursor-pointer  ">
                                {item.lable}
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}