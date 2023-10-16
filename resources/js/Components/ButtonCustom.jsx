import { Link } from "@inertiajs/react";
import React from "react";

export default function ButtonCustom(props) {
    return (
        <Link
            href={route(props.route)}
            className="font-semibold text-black-600 hover:text-black-900 dark:text-black-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500 bg-yellow-500 p-2 rounded-xl border-2 border-solid border-black ml-1 mr-1"
        >
            {props.label}
        </Link>
    );
}
