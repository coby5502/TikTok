import React, {useState} from 'react';
import { View, Text,TouchableWithoutFeedback } from 'react-native';

import Video from 'react-native-video';
import styles from './styles';

const Post = () => {

    const [paused, setPaused] = useState(false);

    const onPlayPausePress = () => {
        setPaused(!paused);
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
                <Video
                    source={{uri: 'https://media.fmkorea.com/files/attach/new2/20210223/486616/21787941/3411727573/3ce8f805cccdef5e27a56a2764130ade.mp4?d' }}
                    style={styles.video}
                    onError={(e) => console.log(e)}
                    resizeMode={'cover'}
                    repeat={true}
                    paused={paused}
                />
            </TouchableWithoutFeedback>
        </View>
    );
};

export default Post;