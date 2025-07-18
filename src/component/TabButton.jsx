export default function TabButton({children,onSelect})
{
    function handleClick(){
   
    }
    return (
        <li>
        <button onClick={onSelect}>
        {children}
        </button>
        </li>

    );
}