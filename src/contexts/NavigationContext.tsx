import { ReactNode, createContext } from "react"
import { useNavigate } from "react-router-dom"

interface NavigationProviderProps {
    children: ReactNode
}

export interface tagColorsProps {
    Economia: '#FF2D2D',
    Educação: '#248B28',
    Diversidades: '#24538B'
}

interface NavigationContextType {
    setNavigationPath: (id: string) => void
    tagColors: tagColorsProps
  }

export const NavigationContext = createContext({} as NavigationContextType)

export function NavigationContextProvider ({children}: NavigationProviderProps) {
    const navigate = useNavigate()

    const tagColors: tagColorsProps = {
        'Economia': '#FF2D2D',
        'Educação': '#248B28',
        'Diversidades': '#24538B'
    }

    function setNavigationPath(id: string) {
        navigate(`/article/${id}`)
    }

    return(
        <NavigationContext.Provider value={{setNavigationPath, tagColors}}>
            {children}
        </NavigationContext.Provider>
    )

}