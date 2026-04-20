const iniciarCronometro =(req,res)=>{
   res.status(200).json({mensagem:'Iniciado '})  
  
}
const pausarCronometro =(req,res)=>{

}
const continuarCronometro= (req,res)=>{

}
const zerarCronometro=(req,res)=>{
    res.status(200).json({mensagem:'Zerado '})    
}

module.exports ={
    iniciarCronometro,
    pausarCronometro,
    continuarCronometro,
    zerarCronometro
}