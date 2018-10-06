import React from 'react';
import { Button } from 'react-native-elements';
import { Table, Row, Rows } from 'react-native-table-component';
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
    title: 'Summary',
  };
  

  render() {
  
	
	state = {
      tableHead: ['Summary',''],
      tableData: [
        ['Magento Consultant','Zoho CRM Expert'],
        ['Experience in Managing AWS Cloud front','ERP Integration(Magento Salesforce integration, ZOHO CRM Integration)'],
        ['Proficient in Third party API Integration of XML / JSON based web services','Hands on experience in giving Training on various PHP Topics'],
        ['Good knowledge of working with bootstrap css','More than 8 Years of IT Experience in developing web based applications using PHP, MySQL, HTML, CSS, and JavaScript'],
        ['Working with B2B & Marketplace Projects','Worked extensively on Application Development and Logic Design'],
        ['Working experience of Optimization and Debugging','Worked on Solr Search'],
        ['Html and css designer and developer(UI/UX Expert)','Migration from Magento 1 to Magento2'],
        ['Migration from BigCommerce to Magento','Migration from wooCommerce to Magento'],
      ]
    };
	
	technical = {
      tableHead: [''],
      tableData: [
        ['Programming Languages','	PHP 5.5+, PHP 7+'],
        ['Scripting Languages','Jquery, SOAP/WSDL, REST, JSON, HTML, and CSS'],
        ['Modelling Language','Agile Development'],
        ['DBMS','MySQL, and MongoDB'],
        ['Frameworks','Phalcon, Cakephp, Codeignitor, Zend'],
        ['Opensource','Magento, Wordpress, Joomla, PhalSOM'],
      ]
    };
	
	speciality = {
      tableHead: [''],
      tableData: [
        ['MAGENTO CUSTOMIZATION & EXTENSION DEVELOPMENT','Expert in creating magento extensions and customizations'],
        ['ANDROID & IOS MOBILE APPLICATIONS FOR MAGENTO','Have a quick solution for Android and IOS mobile application for magento'],
        ['PHALCON DEVELOPER','Expert in creating websites in phalcon framework'],
        ['WORDPRESS DEVELOPER','Ability in creating themes and plugins for wordpress'],
        ['React Native Expert','Expertise in creating mobile apps in React Native'],
      ]
    };
	
	experience = {
      tableHead: [''],
      tableData: [
        ['MAGENTO CONSULTANT | TEAM LEAD','Web Technology Codes Software Services LLP(April 2016 - Present)'],
        ['SENIOR SOFTWARE ENGINEER','OSSCube Ltd(NOIDA, INDIA - Feb 2014 – April 2016)'],
        ['SOFTWARE ENGINEER','Grapes Software(Malviya Nagar, DELHI INDIA- Oct 2013 – Feb 2014)'],
        ['SOFTWARE ENGINEER','Techinflo Software Serivces LLP(LUCKNOW, INDIA - Dec 2011 – Oct 2013)'],
        ['SOFTWARE ENGINEER','TWA- The Web Artist(LUCKNOW, INDIA - June 2011 – Dec 2011)'],
      ]
    };
	
	education = {
      tableHead: [''],
      tableData: [
        ['MCA (MASTER OF COMPUTER APPLICATION)','SRMCEM – GBTU University, Lucknow(2008 - 2011)'],
        ['BSC(GRADUATION IN MATHEMATICS)','Kanpur University(2005 - 2008)'],
        ['Intermediate','UP Board(2005)'],
        ['Highschool','UP Board(2003)'],
      ]
    };
	
	
    return (
		<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
			<View style={styles.getStartedContainer}>
				 <Text style={styles.title}>Summary</Text>
				<Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} >
				  <Rows data={state.tableData} textStyle={styles.text}/>
				</Table>
			</View>
			<View style={styles.getStartedContainer}>
				<Text style={styles.title}>Technical Skills</Text>
				 
				 <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} >
				  
				  <Rows data={technical.tableData} textStyle={styles.text}/>
				</Table>
			</View>	
			<View style={styles.getStartedContainer}>
				<Text style={styles.title}>My Specialities</Text>
				 
				 <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} >
				  
				  <Rows data={speciality.tableData} textStyle={styles.text}/>
				</Table>
			</View>	
			<View style={styles.getStartedContainer}>
				<Text style={styles.title}>Work Experience</Text>
				 
				 <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} >
				  
				  <Rows data={experience.tableData} textStyle={styles.text}/>
				</Table>
			</View>	
			<View style={styles.getStartedContainer}>
				<Text style={styles.title}>EDUCATION</Text>
				 
				 <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} >
				  
				  <Rows data={education.tableData} textStyle={styles.text}/>
				</Table>
			</View>	
			<View style={styles.getStartedContainer}>
				<Text style={styles.title}></Text>
			</View>
		  
		  
	  </ScrollView>
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
});
