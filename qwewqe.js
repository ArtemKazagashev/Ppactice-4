let name=prompt("NAME: "); let surname=prompt("SACOND NAME: ");

let upname=name.toUpperCase(); let upsurname=surname.toUpperCase();

let standartusername=upname.substr(1);

let normalsurname=upsurname.substr(1);

standartusername=standartusername.toLowerCase(); normalsurname=normalsurname.toLowerCase();

let n_surname=upsurname[0]; let n_name=upname[0];

let last_name=n_name+standartusername;

let last_surname=n_surname+normalsurname;

if(last_name==name&&last_surname==surname)

{alert(name+" "+surname+"    "+"correct name.");}

else{if(last_name==name&&last_surname!=surname) {alert(name+" "+last_surname+"    "+"The name type is correct. The type of names is normalized.");}
else{if(last_name!=name&&last_surname==surname) {alert(last_name+" "+surname+"    "+"Name type converted to standard. Surname type is correct.");}
else{alert(last_name+" "+last_surname+"     "+"First and last name types converted to standard.");}};}