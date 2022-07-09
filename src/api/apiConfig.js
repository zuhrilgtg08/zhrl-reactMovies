const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '6223459d3d7ae9f17de7fd219be9cde4',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;