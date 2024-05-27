import { ReactNode, createContext } from "react"
import { useNavigate } from "react-router-dom"

interface NavigationProviderProps {
    children: ReactNode
}

interface NavigationContextType {
    setNavigationPath: (id: string) => void
  }


export const NavigationContext = createContext({} as NavigationContextType)

export function NavigationContextProvider ({children}: NavigationProviderProps) {
    const navigate = useNavigate()

    
    function setNavigationPath(id: string) {
        navigate(`/article/${id}`)
    }

    return(
        <NavigationContext.Provider value={{setNavigationPath}}>
            {children}
        </NavigationContext.Provider>
    )

}