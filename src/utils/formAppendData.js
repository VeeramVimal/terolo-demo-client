export const FormAppendData = (Obj) => {
    const formAppended = new FormData();
    Object.entries(Obj)?.forEach(([key, value]) => {
        if(typeof value === null || typeof value === undefined) return
        if(typeof value === "object"){
            //  console.log("value========",value);
        }
    })
}