class Store{
    subscribers=[]
    counter=0

    subscribe(callback){
        this.subscribers.push(callback)
    }

    pushNotification(value){
        this.subscribers.forEach(e=>e(value))
    }

    increment(){
        console.log("Increment "+this.counter)
        this.counter+=1
        this.pushNotification(this.counter)
    }
}

export const store=new Store();