const taskList = import.meta.env.VITE_API_VARIABLE;
console.log(taskList)

export const getTasks = async () => {
    try{
        const response = await fetch(taskList);
        return response;
    }catch(error){
        console.error(error)
        return null;
    }
}