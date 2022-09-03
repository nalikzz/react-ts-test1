interface Props {
    name: string,
    address: string,
    price: string,
    onRemoveByIndex():void
}

const UserCard = (props: Props) => {

    const onRemoveByIndex = () => {
        props.onRemoveByIndex()
    }

    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            {/* <img className="rounded-t-lg" src="https://tailwindcss.com/_next/static/media/card.3d80182964bf472d96562ebad7f76065.jpg" /> */}
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.address} : {props.price}</p>
                <div className="flex items-center justify-between gap-1 2">
                    <button className="cursor-pointer inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                    </button>
                    <button className="p-1 flex items-center rounded bg-red-600 hover:bg-red-500" onClick={() => { onRemoveByIndex() }}><span className="material-icons text-red-200">
                        delete
                    </span></button>
                </div>
            </div>
        </div >
    );
}

export default UserCard;