

export const checkvailddata = (Email,Password) => {

   const IsEmailVaild =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(Email)
   
   const IsPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password)

//    if(Name){const isNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(Name)
//     if(!isNameValid) return "Name In Invalid Format"
//    }
   
  
   if(!IsEmailVaild) return "Email Id is not Vaild"
   if(!IsPasswordValid) return "password is not valid"
   

   return null;
}