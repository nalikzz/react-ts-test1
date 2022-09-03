import { FunctionComponent, useState } from "react";
import UserCard from "../UserCard/UserCard";
import './UserForm.scss'

const UserForm: FunctionComponent = () => {

    const initialList: Array<{ address: string, name: string, price: string }> = [];

    const [users, setUserList] = useState(initialList)
    const [userForm, setUserForm] = useState({
        address: '',
        name: '',
        price: ''
    });

    const nameChangeHandler = (event: any) => {
        setUserForm((prevState) => {
            return { ...prevState, name: event.target.value }
        })
    }

    const addressChangeHandler = (event: any) => {
        setUserForm((prevState) => {
            return { ...prevState, address: event.target.value }
        })
    }

    const priceChangeHandler = (event: any) => {
        setUserForm((prevState) => {
            return { ...prevState, price: event.target.value }
        })
    }

    const submit = (event: any) => {
        event.preventDefault()
        setUserList((prevState) => {
            return [...prevState, userForm]
        });
        clearForm();
    }

    const clearForm = () => {
        setUserForm(() => {
            return { address: '', price: '', name: '' }
        })
    }

    const onRemoveUser = (index: number) => {
        console.log('index', index);
    }

    return (
        <div>
            <form className="flex flex-col p-4 my-4 bg-green-500 w-96 rounded-lg gap-4" onSubmit={submit}>
                <h1 className="font-bold text-xl text-gray-900 text-center">User Form</h1>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-medium">Name</label>
                    <input type="text" name="name" className="rounded-md outline-none px-2 py-1" value={userForm.name} onChange={nameChangeHandler} />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="address" className="font-medium">Address</label>
                    <input type="text" name="address" className="rounded-md outline-none px-2 py-1" value={userForm.address} onChange={addressChangeHandler} />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="price" className="font-medium">Price</label>
                    <input type="number" name="price" className="rounded-md outline-none px-2 py-1" min='0.1' step='4' value={userForm.price} onChange={priceChangeHandler} />
                </div>
                <div>
                    <button className="rounded-lg bg-blue-500 hover:bg-blue-400 active:bg-blue-700 text-white py-1 px-2" >Submit</button>
                </div>
            </form>
            <div className="grid gap-2 grid-auto-200 w-full">
                {users.map((user, index) => <UserCard onRemoveByIndex={() => { onRemoveUser(index) }} name={user.name} address={user.address} price={user.price} key={user.name} />)}
            </div>
        </div>
    );
}

export default UserForm;