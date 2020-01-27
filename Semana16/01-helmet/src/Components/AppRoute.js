import React from 'react'
import {Route} from "react-router-dom"

export default function AppRoute({component: Component, layout:Layout, ...rest}) {
    console.log(rest)
  
    return (
        <Route
        {...rest}
        render={props => {
            console.log(props)
            return(
                
            <Layout {...rest}>
                <Component  {...props}/>
            </Layout>
            )}}
        />
    )
}

