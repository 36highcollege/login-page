import Button from "@/app/buttons";

export default function Letterpad() {
    return (
        <>
            <main className="mt-12 flex z-50 absolute">
                <div className="text-start ">
                    <div className="flex flex-col text-start px-40">
                        <h4 className="text-2xl font-bold">
                            Sign Up To The Free Newsletter
                        </h4>
                        <input type="email" name="Email-box" id="box" required placeholder="Email here" className="border-2 mt-6 my-8 bg-white shadow-xl h-11 shadow-gray-500 rounded-md  w-80" />
                        <Button item="Subscribe" />
                    </div>
                </div>
                <div>
                    <img src="journey 2.svg" alt="bus" />
                </div>


            </main>
                <img src="ltpadbg.svg" alt="bg" className="-z-50 relative top-3 bottom-0 right-0 left-0"/>
        </>
    )
}