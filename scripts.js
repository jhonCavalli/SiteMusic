document.addEventListener ('DOMContentLoaded', () => {

    const artistsData = [
        { name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpg' },
        { name: 'Jorge & Mateus', image: './img/artista-jorge-mateus.jpg' },
        { name: 'Zé Neto & Cristiano', image: './img/artista-ze-neto.jpg' },
        { name: 'Gusttavo Lima', image: './img/artista-gustavo-limma.jpg' },
        { name: 'Luan Santana', image: './img/artista-luan-santana.jpg' },
        { name: 'Matheus & Kauan', image: './img/artista-mateus-kauan.jpg' },
        ];
    
    const albumsData = [
        { name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: './img/album-white-noise.jpg' },
        { name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: './img/album-ceu-explica.jpg' },
        { name: 'Nada como um dia após o outro', artist: 'Racionais',image: './img/album-vida-loka.jpg' },
        { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image:'./img/album-hit-me.jpg' },
        { name: 'CAJU', artist: 'Liniker', image: './img/album-caju.jpg' },
        { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image:'./img/album-escandalo.jpg' },
        ];

        const artistGrid = document.querySelector('.artists-grid')
        const albumsGrind = document.querySelector('.albums-grid')

        artistsData.forEach( artist => {
          const  artistCard = document.createElement('div')
          artistCard.classList.add('artists-card')

          artistCard.innerHTML = `
          <img src="${artist.image}" alt="imagem do ${artist.name}">
          <div>
             <h3>${artist.name}</h3>
             <p>artista</p> 
          </div>
          
          `
            artistGrid.appendChild(artistCard)

        })

        albumsData.forEach( albums => {
            const  albumsCard = document.createElement('div')
            albumsCard.classList.add('albums-card')
  
            albumsCard.innerHTML = `
            <img src="${albums.image}" alt="imagem do ${albums.name}">
            <div>
                <h3>${albums.name}</h3>
                <p>${albums.artist}</p> 
            </div>
            `
            albumsGrind.appendChild(albumsCard)
        })

})
