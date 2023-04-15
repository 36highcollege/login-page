
export default function Button(props: any) {
    const { item } = props
    return (
        <>
            <button className="bg-teal-400  h-11 w-28   active:scale-125 hover:scale-90 rounded-lg transition-all duration-300 hover:rounded-xl font-semibol select-none ">
                {item}
            </button>
        </>
    )
}