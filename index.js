const employee={
    firstName:"sakthi",
    lastName:"vel"
}

let getFullName=function(postion){
    console.log(this.firstName+""+this.lastName+" your job role is "+postion)
}


// getFullName.call(employee,"software developer")


// getFullName.apply(employee,["software developer"])


const fullname=getFullName.bind(employee,"software developer")

console.log(fullname())
