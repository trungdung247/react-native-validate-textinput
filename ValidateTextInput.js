import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Platform,
  View,
  ListView,
  StatusBar,
  TextInput,
  Dimensions,
  Text
} from 'react-native';

import {
    Content,
    Form,
    Item,
    Input,
    Col,
    Row,
    Grid,
    Icon,
    Button
  } from "native-base";

const STATUS_BAR_HEIGHT = (Platform.OS === 'ios' ? 20 : StatusBar.currentHeight)
const WINDOW_WIDTH = Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height
const WINDOW_HEIGHT_NO_STATUS_BAR = WINDOW_HEIGHT - STATUS_BAR_HEIGHT
// const TYPE_EMAIL = "email";
// const TYPE_PASSWORD = "password";

// export const type = {
//   TYPE_EMAIL, TYPE_PASSWORD
// };

export default class ValidateTextInput extends Component {

  static propTypes = {
    backgroundTextInput: PropTypes.string,
    autoCapitalize: PropTypes.bool,
    autoFocus: PropTypes.bool,
    editable: PropTypes.bool,
    secureTextEntry: PropTypes.bool,
    underlineColorAndroid: PropTypes.string,
    placeholder: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    multiline: PropTypes.bool,
    numberOfLines: PropTypes.number,
    maxLength: PropTypes.number,
    disableFullscreenUI: PropTypes.bool,
    allowFontScaling: PropTypes.bool,
    autoCorrect: PropTypes.bool,
    caretHidden: PropTypes.bool,
    enablesReturnKeyAutomatically: PropTypes.bool,
    styleInputDefault: PropTypes.style,
    styleInputEmail: PropTypes.style,
    styleInputPassword: PropTypes.style,
    styleItem: PropTypes.style,
    styleIcon: PropTypes.style,
    errorItem: PropTypes.string,
    onChange: PropTypes.func,
    valueInput: PropTypes.string,
    onChangeText: PropTypes.func,
    typeInput: PropTypes.string,
    hiddenIcon: PropTypes.bool,
    renderIcon: PropTypes.func,
  }

  static defaultProps = {
    backgroundTextInput: 'transparent',
    autoCapitalize: false,
    autoFocus: false,
    editable: true,
    secureTextEntry: false,
    underlineColorAndroid: 'transparent',
    placeholder: 'Nhập nội dung...',
    placeholderTextColor: "gray",
    multiline: true, 
    maxLength: 10000,
    disableFullscreenUI: false,
    allowFontScaling: true,
    autoCorrect: true,
    caretHidden: false,
    enablesReturnKeyAutomatically: false,
    styleInputDefault: {
        color: '#000',
        height: 40,
        fontSize: 14,
        // width: WINDOW_WIDTH,
        backgroundColor: 'transparent',
        paddingLeft: 10
    },

    styleInputEmail: {
      color: '#000',
      height: 40,
      fontSize: 14,
      // width: WINDOW_WIDTH,
      backgroundColor: 'transparent',
      paddingLeft: 10
    },

    styleInputPassword: {
      color: '#000',
      height: 40,
      fontSize: 14,
      // width: WINDOW_WIDTH,
      backgroundColor: 'transparent',
      paddingLeft: 10
    },

    styleItem: { 
        alignItems: "center",   
        borderWidth: 1,
        backgroundColor: '#ededed',
        borderRadius: 5
    },

    styleIcon: { 
      color: '#000',
      fontSize: 22, 
      backgroundColor: "transparent", 
      alignItems: "center",
      marginRight: 5,
      marginLeft: 5
    },

    errorItem: '',
    valueInput: '',
    typeInput: 'default',
    hiddenIcon: true
  }

  constructor(props) {
    super(props)
    this.state = {
      errorText: "",
      valueInput: "",
      focus: this.props.autoFocus
    }
  }

  _renderIcon(){
    return(
      <View 
        style={{
          backgroundColor: 'transparent', 
          width: 50, 
          height: 40, 
          justifyContent: 'center', 
          alignItems: 'center',
          borderRightWidth: 1,
          borderRightColor: 'gray'
        }}
      >
        <Icon 
            name={
              this.props.typeInput == "email" ? 
                "ios-mail" 
              : 
                this.props.typeInput == "password" ? 
                  "ios-lock" 
                : 
                  "ios-person"
            } 
            style={this.props.styleIcon} 
        />
      </View>
    );
  }

