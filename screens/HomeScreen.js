import React from 'react';
import { SocialIcon } from 'react-native-elements';
import { Button } from 'react-native-elements';
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

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  
	openFacebook = () => {
		Linking.canOpenURL("fb://profile/vinay.sikervar").then(supported => {
			if (supported) {
			  return Linking.openURL("fb://profile/vinay.sikervar");
			} else {
			  return Linking.openURL("https://www.facebook.com/vinay.sikervar");
			}
		})
	}
	
	openTwitter = () => {
		Linking.openURL("https://twitter.com/VinaySikarwar");
	}
	
	openLinkedin = () => {
		Linking.openURL("https://www.linkedin.com/in/vinay-sikarwar-7252b774/");
	}
	
	openGithub = () => {
		Linking.openURL("https://github.com/vinaysikarwar");
	}
	
	shareToWhatsApp = (text) => {
	 Linking.openURL('whatsapp://send?phone=+917835810043');
	}
	
	getMagentoCertificationLink = (text) =>{
		Linking.openURL('https://u.magento.com/certification/directory/dev/1381032/');
	}
	
	getDownloadResumeLink = (text) => {
		Linking.openURL('http://profile.vinaysikarwar.in/user/index/downloadResume/key/UzJCkJtGd3WinQIw');
	}

  render() {
    return (
		
		<View style={styles.container}>
			
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
			<View style={styles.getStartedContainer}>
				<Image
					  source={
						require('../assets/images/mypic.jpg')
					  }
					  style={styles.pic}
					/>
					<Text style={styles.welcomeText}>
						Vinay Sikarwar
					</Text>
					<MonoText style={styles.subText}>Magento Certified Developer</MonoText>
					<Text style={styles.shortDesc}>
						Having more than 10 years of experience in developing websites in php, wordpress,magento and frameworks like cakephp, phalcon and zend. I am skilled in creating soap services,web services for android apps, other websites and frameworks.Having ability to create magento modules and themes. A very good knowledge of git and svn for version control.
					</Text>
					<View style={styles.socialIcons,{flexDirection: 'row'}}>
						<SocialIcon type='facebook' onPress={this.openFacebook} style={styles.Icons} />
						<SocialIcon type='twitter' onPress={this.openTwitter} style={styles.Icons} />
						<SocialIcon type='linkedin' onPress={this.openLinkedin} style={styles.Icons} />
						<SocialIcon type='github' onPress={this.openGithub} style={styles.Icons} />
						<SocialIcon type='whatsapp' onPress={this.shareToWhatsApp} style={styles.Icons,styles.whatsapp} />
					</View>	
					<View style={styles.topSpacing}>
						<Button
						   title='Magento Certification Link'
						   onPress={ this.getMagentoCertificationLink }  
						   onLongPress={ this.getMagentoCertificationLink }
							 buttonStyle={{
								backgroundColor: "#ff5722",
							  }}
							  containerStyle={{ marginTop: 20 }}
						  />
					</View>					
					<View style={styles.topSpacing}>
						<Button
						   title='Download Updated Resume'
						   onPress={ this.getDownloadResumeLink }  
						   onLongPress={ this.getDownloadResumeLink }
							 buttonStyle={{
								backgroundColor: "#ff5722",
								
							  }}
							  containerStyle={{ marginTop: 20,paddingTop:20 }}
						  />
					</View>
					
			</View>
		</ScrollView>
			
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );
      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
	baseText: {
    fontFamily: 'Roboto',
  },
  profilePic: {
	
  },
  pic: {
	width:400,
	height:350,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
	paddingLeft: 10,
	paddingRight: 10,
  },
  welcomeText: {
	paddingLeft: 10,
	fontWeight: 'bold',
	fontFamily: 'Roboto',
	fontSize: 25,
	textAlign: 'center'
  },
  subText: {
	justifyContent: 'center',
	fontSize: 20,
	textAlign: 'center',
	left: 0,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
	marginRight: 20,
	paddingTop:10,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
	width: 500,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  shortDesc: {
	textAlign:'center'
  },
  socialIcons: {
	 alignItems: 'center',
	justifyContent: 'center',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
	textAlign:'center',
	paddingBottom:10
  },
  Icons: {
    width: 60,
    height: 60,
    borderRadius: 60/2,
  },
  whatsapp: {
	backgroundColor: '#47ad5d',
	width:60,
	height:60,
	borderRadius:60/2
  },
  buttonLink:{
	backgroundColor: '#ff5722',
	borderRadius:2
  },
  topSpacing: {
	marginTop: 10,
	paddingTop: 10
  }
});
