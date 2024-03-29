import React, {useEffect, useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Illustration from '../../assets/images/nothingFound.svg'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";
import { StringSlice } from "../../assets/textSlice";







export const NothingFoundIllustration = ()=>{

    const navigation = useNavigation()

    const style=StyleSheet.create({
        container: {
            width: '90%',
            height: '60%',
            alignSelf: 'center',
            alignItems: 'center',
            marginVertical: 100
        },
        button: {
            width: '90%',
            height: 50,
            backgroundColor: '#009EFF',
            borderRadius: 15,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 15
        }
    })

    return(
        <View style={style.container}>
            <Illustration width={200} height={200}/>
            <Text style={{fontSize: 25, fontFamily: 'Roboto-Medium', color: 'black', marginVertical: 15}}>
                Nothing to display
            </Text>
            <Text style={{fontSize: 14, fontFamily: 'Roboto', color: 'black', textAlign: 'center'}}>
                try generating a new story or open a saved one
            </Text>

            <TouchableOpacity onPress={()=>navigation.navigate('story')} style={style.button}>
                <Text style={{fontSize: 20, fontFamily: 'Roboto-Medium', color: 'white'}}>
                    Generate story
                </Text>
            </TouchableOpacity>
        </View>
    )
}



export const ImageCover = (props)=>{

    const style = StyleSheet.create({
        container: {
            width:  '100%',
            height: '90%',
            alignSelf: 'center',
            borderWidth: 2,
            borderColor: '#009EFF',
            elevation: 10,
            shadowColor: '#009EFF',
            marginVertical: 15,
            opacity: 0.4,
            backgroundColor: 'rgb(0,0,0)'
        },
        image: {
            width: '100%',
            height: '100%',
            resizeMode: 'stretch'
        }
    })


    return (
        <View style={style.container}>
            <Image style={style.image} source={{uri: props.image}}/>
        </View>
    )
}


export const StoryTitle = (props)=>{
    const style = StyleSheet.create({
        title: {
            fontSize: 25,
            fontFamily: 'ACaslonPro-BoldItalic',
            color: 'white',
            textAlign: 'center'
        },
        container: {
            width: 320,
            height: 150,
            alignSelf: 'center',
            position: 'absolute',
            zIndex: 4,
            alignItems: 'center',
            top: 200,
            borderWidth: 2,
            borderColor: '#009EFF',
            backgroundColor: 'rgba(0,158,255,0.2)',
            elevation: 10,
            shadowColor: 'white'
        }

    })




    return(
        <View style={style.container}>
            <Text style={style.title}>
                {props.title}
            </Text>
        </View>
    ) 
}


export const PageComponent = (props)=>{

    const [count, setCount] = useState(0)
    const [story, setStory] = useState([])

    useEffect(()=>{

        console.log('story', props.story.data);
        let substring  


        const data  = StringSlice(props.story[1])
        substring = data
        setStory(data)


        console.log("heeeeeeeeere", substring);

        // var subStrLength = Math.ceil(props.story[1].length / 5);
        // var subStr1 = props.story[1].slice(0, subStrLength);
        // substring.push(subStr1)
        // var subStr2 = props.story[1].slice(subStrLength, subStrLength * 2);
        // substring.push(subStr2)
        // var subStr3 = props.story[1].slice(subStrLength * 2, subStrLength * 3);
        // substring.push(subStr3)
        // var subStr4 = props.story[1].slice(subStrLength * 3, subStrLength * 4);
        // substring.push(subStr4)

        // var subStr5 = props.story[1].slice(subStrLength * 4);
        // substring.push(subStr5)


        // setStory(substring)

        // console.log(substring[0]);
        
        // let data =  [];
        // console.log(textLength);


        // for (let i = 0; i < props.story[1].length; i += textLength.toFixed(0)) {
        //     data.push(props.story[1].slice(i, i + textLength.toFixed(0)));
        // }
        // console.log('heeeeeeeeeeeere',props.story[1].split('.'));
    },[])
    


    const style = StyleSheet.create({
        container: {
            width:'100%',
            height: '90%',
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 20
        },
        button: {
            width: '12%',
            height: '100%',
            backgroundColor: 'rgba(0,158,255,0)',
            justifyContent: 'center',
            alignItems: 'center'
        },
        page: {
            width: '76%',
            height: '80%',
            paddingHorizontal: 2,
            paddingVertical: 2,
            alignItems: 'center',
            justifyContent: 'center',
            
        },
        content: {
            width: '100%',
            height: '100%',
            zIndex: 5,
            position: 'absolute',
            flexDirection: 'row',
            alignItems: 'center'
        }
    })

    return (
        <View style={style.container} >
            <WoodFrame image={props.image}/>
            <View style={style.content}>
                <TouchableOpacity onPress={()=>props.handleLeft()} style={style.button}>
                    <MaterialIcons color={'#009EFF'} size={50} name="chevron-left"/>
                </TouchableOpacity>

                <View style={style.page}>
                    <Text style={{fontSize: 20, color: 'white', textAlign: 'center', lineHeight: 30, fontFamily: 'Solitreo-Regular'}}>
                        {story[props.count-1]}
                    </Text>
                </View>

                <TouchableOpacity onPress={()=>props.handleRight()} style={style.button}>
                    <MaterialIcons color={'#009EFF'} size={50} name="chevron-right"/>
                </TouchableOpacity>

            </View>
        </View>
    )
}


export const WoodFrame = (props)=>{
    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            zIndex: 1
        }
    })

    return( 
        <View style={style.container}>
            <Image style={{width: '100%', height: '100%'}} source={{uri: props.image}}/>
            {/* <Image style={{position: 'absolute', zIndex: 1, width: 100, height: 100}} source={require('../../assets/images/elephant.png')}/>
            <Image style={{position: 'absolute', zIndex: 1, width: 100, height: 100, right: 10}} source={require('../../assets/images/cat.png')}/>
            <Image style={{position: 'absolute', zIndex: 1, width: 100, height: 100, right: 10, bottom: 20}} source={require('../../assets/images/girrafeHeart.png')}/>
            <Image style={{position: 'absolute', zIndex: 1, width: 100, height: 110, left: 10, bottom: 15}} source={require('../../assets/images/girrafe.png')}/> */}
        </View>
    )

}




