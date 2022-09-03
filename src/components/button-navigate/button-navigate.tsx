interface Props {
    name: string
}

const ButtonNavigate = (props: Props) => {
    const navigate = () => {
        console.log(props.name)
    }
    return (
        <button className="bg-green-400 px-4 py-1 rounded-lg mt-4 hover:bg-green-300" onClick={navigate}>{props.name}</button>
    )
}

export default ButtonNavigate;
