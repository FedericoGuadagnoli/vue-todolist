const app = Vue.createApp({
    data() {
        return {
            tasks: [
                { text: 'Installare Elden Ring', done : true},
                { text: 'Ottimizzare la resa grafica in game nelle impostazioni del menù', done : true},
                { text: 'Fare un gameplay di prova per monitorare i consumi e le temp della CPU e della GPU', done : true},
                { text: 'Iniziare finalmente a giocare', done : true},
                { text: 'Sconfiggere Malenia', done : false},
                { text: 'Completare Elden Ring', done : false},
            ]
        }
    }









});

app.mount('#root');