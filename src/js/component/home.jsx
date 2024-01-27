import React, { useState, useEffect} from 'react';

const Semaforo = () => {
	const [color, setColor] = useState('')
    setInterval (()=>{
		let colors = ['red','yellow','green']
		let randomColorsIndex = Math.floor(Math.random()* 3)
		setColor(colors[randomColorsIndex]);
	}, 3000);
	return (
		<div className='container text-center p-3 bg-black' style={{width: "100px", height:"230px"}}>
			<div className={`rounded-circle bg-danger mx-auto ${color === 'red'? 'sombra': ''}`} style={{width: '60px', height:'60px'}} onClick={()=>{ setColor('red')}}></div>
			<div className={`rounded-circle bg-warning mx-auto ${color === 'yellow'? 'sombra': ''}`}style={{width: '60px', height:'60px'}} onClick={()=>{ setColor('yellow')}}></div>
			<div className={`rounded-circle bg-success mx-auto ${color === 'green'? 'sombra': ''}`} style={{width: '60px', height:'60px'}} onClick={()=>{ setColor('green')}}></div>
		</div>
	)
}
export default Semaforo;