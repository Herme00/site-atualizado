let ul = document.querySelector(`ul`)
function openmenu(){
   ul.classList.add(`open`)
}
function closemenu(){
   ul.classList.remove(`open`)
}

document.addEventListener("DOMContentLoaded", () => {
    const listaEventos = document.getElementById("lista-eventos");

    // Array de eventos com possibilidade de vídeos ou imagens
    const eventos = [
        {
            titulo: "Workshop de Tecnologia",
            descricao: "Evento que reuniu os melhores profissionais da área para debater sobre tendências tecnológicas.",
            data: "10 de Outubro de 2024",
            midia: {
                tipo: "imagem", // Pode ser "imagem" ou "video"
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX4_WF6pOxLSIBnegDhmoOP0wI7Mn82Sq_xQ&s", // Substitua pelo link real da imagem
            },
        },
        {
            titulo: "Lançamento do Produto X",
            descricao: "Apresentação oficial do novo produto com funcionalidades inovadoras.",
            data: "15 de Novembro de 2024",
            midia: {
                tipo: "imagem", // Tipo de mídia é vídeo
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX4_WF6pOxLSIBnegDhmoOP0wI7Mn82Sq_xQ&s", // Link real do vídeo
            },
        },
        {
            titulo: "Lançamento do Produto X",
            descricao: "Apresentação oficial do novo produto com funcionalidades inovadoras.",
            data: "15 de Novembro de 2024",
            midia: {
                tipo: "imagem", // Tipo de mídia é vídeo
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX4_WF6pOxLSIBnegDhmoOP0wI7Mn82Sq_xQ&s", // Link real do vídeo
            },
        },
        {
            titulo: "Lançamento do Produto X",
            descricao: "Apresentação oficial do novo produto com funcionalidades inovadoras.",
            data: "15 de Novembro de 2024",
            midia: {
                tipo: "imagem", // Tipo de mídia é vídeo
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX4_WF6pOxLSIBnegDhmoOP0wI7Mn82Sq_xQ&s", // Link real do vídeo
            },
        },
        {
            titulo: "Lançamento do Produto X",
            descricao: "Apresentação oficial do novo produto com funcionalidades inovadoras.",
            data: "15 de Novembro de 2024",
            midia: {
                tipo: "video", // Tipo de mídia é vídeo
                src: "https://www.w3schools.com/html/mov_bbb.mp4", // Link real do vídeo
            },
        },
        {
            titulo: "Lançamento do Produto X",
            descricao: "Apresentação oficial do novo produto com funcionalidades inovadoras.",
            data: "15 de Novembro de 2024",
            midia: {
                tipo: "video", // Tipo de mídia é vídeo
                src: "https://www.w3schools.com/html/mov_bbb.mp4", // Link real do vídeo
            },
        },
        // Adicione mais eventos aqui
    ];

    // Função para criar os cartões
    eventos.forEach((evento) => {
        const eventoCard = document.createElement("div");
        eventoCard.classList.add("evento-card");

        // Adiciona a mídia (imagem ou vídeo)
        const midiaHTML =
            evento.midia.tipo === "imagem"
                ? `<img src="${evento.midia.src}" alt="Imagem do evento" />`
                : `<video src="${evento.midia.src}" controls></video>`;

        eventoCard.innerHTML = `
            <div class="evento-midia">
                ${midiaHTML}
            </div>
            <div class="evento-info">
                <h3 class="evento-titulo">${evento.titulo}</h3>
                <p class="evento-descricao">${evento.descricao}</p>
                <p class="evento-data">${evento.data}</p>
                <a href="#" class="evento-link">Saiba Mais</a>
            </div>
        `;

        listaEventos.appendChild(eventoCard);
    });
});


async function carregarEventos() {
    const response = await fetch('YOUR_GOOGLE_DRIVE_API_ENDPOINT_FOR_EVENTOS');
    const data = await response.json();

    const listaEventos = document.getElementById("lista-eventos");
    listaEventos.innerHTML = ""; // Limpa a lista atual

    data.forEach(evento => {
        const eventoItem = document.createElement("div");
        eventoItem.classList.add("evento-item");
        eventoItem.innerHTML = `
            <div class="evento-info">
                <h3>${evento.titulo}</h3>
                <p><strong>Data:</strong> ${evento.data}</p>
                <p><strong>Descrição:</strong> ${evento.descricao}</p>
                <p><strong>Local:</strong> ${evento.local}</p>
                <img src="${evento.imagem}" class="evento-imagem" alt="Imagem do evento">
            </div>
        `;
        listaEventos.appendChild(eventoItem);
    });
}
document.addEventListener("DOMContentLoaded", () => {
   
    carregarEventos();
});

