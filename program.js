function pairElement(str) { 
    const arrDNA = []; 
 
   const arrStr = str.split('');
 
    arrStr.forEach(element => {
 
     switch (element) {
       case "G": 
        arrDNA.push(["G","C"]);
        break       
       case "C":   
        arrDNA.push(["C","G"]);
        break;        
     }    
   });
 
   return arrDNA;
 }
 pairElement("GCG");
 