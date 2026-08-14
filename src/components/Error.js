import {useRouteError} from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div className="max-w-xl mx-auto mt-10 p-6 rounded-xl bg-red-50 border border-red-200 text-center shadow-md">
            <h1 className="text-2xl font-bold text-red-600">Oops!!!</h1>
            <h2 className="mt-2 text-lg text-gray-700">Something went wrong.</h2>
            <h3 className="mt-3 text-gray-600">{error?.status} : {error?.statusText}</h3>
        </div>
    );
}

export default Error;