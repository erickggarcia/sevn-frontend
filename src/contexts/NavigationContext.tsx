import { ReactNode, createContext, useState } from "react"
import { useNavigate } from "react-router-dom"

interface NavigationProviderProps {
    children: ReactNode
}

export type propTags = 'Economia' | 'Educação' | 'Diversidades'

export interface iArticles {
    id: number
    tag: propTags
    photo?: string
    title: string
    subtitle: string
    article: string
    createdAt: string
}

export interface tagColorsProps {
    Economia: '#FF2D2D',
    Educação: '#248B28',
    Diversidades: '#24538B'
}

interface NavigationContextType {
    tagColors: tagColorsProps
    loading: boolean
    setNavigationPath: (id: string) => void
    inactiveLoading: () => void
    activeLoading: () => void
}

export const NavigationContext = createContext({} as NavigationContextType)

export function NavigationContextProvider({ children }: NavigationProviderProps) {
    const [loading, setLoading] = useState<boolean>(true)
    const navigate = useNavigate()

    function inactiveLoading() {
        setLoading(false)
    }

    function activeLoading() {
        setLoading(true)
    }

    const tagColors: tagColorsProps = {
        'Economia': '#FF2D2D',
        'Educação': '#248B28',
        'Diversidades': '#24538B'
    }

    function setNavigationPath(id: string) {
        navigate(`/article/${id}`)
    }

    return (
        <NavigationContext.Provider value={{ setNavigationPath, tagColors, loading, inactiveLoading, activeLoading }}>
            {children}
        </NavigationContext.Provider>
    )

}