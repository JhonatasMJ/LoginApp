const  { createContext } = require('react')

const Authg = createContext({});

export const AuthProvider = ({children}) => {
    return (
        <Authg.Provider 
            value={{ signed: false, 
            token: "adkaokdskdaksd", 
            email: "jhonatasjhmj@gmail.com",
            }}>
            {children}
        </Authg.Provider>

    )
}


export default Authg;

