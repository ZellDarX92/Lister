/**
* @name localstorage
* @description Données persistantes dans le nav
* @author MA
* @version version 1.0
**/

export default{
    save(key, value){
        localStorage.setItem(key, JSON.stringify(value))
    },
    load(key){
        const value = localStorage.getItem(key);
        if(value != null){ 
            //reconvertir le string json en valeurs js
            return JSON.parse(value)
        };

        return null;
    },
    delete(){}
}