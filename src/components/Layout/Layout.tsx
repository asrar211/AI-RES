import { Dock } from "./Dock"

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
        <Dock />
        {children}
        </>
    )
}