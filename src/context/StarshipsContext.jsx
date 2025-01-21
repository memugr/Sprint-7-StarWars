import { createContext, useContext } from 'react'

export const StarshipsContext = createContext()

export function useStarshipsContext() {
    const context = useContext(StarshipsContext)
    if (!context) {
        throw new Error('useStarshipsContext must be used within a StarshipsProvider')
    }
    return context
}