import Image from "next/image"
import React from "react"
import loadingCircle from "@/public/icons/loading-circle.svg"
const Loader = () => {
  return (
    <div className="flex-center h-screen w-full">
      <Image src={loadingCircle} width={50} height={50} alt="loading" />
    </div>
  )
}

export default Loader
