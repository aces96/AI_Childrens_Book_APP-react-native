import React, {useState} from "react";
import { View, StyleSheet } from "react-native";
import { NothingFoundIllustration, ImageCover, StoryTitle, PageComponent } from "../components/book.components/components";
import { useSelector } from "react-redux";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Sound from 'react-native-sound'





export const Book = ()=>{

    const  flipSound = new Sound('page_flip.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + flipSound.getDuration() + 'number of channels: ' + flipSound.getNumberOfChannels());
        // Play the sound with an onEnd callback
      });
      

    const story = useSelector(state=>state.storySlice.story)
    const [step, setStep] = useState(0)

    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            alignItems: 'center',
        },
        topBar: {
            width: '100%',
            height: 60,
            backgroundColor: 'rgba(0,158,255,1)'
        }
    })


    
    const onSwipeLeft = ()=> {
        if(step == 5){
            console.log("max");
        }else {
            flipSound.play((success) => {
                if (success) {
                  console.log('successfully finished playing');
                } else {
                  console.log('playback failed due to audio decoding errors');
                }
              });
            setStep(step+1)
        }
        }

    const onSwipeRight = ()=> {
        if(step == 0){
            console.log("max");
        }else if(step > 0){
            flipSound.play((success) => {
                if (success) {
                console.log('successfully finished playing');
                } else {
                console.log('playback failed due to audio decoding errors');
                }
            });
            setStep(step-1)
        }
        }

    const handleBook = ()=>{
            if(step == 0 ){
                return (
                    <View>
                        <ImageCover /> 
                        <StoryTitle title={story[0]} /> 
                    </View>
                )
            }else {
                return (
                    <PageComponent handleLeft={onSwipeRight} handleRight={onSwipeLeft} /> 
                )
            }
    }




    return (
        <View style={style.container}>
            <View style={style.topBar}>

            </View>

            {story.length == 0 ?
            
            <NothingFoundIllustration /> 
         :  <GestureRecognizer style={{flex: 1, width: '100%', justifyContent: 'center'}} onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight}>
                {handleBook()}
            </GestureRecognizer>}
            
        </View>
    )
}