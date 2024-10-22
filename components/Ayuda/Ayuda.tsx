import { FC } from "react"
import BlogComponent from "./BlogComponent"
import Navbar from "../Navbar/Navbar"


export const Ayuda: FC = () => {
    return (
        <>
            <div className="w-full flex flex-col bg-gray-100 items-center justify-start min-h-screen gap-8 pt-4">
<Navbar/>

            <div className="flex items-center justify-center">
            <BlogComponent/>
            </div>
            </div>

        </>
    )
}

