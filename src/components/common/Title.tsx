import React from "react"

type TitleProps = {
    children: React.ReactNode
}

const Title: React.FC<TitleProps> = ({children}) => {
    return <h1 className="text-3xl text-green font-bold uppercase">{children}</h1>
}

export default Title;