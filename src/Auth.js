import pb from './lib/pocketbase';

export default function App() {
    return (
        <>
            <h1>Logged In: {pb.authStore.isValid.toString()}</h1>

            <form>
                <input type="text" placeholder="email" />
                <input type="password" placeholdeer="password" />

                <button type="submit">Login</button>
            </form>
        </>
    )
}