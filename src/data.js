

export const getJsonData = async (url) => {
    try {
        const response = await fetch (url)
        return response.json();
    }catch{
        throw new Error("response is not defiant")
    }    
}
