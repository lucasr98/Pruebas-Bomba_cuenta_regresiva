const numero = document.getElementById("numero");

let contador = 5;

let i = 0;

function cuentaRegresiva(){
	i = contador;
	const Conteo = setInterval(()=>{
		if (i >= 0) {
			if (i >= 10) {
				numero.innerHTML = `${i}`;
			}
			else if (i <= 9) {
				numero.innerHTML = `0${i}`;
				if (i <= 3) {
					numero.style.color = "#E03143";
				}
			}
			i = i - 1;
		}
		else if (i == -1){
			numero.style.transform = "scale(10)";
			numero.style.opacity = "0";
			i = i - 1;
		}
		else if (i == -2) {
			numero.style.transform = "scale(1)";
			numero.style.opacity = "1";
			numero.innerHTML = "";
			i = i - 1;
		}
		else if (i == -3) {
			i = 0;
			numero.style.color = "#fff";
			return Retornar();
		}
	}, 1000)

	function Retornar(){
		clearInterval(Conteo);
	}
}

numero.addEventListener("click", cuentaRegresiva);