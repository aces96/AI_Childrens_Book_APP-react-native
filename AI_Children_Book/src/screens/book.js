import React, {useState} from "react";
import { View, StyleSheet, Text } from "react-native";
import { NothingFoundIllustration, ImageCover, StoryTitle, PageComponent } from "../components/book.components/components";
import { useSelector } from "react-redux";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Sound from 'react-native-sound'





export const Book = ()=>{

    const [count, setCount] = useState(0)


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
            backgroundColor: 'rgba(0,158,255,1)',
            justifyContent: 'center'
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
            setCount(count+1)

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
            setCount(count-1)
        }
        }

    const handleBook = ()=>{
            if(step == 0 ){
                return (
                    <View>
                        <ImageCover image={story[3]} /> 
                        <StoryTitle title={story[0]} /> 
                    </View>
                )
            }else {
                return (
                    <PageComponent image={story[3]} count={count} story={story} handleLeft={onSwipeRight} handleRight={onSwipeLeft} /> 
                )
            }
    }




    return (
        <View style={style.container}>
            <View style={style.topBar}>
                {count > 0 &&
                    <Text style={{fontSize: 20, color: 'white'}}>
                        {count}/5
                    </Text>
                }
            </View>

            {story.length == 0 ?
            
            <NothingFoundIllustration /> 
         :  <GestureRecognizer style={{flex: 1, width: '100%', justifyContent: 'center'}} onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight}>
                {handleBook(story)}
            </GestureRecognizer>}
            
        </View>
    )
}