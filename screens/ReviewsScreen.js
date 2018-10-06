import React from 'react';
import { Button } from 'react-native-elements';
import GridView from 'react-native-super-grid';
import { SuperGridSectionList } from 'react-native-super-grid';
import { Container, Content,Header, DeckSwiper, Card, CardItem, Thumbnail, Left,Right, Body } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import StarRating from 'react-native-star-rating';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Client Reviews',
  };
  
  constructor(props) {
    super(props);
    this.state = {
      starCount: 5
    };
  }
 
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
  
	
    return (
	
		<SuperGridSectionList
			  itemDimension={400}
			  sections={[
				{
				  title: 'Client Reviews',
				  data: [
					{ name: 'David Radovanovic', url: 'https://www.rsci.com/',src:require('../assets/images/rsci.png'), review: "Vinay is a no-nonsense programmer. He has worked on several complex Magento projects with me and I'm always pleased that it goes so smoothly. Being burned by incompetent coders so many times, I get agita whenever I have to search for new talent. Alka-Seltzer isn't needed when Vinay is performing the task at hand." },
					{ name: 'Frank LaMark', url: 'http://www.cabinetmania.com/',src:require("../assets/images/cabinet-mania.png"),review: "Vinay is extremely professional and very quick to handle any task I throw at him. I have been working with Vinay for over 2 years now and he is always easy to get a hold of and trouble shoots all my issues with out failure. I highly recommend !" },
					{ name: 'Sourav Lodha', url: 'https://www.kuberbox.com/',src:require("../assets/images/kuberbox.png"),review: 'Vinay has been my go-to contact for any small fix or up gradation job for KuberBox and each time he has been able to provide a top-notch solution in quick time. He can be trusted with any Magento related work and he will deliver. I wish him the best.' },
					{ name: 'John Z.', url: 'keraladelight.com',src:require("../assets/images/kdtreelogo.png"),review: 'An expert professional in Magento with an in-depth knowledge in web building and management. Very friendly and responds promptly to any questions or concerns. Vinay build an API for our company and did an excellent job working in a timely manner and finishing the task on time. He still manages our website and currently assisting in developing a new website and look forward to continue a long term relationship. I definitely recommend Vinay for any Magento related task. Thanks Vinay!' },
				  ]
				}
			  ]}
			  style={styles.gridView}
			  renderItem={({ item }) => (
				<View style={[styles.itemContainer,{flexDirection: 'row'}]}>
					<Left>
						<Image
						
						  source={
							item.src
						  }
						  style={styles.pic}
						/>
					</Left>
					<Body>
						<View style={styles.portInfo}>
							<Text style={styles.itemName}>{item.name}</Text>
							<StarRating
								disabled={true}
								starSize={20}
								style={[styles.myStarStyle]}
								maxStars={5}
								rating={this.state.starCount}
								fullStarColor={'#ffcc03'}
								selectedStar={(rating) => this.onStarRatingPress(rating)}
							  />
							<Text style={styles.itemCode}>{item.url}</Text>
							<Text style={styles.itemCode}>{item.review}</Text>
						</View>
					</Body>
				</View>
			  )}
			  renderSectionHeader={({ section }) => (
				<Text style={styles.welcomeText}>{section.title}</Text>
			  )}
			/>
		
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
	paddingBottom:20
  },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6},
  titleText: {    fontSize: 20,    fontWeight: 'bold'  },
  getStartedContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  title:{
	fontSize: 20,
	fontWeight: 'bold',
	paddingTop: 10,
	paddingBottom: 10,
	
  },
  pic:{
	  flex:1,
	  resizeMode:'contain',
	  width:150,
	  height:100,
	  backgroundColor:'#dcdcdc'
  },
  itemContainer: {
	  borderBottomWidth: 1,
	  backgroundColor:'#ffffff',
	  width:400
  },
  portInfo: {
	  alignItems:'flex-start',
	  marginTop:20,
	 // right:20,
	  justifyContent:'flex-start'
  },
  welcomeText: {
	paddingLeft: 10,
	fontWeight: 'bold',
	fontFamily: 'Roboto',
	fontSize: 25,
	textAlign: 'center'
  },
  itemName: {
	  fontWeight: 'bold'
  },
  myStarStyle:{
	  color:'#ffcc03'
  }
});
