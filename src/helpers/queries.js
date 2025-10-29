const taskList = import.meta.env.VITE_API_VARIABLE;
console.log(taskList)

export const getTasks = async () => {
    try{
        const dataParse = await fetch(taskList);
        return dataParse;
    }catch(error){
        console.error(error)
        return null;
    }
}