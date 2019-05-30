import express, { application, Application } from "express";

class Server {

    public app: Application;
    constructor(){
        this.app = express();
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
new Server();
