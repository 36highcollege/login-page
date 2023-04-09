"use client"
import { ThemeProvider } from "next-themes";

export default function Wraper({ children }: any) {
    return (
        <>
            <ThemeProvider>
                <div className="max-w-5xl mx-auto">
                    {children}
                </div>
            </ThemeProvider>
        </>
    )
}