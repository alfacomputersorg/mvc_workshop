import {Controller} from "./core/index" ;


class Main{
	title="";
	constructor(_title){
		this.title=_title;
	}

	run(){
		console.log("Application is Running");
		let controller=new Controller({model:"model"},{view:"view"});
		console.log(controller.Model);
		console.log(controller.View);
		console.log(controller);
	}
}

const main=new Main("Application");
main.run();
