import Button from "@/app/buttons";

export default function Letterpad() {
    return (
        <>
            <main className="mt-40">
                <div className="text-start ">
                    <div className="flex flex-col px-40">
                        <h4 className="text-2xl font-bold">
                            Sign Up To The Free Newsletter
                        </h4>
                        <input type="email" name="Email-box" id="box" placeholder="Email here" className="border-2 mt-6 m-6 bg-white shadow-xl h-11 shadow-gray-500 rounded-md  w-80" />
                        <Button item="Subscribe" />
                    </div>
                </div>
                <div>

                </div>
            </main>
        </>
    )
}