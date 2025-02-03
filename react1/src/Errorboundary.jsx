import { Component } from "react";

class Errorboundary extends Component{
    constructor(props){
        super(props)
        this.state ={hasError:false}
    }
    static getDerivedStateFromError(error){
        console.error(error);
        
        return {hasError:true}
    }
    componentDidCatch(error,errorInfo){
    console.error(error,errorInfo);
    
    }
    render(){
        if(this.state.hasError){
            return<p>something error occured</p>
        }
    }
}
export default Errorboundary