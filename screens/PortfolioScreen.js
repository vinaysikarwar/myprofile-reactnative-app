import React from 'react';
import { Button } from 'react-native-elements';
import GridView from 'react-native-super-grid';
import { SuperGridSectionList } from 'react-native-super-grid';
import { Container, Content,Header, DeckSwiper, Card, CardItem, Thumbnail, Left,Right, Body } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
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
    title: 'Portfolio',
  };

  render() {
  
	
    return (
	
		<SuperGridSectionList
			  itemDimension={400}
			  sections={[
				{
				  title: 'Magento 2',
				  data: [
					{ name: 'Faviana', url: 'https://www.faviana.com/',src:require('../assets/images/faviana-logo.png'),technology: 'Magento2' },
					{ name: 'Mono Lithic Power', url: 'https://www.monolithicpower.com/',src:require("../assets/images/monolithic-power.png"),technology: 'Magento2' },
					{ name: 'Cucina & Amore', url: 'https://www.cucinaandamore.com/',src:require("../assets/images/cucina.png"),technology: 'Magento2' },
					{ name: 'Versatables', url: 'https://versatables.com/',src:require("../assets/images/VersaTablesLogo.jpg"),technology: 'Magento2' },
					{ name: 'Red Fox Fashion', url: 'https://redfoxfashion.co.uk/',src:require("../assets/images/redfoxfashion.jpg"),technology: 'Magento2' },
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
							<Text style={styles.itemCode}>{item.url}</Text>
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
});
