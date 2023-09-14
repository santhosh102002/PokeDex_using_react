function useDebounce(cb,delay=2000)
{   
    let timeoutId;
    return (...args)=>{
       clearTimeout(timeoutId);
       timeoutId = setTimeout(()=>{
       cb(...args); 
       },delay)
    }

}

export default useDebounce