import zxcvbn from"zxcvbn"
export function validateEmail(email) {
    
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
  }

export function validatePasswordStrength(password){
  const strength = zxcvbn(password);
  let strengthMeter = {status:"",color:""}
    const result = (value) => {
    switch(value.score){
    case 0:
    return "Very poor";
    case 1:
      return "Poor";
      case 2:
      return "Good";
      case 3:
        return "Strong";
        case 4:
          return "Very strong";
          default:
            return "";
    }
    
    }
    const color = (value) =>{
      switch(value.score){
        case 0:
          return "!text-veryWeak";
          case 1:
            return "!text-weak";
            case 2:
            return "!text-good";
            case 3:
              return "!text-strong";
              case 4:
                return "!text-veryStrong";
                default:
                  return "";
            
        }
    }
    const border = (value) =>{
    switch(value.score){
    case 0:
      return "!border-veryWeak hover:border-veryWeak focus:border-veryWeak";
      case 1:
        return "!border-weak hover:border-weak focus:!border-weak";
        case 2:
        return "!border-good hover:border-good focus:border-good";
        case 3:
          return "!border-strong hover:border-strong focus:border-strong";
          case 4:
            return "!border-veryStrong hover:border-veryStrong focus:border-veryStrong";
            default:
              return "";
        
    }
    }
    if(password.length>0){
      strengthMeter = {status:result(strength),border:border(strength),color:color(strength)}
    }
return strengthMeter

}
  
  export function validatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(phone);
  }