// import React from "react";

// interface CounterProps{
//     name ?: string ; 
//     age : number ; 
//     address : string ; 
// }
// export default class Counter extends React.Component<CounterProps>
// {
//     state = {
//         count : 0 
//     }
//     onInc = (): void=> 
//     {
//         this.setState({count : this.state.count + 1})
//     }

//     dec = (): void=> 
//     {
//         this.setState({count : this.state.count - 1})
//     }

//     render(): React.ReactNode {
//         return <>
//                 <div>
//                     <button onClick={this.onInc}>
//                             increment
//                     </button>
//                     <button onClick={this.dec}>
//                             decrement
//                     </button>
//                     <h1>
//                         {
//                             this.state.count
//                         }
//                     </h1>
//                 </div>
//             </>
//     }
// }

// state using generic type 
import React from "react";

interface CounterProps{
    name ?: string ; 
    age : number ; 
    address : string ; 
}

interface CounterState {
    count : number
}
export default class Counter extends React.Component<CounterProps , CounterState >
{
    
    constructor(props:CounterProps)
    {
        super(props); 
        this.state = { count  : 0 }
    }
    onInc = (): void=> 
    {
        this.setState({count : this.state.count + 1})
    }

    dec = (): void=> 
    {
        this.setState({count : this.state.count - 1})
    }

    render(): React.ReactNode {
        return <>
                <div>
                    <button onClick={this.onInc}>
                            increment
                    </button>
                    <button onClick={this.dec}>
                            decrement
                    </button>
                    <h1>
                        {
                            this.state.count
                        }
                    </h1>
                </div>
            </>
    }
}