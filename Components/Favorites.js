//Components/Favorites.js

import React from 'react'
import { StyleSheet, View} from 'react-native'
import FilmList from "./FilmList";
import {connect} from "react-redux"
import Avatar from "./Avatar";


class Favorites extends React.Component{

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.avatar_container}>
                    <Avatar />
                </View>
            <FilmList
                style={styles.list_film}
                    films={this.props.favoritesFilm}
                    navigation={this.props.navigation}
                    favoriteList={true} //Ici on est dans le cas de la liste des favoris Ce boolen a true permettra d'empêcher de lancer la recherche de plus de film après un scroll lorsqu'on est sur la vue Favoris
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    avatar_container:{
        alignItems: 'center'
    }
})

const mapStateToProps = state => {
    return {
        favoritesFilm: state.toggleFavorite.favoritesFilm
    }
}

export default connect(mapStateToProps)(Favorites);