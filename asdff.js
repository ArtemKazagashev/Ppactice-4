console.log("Zadanie first")
let pass = prompt("password:" )
if ( pass.length > 4 && ( pass.includes('_') || pass.includes('-') ) )
{console.log("YA SILNYI")}
else
{console.log("YA SLABYI")}