function greet(name)
{
    if(name === "Johnny")
    {
        return "Hello , My Love";
    }
    else 
    {
        return "hello ," + name + "!";
    }
}

const Name1 = greet("John");
console.log(Name1);

const Name2 = greet("Johnny");
console.log(Name2);

const Name3 = greet("Zack");
console.log(Name3);