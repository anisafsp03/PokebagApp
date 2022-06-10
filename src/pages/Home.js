import React, { useEffect } from "react"
import { Text, View, Button, FlatList, ScrollView } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import styles from "../asset/styles"
import { fetchPokemons } from "../store/action"
import PokemonCard from "../component/card"


export default function Home() {
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemons)
    const next = useSelector(state => state.next)
    

    useEffect(async () => {
        await dispatch(fetchPokemons(next))
        return(
            console.log('catch pokemon')
        )
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.text__title}>PokeBag</Text>
            <FlatList
                data={pokemons}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(pokemon) => String(pokemon.id)}
                renderItem={({ item }) => <PokemonCard pokemon={item} />}
                contentContainerStyle={styles.flatListContentContainer}
            />

            <View style={{ padding: 5, marginTop: 10 }}>
                <Button title="Show More" color={"gray"} onPress={() => dispatch(fetchPokemons(next))} />
            </View>
        </View>
    )
}