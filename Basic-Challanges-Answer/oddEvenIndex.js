function oddEven()
{
    let number = document.getElementById("oddEven").value;
    if(number%2==0) 
    {
        document.getElementById("odd_even").innerHTML="The number is Even";
    }
    else
    {
        document.getElementById("odd_even").innerHTML="The number is Odd";
    }
    
}