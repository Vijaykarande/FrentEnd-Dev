

let random= Math.random()

let first, second,third;

if(random<0.33)
{
    first="crazy"
}

else if(random <0.66 && random>=0.33)
{
    first="Amazing"
}
else
{
    first="Fire"
}

//second word
random= Math.random()
if(random<0.33)
    {
        second="engine"
    }
    
    else if(random <0.66 && random>=0.33)
    {
        second="foods"
    }
    else
    {
        second="garments"
    }


    //third word

     random= Math.random()

    if(random<0.33)
        {
            third="Bros"
        }
        
        else if(random <0.66 && random>=0.33)
        {
            third="Limited"
        }
        else
        {
            third="hub"
        }


        console.log(`${first} ${second} ${third}`)