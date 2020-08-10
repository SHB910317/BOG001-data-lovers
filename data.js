/*estas funciones son de ejemplo

export const example = () => {
  return 'example';
}; */

export const sortData = (data,valorSelect)=>{

    let sorteando = data.sort((a,z)=>{
    
      if (a.name > z.name){
        return 1;
      }
      else {
        return -1;
      }

    });

  
  if (valorSelect==="z-a") {

    sorteando.reverse()
  }
  return sorteando;

  };
 
