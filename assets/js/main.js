import Model from './movies_list/model.js?v2';
import View from './movies_list/view.js?v2';

class Controller {
  constructor(model, view) {
    this.moviesListModel = model
    this.moviesListView = view

    // Bindings
    this.moviesListView.bindSubmit(this.handleSubmit);

  }

  // Handlers 


  handleSubmit = e => {
    const searchField = this.moviesListView.searchField.value;
    console.log('search field value: ', searchField);
  }

}

const App = new Controller(new Model(), new View())