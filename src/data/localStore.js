const KEY = 'some_key'

export const localData = {
    getLocalStorageData:function(){
        return JSON.parse(localStorage.getItem(KEY))
    },

    setLocalStorageData:function(data){
        localStorage.setItem(KEY,JSON.stringify(data))
    },

    clearLocalStorage:function(){
        localStorage.clear();
    }
}

