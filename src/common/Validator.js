const regularExp = {
    contains_alphaNumeric : /^(?!-)(?!.*-)[A-Za-z0-9-]+(?<!-)$/,
    containsNumber : /\d+/,
    containsAlphabet : /[a-zA-Z]/,
    onlyLetters : /^[A-Za-z]+$/,
    onlyNumbers : /^[0-9]+$/,
    onlyMixOfAlphaNumeric : /^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/,
    emailUsername:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    containsAt:'@',
    emailDomain:/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    linkedInUrl:"www.linkedin.com",
    password:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  }
  
  export const validator={
    isUndefined:value=>{
      if(value==undefined)
        return true;
      return false;
    },
    isEmpty:value=>{
      if(value.length===0)
        return true;
      return false;
    },
    isCharacter:value=>{
      if(!regularExp.onlyLetters.test(value))
        return true;
      return false;
    },
    isNumeric:value=>{
      if(!regularExp.onlyNumbers.test(value))
        return true;
      return false;
    },
    isEmailUserName:value=>{
      if(regularExp.emailUsername.test(value) || value.includes(regularExp.containsAt))
        return true;
      return false;
    },
    isEmailDomain:value=>{
      if(!regularExp.emailDomain.test(value))
        return true;
      return false;
    },
    isLinkedInUrl:value=>{
      if(!value.startsWith(regularExp.linkedInUrl))
        return true;
      return false;
    },
    isContainNumber:value=>{
        if(regularExp.containsNumber.test(value))
            return true;
        return false;
    },
    isPassword:value=>{
        if(!regularExp.password.test(value))
            return true;
        return false;
        
    },
    isContainAlphabet:value=>{
      if(regularExp.containsAlphabet.test(value))
            return true;
      return false;
    }

  
  }

  export default validator;