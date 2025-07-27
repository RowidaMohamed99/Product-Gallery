import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
    return <>
    <div className="flex justify-center items-center h-screen bg-white dark:bg-gray-900">
        <ClipLoader color="#be185d" size={50} />
    </div>
    </>
}
