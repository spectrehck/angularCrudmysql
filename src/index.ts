import express, { application, Application } from "express";
import indexRoutes from './routes/indexRoutes';
// import gamesRoutes from './routes/gamesRoutes';


class Server {

    public app: Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000)
    } 
    routes(): void {
    
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port', this.app.get('port'));
        })
    }
}
const server = new Server();
server.start();
