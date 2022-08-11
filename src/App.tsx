import Counter from "./counter"
interface Appprops {
    color  ?: string
}
function App({color} : Appprops):JSX.Element
{
    return <>
            <Counter name="hamid" age={23} address="tehran-iran"/>
            </>
}
export default App