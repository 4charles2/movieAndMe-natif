import React from 'react'
import {View} from 'react-native'

import {getFilmsFromApiSortLastDate} from "../API/TMDBApi";

import FilmList from "./FilmList";
import DisplayLoading from "./DisplayLoading";

class News extends React.Component {
    constructor(props) {
        super(props);
        this.page = 0;
        this.totalPages = 0;
        this.state = {
            isLoading: false,
            films: []
        }
    }

    componentDidMount() {
        this._loadFilms();
    }

    _loadFilms = () => {
        this.setState({isLoading: true})
        getFilmsFromApiSortLastDate(this.page + 1).then((data) => {
            this.page = data.page;
            this.totalPages = data.totalPages;
            this.setState(
                {
                    isLoading: false,
                    films: [...this.state.films, ...data.results]
                })
        }).catch(data => console.error(data));
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <FilmList
                    films={this.state.films}
                    navigation={this.props.navigation}
                    loadFilms={this._loadFilms}
                    page={this.page}
                    totalPages={this.totalPages}
                    favoriteList={false}
                />
                {this.state.isLoading ? <DisplayLoading/> : null}
            </View>
        )
    }
}

export default News;