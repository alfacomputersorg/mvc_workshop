export class Controller{
  view;
  model;
  constructor(_view,_model){
    this.view=_view;
    this.model=_model;
  }

  get View(){
    return this.view;
  }

  get Model(){
    return this.model;
  }
}
