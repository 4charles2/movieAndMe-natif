import React from 'react'
import {View, StyleSheet} from 'react-native'

import {getFilmsFromApiSortLastDate} from "../API/TMDBApi";

import FilmList from "./FilmList";
import DisplayLoading from "./DisplayLoading";

class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            films: []
        }
    }

    _loadFilms = () => {
        this.setState({isLoading: true})
        getFilmsFromApiSortLastDate()
            .then((data) => {
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
                    favoriteList={false}
                />
                {this.state.isLoading ? <DisplayLoading/> : null}
            </View>
        )
    }
}

export default News;