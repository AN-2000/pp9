function Pet(name) {
  this.name = name;
  this.getName = () => {
    return this.name;
  };
}

const cat = new Pet("Fluffy"); 
//{name:fluffy,getName:function}


console.log(cat.getName());  //fluffy

const { getName } = cat;
console.log(getName()); //cat
