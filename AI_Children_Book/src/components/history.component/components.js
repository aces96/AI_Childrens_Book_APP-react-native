import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useEffect, useState } from "react";
import { getStoriesHistory } from "../../assets/storage/storage";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';




export const HistoryStories = ()=>{

    const [history, setHistory] = useState([])

    const style=StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white',
            elevation: 5,
            shadowColor: 'rgba(0,0,0,0.7)',
        },
        item: {
            width: '100%',
            height: 120,
            borderWidth: 1,
            borderColor: '#009EFF',
            borderRadius: 10,
            elevation: 5,
            shadowColor: '#009EFF',
            backgroundColor: 'white',
            flexDirection: 'column',
            justifyContent: 'space-around',
            marginVertical: 10
        },


    })

    const getData = async()=>{
        const info = await getStoriesHistory()

        
        setHistory(info.content)
        console.log('info',info.content.length)
    }
    useEffect(()=>{
        getData()
    },[])



    return (
        <View style={style.container}>

            {history.map((e)=>{
                return(
                    <View style={style.item}>
                        <Text style={{fontSize: 13, textAlign: 'center', color: 'black'}}>
                            {e[0].substring(0,41)+" ..."}
                        </Text>
                        <Text style={{fontSize: 13, color: 'black'}}>
                            {e[1].substring(0,47)+" ..."}
                        </Text>

                        <Text style={{fontSize: 13, color: 'black'}}>
                            {'created at:'+e[2]}
                        </Text>

                        <TouchableOpacity>
                            <MaterialIcons style={{position: 'absolute', bottom: 10, right: 10}} name="delete" size={30} color='#FF5868'/>
                        </TouchableOpacity>
                </View>
                )
            })}
        </View>
    )
}



{/* <View style={style.item}>
<View style={style.itemContent}>
    <View style={style.storyTitleCont}>
        <Text style={style.storyTitle}>
            this is the place for story title
        </Text>
    </View>
    <View style={style.storyTitleCont1}>
        <Text style={style.storyTitle}>
            23/01/2023 08:08pm
        </Text>
    </View>
</View>

<View style={style.buttonCont}>
    <TouchableOpacity style={style.button}>
        <Text style={style.text}>
            Open
        </Text>
    </TouchableOpacity>
</View>

</View> */}