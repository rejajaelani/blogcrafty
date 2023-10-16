import { Link } from "@inertiajs/react";
import React from "react";

export default function BadgePost(props) {
    return (
        <Link
            href={route(props.route)}
            className="font-bold text-black-600 hover:text-black-900 dark:text-black-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500 bg-yellow-500 pl-2 pr-2 rounded-3xl border-2 border-solid border-black ml-1 mr-1"
        >
            {props.label}
        </Link>
    );
}
