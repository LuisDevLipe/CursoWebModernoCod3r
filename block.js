function hello(){
    console.log('Olá mundo') ;
    console.log(5) ;
}
hello();

{
    var num=4 ;
    console.log(num) ;
}
{
  console.log('bloco 1') ;
  {
    console.log(`bloco 2`) ;
    {
        console.log(`bloco dentro de código`) ;
        {
            {
                {
                    ;
                    ;
                    ;
                }
            }
        }
    }
  }
}
console.log('Fim') ;