import React from 'react';
import {
  StyleSheet,
  Text,
  View, ScrollView, Platform
} from 'react-native';

import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from "native-base"
import CardComponent from '../CardComponent'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

export default class HomeTab extends React.Component {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="home" style={{ color: tintColor }} />
        )
    }

    render() {
        return (
			<Container style={styles.container} >
			
				<Header style={ styles.androidHeader }>
					<Left><SimpleLineIcons name="camera" style={{paddingLeft: 10, fontSize: 24}} /></Left>
					<Body><Text>Instagram</Text></Body>
					<Right><Icon name="ios-send-outline" style={{paddingRight: 10}} /></Right>
				</Header>
				<Content>
					<View style={{ height: 100 }}>
						<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7 }} >
							<Text style={{ fontWeight: 'bold' }}>Stories</Text>
							<View style={{ flexDirection: 'row', alignItems: 'center' }} >
								<Icon name="ios-play" style={{ fontSize: 14 }} ></Icon>
								<Text style={{ fontWeight: 'bold' }}>&nbsp; Watch All</Text>
							</View>
						</View>
						<View style={{ flex: 3 }} >
							<ScrollView 
								horizontal={true}
								showsHorizontalScrollIndicator={false}
								contentContainerStyle={{ 
									alignItems: 'center',
									paddingStart: 5,
									paddingEnd: 5
								}}
							>
								<Thumbnail 
									style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
									source={ require('../../assets/StoriesHeaderThumbnails/1.jpg') }
								/>
								<Thumbnail 
									style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
									source={ require('../../assets/StoriesHeaderThumbnails/2.png') }
								/>
								<Thumbnail 
									style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
									source={ require('../../assets/StoriesHeaderThumbnails/3.jpg') }
								/>
								<Thumbnail 
									style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
									source={ require('../../assets/StoriesHeaderThumbnails/4.jpg') }
								/>
								<Thumbnail 
									style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
									source={ require('../../assets/StoriesHeaderThumbnails/5.jpg') }
								/>
								<Thumbnail 
									style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
									source={ require('../../assets/StoriesHeaderThumbnails/6.jpg') }
								/>
								<Thumbnail 
									style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
									source={ require('../../assets/StoriesHeaderThumbnails/7.jpeg') }
								/>
								<Thumbnail 
									style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
									source={ require('../../assets/StoriesHeaderThumbnails/8.png') }
								/>
							</ScrollView>

						</View>
					</View>
					<CardComponent imageSource="1" likes="101" />
					<CardComponent imageSource="2" likes="201" />
					<CardComponent imageSource="3" likes="301" />
				</Content>
            </Container>
        );
      }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	androidHeader: {
		...Platform.select({
			android: {
				backgroundColor: 'white',
				borderBottomColor: '#ddd',
				borderBottomWidth: 1,
			}
		})
	}
});