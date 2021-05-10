import React from 'react';
import { View } from 'react-native';
import Post from '../../components/Post';

const post1 = {
    id: 'p1',
    videoUri: 'https://media.fmkorea.com/files/attach/new2/20210223/486616/21787941/3411727573/3ce8f805cccdef5e27a56a2764130ade.mp4?d',
    user: {
      id: 'u1',
      username: 'coby',
      imageUri: 'https://pds.joins.com/news/component/htmlphoto_mmdata/202003/04/0e56edfd-f992-4eef-9ce5-ae86bfd5a379.jpg',
    },
    description: 'hahahah oh boy @borat',
    songName: 'NF - The search',
    songImage: 'https://i.ytimg.com/vi/IHNzOHi8sJs/maxresdefault.jpg',
    likes: 123,
    comments: 12,
    shares: 44,
};

const Home = () => {
    return (
        <View>
            <Post post={post1} />
        </View>
    );
};

export default Home;