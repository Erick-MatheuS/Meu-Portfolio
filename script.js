function carregar() {
    setInterval(function () {
        const time = document.querySelector("#time");
        if (!time) {
            console.error("Elemento #time não encontrado na página!");
            return;
        }

        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let day_night = "AM"; // Assume AM por padrão

        // Determina se é PM
        if (hours >= 12) {
            day_night = "PM";
        }

        // Converte horas para o formato 12h
        if (hours > 12) {
            hours = hours - 12;
        } else if (hours === 0) {
            hours = 12; // Ajusta para 12h no período da meia-noite
        }

        // Adiciona zero à esquerda quando necessário
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // Atualiza o texto do elemento
        time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
    }, 1000); // Atualiza a cada 1 segundo
}