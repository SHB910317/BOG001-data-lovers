/*estas funciones son de ejemplo

export const example = () => {
  return 'example';
}; */

export const sortData = (data,valorSelect)=>{

  if (valorSelect ==="a-z") {

    data.sort((a,z)=>{
    
      if (a.name > z.name){
        return 1;
      }
      else {
        return -1;
      }


    });
  return data;

  };
return "sortData";
};
sortData(); 
