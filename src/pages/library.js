import React from 'reactn';
import books from '../books';
import Autosuggest from 'react-autosuggest';
import { Scrollbars } from 'react-custom-scrollbars';
import 'react-alice-carousel/lib/alice-carousel.css'
import ContactsLibrary from "../elements/library/contactsLibrary";
import PhrasesCarousel from "../elements/library/phrasesCarousel";
import Navbar from "../ui/navbar";

const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : books.library.filter(lang =>
        lang.title.toLowerCase().slice(0, inputLength) === inputValue
    );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (

    <div className="row">

    </div>

);

class Library extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestions: [],
            height: '0',
            selected: false,
            bookChoosed: {
                id:"",
                title:"",
                author:"",
                editor:"",
                genre:"",
                date:"",
                position:"",
                aviable:"",
            }
        };


    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
        if (newValue === '') {
            this.setState({
                suggestions: [],
                height: '0',
                selected: false,
                bookChoosed: {
                    id:"",
                    title:"",
                    author:"",
                    editor:"",
                    genre:"",
                    date:"",
                    position:"",
                    aviable:"",
                },
            });
        }
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value),
            height: '450px'
        });
    };


    selectedTrue(value) {
        this.setState({
            selected: true,
            bookChoosed: {
                id: value.id,
                title: value.title,
                author: value.author,
                editor: value.editor,
                genre: value.genre,
                date: value.date,
                position: value.position,
                aviable: value.aviable,
            }
        });

    }

    onSuggestionsClearRequested() {
        
    }


    render() {

        const { value, suggestions } = this.state;

        const inputProps = {
            placeholder: 'Cerca un libro',
            value,
            onChange: this.onChange,
        };

        const renderInputComponent = inputProps => (
            <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-search"/></span>
                    </div>
                    <input {...inputProps} className="form-control input-group-lg"/>
                </div>
            </div>
        );

        return (
            <div>

                <Navbar/>

                <div className="section section-signup">

                    <div>
                        <div className="squares square-1"></div>
                        <div className="squares square-2"></div>



                        <div className="container">

                            <div className="row justify-content-center">

                                <PhrasesCarousel/>

                                <div className="col-md-3">
                                    <div className="form-group">
                                        <Autosuggest
                                            suggestions={suggestions}
                                            renderInputComponent={renderInputComponent}
                                            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                            getSuggestionValue={getSuggestionValue}
                                            renderSuggestion={renderSuggestion}
                                            inputProps={inputProps}
                                            className="form-control"
                                            theme={{
                                                suggestionsContainer: {
                                                    listStyleType: "none"
                                                },
                                                suggestionsContainerOpen: {
                                                    listStyleType: "none"
                                                },
                                                suggestionsList: {
                                                    listStyleType: "none"
                                                }
                                            }}
                                        />



                                    </div>
                                </div>

                                <div className="col-md-5">
                                    <div className="card">
                                        <div className="card-header">

                                        </div>
                                        <div className="card-body">

                                            <div>
                                                <Scrollbars style={{height: this.state.height}}>
                                                    {this.state.suggestions.slice(0,5).map((value1, i) => (
                                                        <div key={i} className="blockquote blockquote-info">
                                                            <a href="#/" onClick={() => (
                                                                this.selectedTrue(value1)
                                                            )} >
                                                                <blockquote>
                                                                    <h4 key={value1.id}>Titolo:</h4>
                                                                    <h3 className="text-info">{value1.title}</h3>
                                                                    <h4>Author: </h4>
                                                                    <h3 className="text-info">{value1.author}</h3>
                                                                </blockquote>
                                                            </a>

                                                        </div>


                                                    ))}
                                                </Scrollbars>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                                {this.state.selected && <div className="col-md-4" id="sushi">

                                    <div className="card">
                                        <div className="card-header">

                                        </div>
                                        <div className="card-body">


                                            <div className="container">
                                                <div className="row justify-content-center">

                                                    <div className="col-md-6">

                                                        <h3 style={{color: '#FE881C'}}>Titolo:</h3>
                                                        <h4>{this.state.bookChoosed.title}</h4>

                                                        <h3 style={{color: '#FE881C'}}>Autore:</h3>
                                                        <h4>{this.state.bookChoosed.author}</h4>

                                                        <h3 style={{color: '#FE881C'}}>Editore:</h3>
                                                        <h4>{this.state.bookChoosed.editor}</h4>

                                                        <h3 style={{color: '#FE881C'}}>Genere:</h3>
                                                        <h4>{this.state.bookChoosed.genre}</h4>

                                                    </div>

                                                    <div className="col-md-6">

                                                        <h3 style={{color: '#FE881C'}}>Data:</h3>
                                                        <h4>{this.state.bookChoosed.date}</h4>

                                                        <h3 style={{color: '#FE881C'}}>Posizione:</h3>
                                                        <h4>{this.state.bookChoosed.position}</h4>

                                                        <h3 style={{color: '#FE881C'}}>Disponibilità:</h3>
                                                        <h4>
                                                            {this.state.bookChoosed.aviable === '1' &&
                                                            <i className="fas fa-times" style={{color: 'red'}}/>}
                                                            {this.state.bookChoosed.aviable === '0' &&
                                                            <i className="fas fa-check" style={{color: 'green'}}/>}
                                                        </h4>

                                                    </div>


                                                </div>
                                            </div>

                                        </div>


                                    </div>


                                </div>}

                            </div>


                        </div>


                    </div>

                </div>

                <ContactsLibrary/>


            </div>







        );
    }
}

export default Library;