  _onProcessTextChange(currentText){
    if(this.props.typeInput == "email"){
      if(!currentText){
        this.setState({
          errorText: 'Không được để trống'
        })
      } else if(!currentText.includes("@") && currentText){
        this.setState({
          errorText: 'Phải chứa ký tự @'
        })
      } else if(currentText.length < 8 && currentText){
        this.setState({
          errorText: 'Phải lớn hơn 8 ký tự'
        })
      }
      else{
        this.setState({
          errorText: ''
        })
      }
    }

    if(this.props.typeInput == "password"){
      if(!currentText){
        this.setState({
          errorText: 'Không được để trống'
        })
      } else if(currentText.length > 12 && currentText){
        this.setState({
          errorText: 'Mật khẩu quá dài'
        })
      } else if(currentText.length < 5 && currentText.length > 0){
        this.setState({
          errorText: 'Mật khẩu quá ngắn'
        })
      }
      else{
        this.setState({
          errorText: ''
        })
      }
    }

    if(this.props.typeInput == "default"){
      if(!currentText){
        this.setState({
          errorText: 'Không được để trống'
        })
      } 
      else{
        this.setState({
          errorText: ''
        })
      }
    }
  }
  
  componentDidMount() {
    
  }

  onFocus(){
    this.setState({
        focus: true
    })
  }

  onBlur(){
    this.setState({
      focus: false
    })
  }

  render() {
    return (
      <View style={{flexDirection: 'column'}}>
        <View  
            style={[this.props.styleItem, {
              borderColor: 
                this.state.errorText ? 
                  "#DA0967"
                : 
                  '#E3E2E2', 
                  height: 60,
                  width: WINDOW_WIDTH - 20,
                  marginBottom: 15,
                  flexDirection: 'row', 
            }]}
        >
            {this.props.hiddenIcon ?
              this.props.renderIcon ?
                this.props.renderIcon
              :
                this._renderIcon()   
            :
              null}
            
              <Input   
                  autoCapitalize={this.props.autoCapitalize}
                  value={this.state.valueInput}
                  underlineColorAndroid={this.props.underlineColorAndroid}
                  autoFocus={this.props.autoFocus}
                  editable={this.props.editable}
                  returnKeyType='next' 
                  onBlur={() => this.onBlur() }
                  onFocus={() => this.onFocus() }
                  secureTextEntry={
                    this.props.secureTextEntry ? 
                      this.props.secureTextEntry 
                    : 
                      this.props.typeInput == "password" ? 
                        true 
                      : 
                        false 
                  }
                  placeholder={this.props.placeholder} 
                  placeholderTextColor={this.props.placeholderTextColor}
                  multiline={this.props.multiline}
                  numberOfLines={this.props.numberOfLines}
                  disableFullscreenUI={this.props.disableFullscreenUI}
                  allowFontScaling={this.props.allowFontScaling}
                  autoCorrect={this.props.autoCorrect}
                  caretHidden={this.props.caretHidden}
                  enablesReturnKeyAutomatically={this.props.enablesReturnKeyAutomatically}
                  style={
                    this.props.typeInput == "email" ?
                      this.props.styleInputEmail
                    :
                      this.props.typeInput == "password" ?
                        this.props.styleInputPassword
                      :
                        this.props.styleInputDefault
                  }
                  onChange={this.props.onChange} 
                  onChangeText={(text) => {                  
                    this._onProcessTextChange(text);
                    this.setState({
                      valueInput: text
                    })

                    this.props.onChangeTextInput && this.props.onChangeTextInput(text)
                  }} 
              />
              {this.state.errorText ? 
                <Icon active style={{ color: "#DA0967", fontSize: 18, marginRight: 15 }} name="md-alert" />
              : 
                null
              }
        </View>

        {this.state.errorText ? 
          this.state.focus ?
            <View style={{}}>
              <View 
                  style={{ 
                    top: -20,
                    right: 10, 
                    position:'absolute', 
                    zIndex: 998, 
                    borderColor: "transparent", 
                    borderBottomWidth: 0,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: "#DA0967",
                    padding: 10,
                    borderRadius: 5
                  }}
              >
                  <Icon active style={{ color: "#fff", fontSize: 16, marginRight: 5 }} name="md-alert" />
                  <Text style={{ fontSize: 14, color: "#fff", marginRight: 5 }}>{this.state.errorText}</Text>
              </View>
              <View style={styles.talkBubbleTriangle} />
            </View>
          : null
        : 
          null
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // GridView
  group: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'hidden'
  },

  plhIcon: {
    color: 'white',
    fontSize: 20, 
    backgroundColor: "transparent", 
    alignItems: "center"
  },

  talkBubbleTriangle: {
    position: 'absolute',
    bottom: 20,
    right: 30,
    // top: 26,
    width: 0,
    height: 0,
    borderLeftColor: 'transparent',
    borderLeftWidth: 18,
    borderBottomWidth: 18,
    borderBottomColor: '#DA0967',
    borderRightWidth: 0,
    borderRightColor: 'transparent'
  }
//   input: {
//     color: 'white',
//     height: this.props.inputHeight,
//     fontSize: 14,
//     width: this.props.inputWidth
//   },
})
