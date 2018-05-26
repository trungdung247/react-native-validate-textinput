# react-native-validate-textinput
Validate TextInput custom for React native (same Redux form)
![validate-textinput](https://github.com/trungdung247/react-native-validate-textinput/blob/master/login_screen.png)
## Installation
$ npm install react-native-validate-textinput --save
## Usage

```javascript
'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} = React;

import ValidateTextInput from "react-native-validate-textinput";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueInput: ""
    };
  }
  
  _onProcessTextChange(currentText){
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

  render() {
    return (
        <View style={styles.container}>
            <Image source={background} style={styles.shadow}>
              <View style={styles.bg}>
                <ValidateTextInput
                  errorItem={this.state.errorText}
                  typeInput={"email"}
                  // styleIcon={{
                  //   color: 'red'
                  // }}
                  onChangeTextInput={(text) => {
                    this._onProcessTextChange(text);
                    this.setState({
                      valueInput: text
                    })
                  }}
                  hiddenIcon={false}
                  typeErrorView={"bottomInput"}
                  hiddenIconErrorView={true}
                />

                <ValidateTextInput
                  errorItem={this.state.errorText}
                  typeInput={"password"}
                  // styleIcon={{
                  //   color: 'red'
                  // }}
                  onChangeTextInput={(text) => {
                    this.setState({
                      valueInput: text
                    })
                  }}
                  hiddenIcon={false}
                />

                <Button
                  style={styles.btn}
                  onPress={() => this.props.navigation.navigate("Home")}
                >
                  <Text>Login</Text>
                </Button>
              </View>
            </Image>
        </View>
    );
  }
}

export default Login;
```

## Properties
*Note: Other properties will be passed down to underlying component.*

| Prop | Description | Type | Default |
|---|---|---|---|
|**`autoFocus`**|If true, focuses the input on componentDidMount. | bool |`false`|
|**`autoCapitalize`**|Can tell TextInput to automatically capitalize certain characters. | bool |`false`|
|**`editable`**|If false, text is not editable. The default value is true. | bool |`false`|
|**`secureTextEntry`**|If true, the text input obscures the text entered so that sensitive text like passwords stay secure. The default value is false. Does not work with 'multiline={true}'. | bool |`false`|
|**`underlineColorAndroid`**|The color of the TextInput underline.  | color |`transparent`|
|**`placeholder`**|The string that will be rendered before text input has been entered. | string |`Enter text...`|
|**`placeholderTextColor`**|The text color of the placeholder string.  | color |`gray`|
|**`multiline`**|If true, the text input obscures the text entered so that sensitive text like passwords stay secure. The default value is false. Does not work with 'multiline={true}'. | bool |`true`|
|**`maxLength`**|Limits the maximum number of characters that can be entered. Use this instead of implementing the logic in JS to avoid flicker. | int |*None*|
|**`disableFullscreenUI`**|When false, if there is a small amount of space available around a text input (e.g. landscape orientation on a phone), the OS may choose to have the user edit the text inside of a full screen text input mode. When true, this feature is disabled and users will always edit the text directly inside of the text input.  | bool |`false`|
|**`allowFontScaling`**|Specifies whether fonts should scale to respect Text Size accessibility settings. | bool |`true`|
|**`autoCorrect`**|If false, disables auto-correct. | bool |`true`|
|**`caretHidden`**|If true, caret is hidden. | bool |`false`|
|**`enablesReturnKeyAutomatically`**|If true, the keyboard disables the return key when there is no text and automatically enables it when there is text. | bool |`false`|
|**`typeInput`**|Type TextInput. Value valid: `email`, `password`, `default` | *None* |`email`|
|**`hiddenIcon`**|If true, hide icon in custom view of TextInput. | bool |`false`|
|**`renderIcon`**|Custom Icon view for view input. | func |*None*|
|**`onChangeText`**|Change value text input, setState value text input. | func |*None*|
|**`backgroundColorErrorView`**|Change background color for error validate view. | color |`#DA0967`|
|**`colorErrorText`**|Change color error text. | color |`#fff`|
|**`customValidate`**|If true, custom validate value text input. | bool |`false`|
|**`typeErrorView`**|Type error view when validate text input. Vaue valid: `design`, `bottomInput` . | string |`design`|
|**`sizeErrorText`**|Change fontSize error text. | number |`13`|
|**`hiddenIconErrorView`**|If true, hide icon in error view. | bool |`false`|

## Style props
### Custom style input
- Custom style TextInput default
```javascript
styleInputDefault: {
        color: '#000',
        height: 40,
        fontSize: 14,
        // width: WINDOW_WIDTH,
        backgroundColor: 'transparent',
        paddingLeft: 10
 },
 ```
- Custom style TextInput email
```javascript
styleInputEmail: {
      color: '#000',
      height: 40,
      fontSize: 14,
      // width: WINDOW_WIDTH,
      backgroundColor: 'transparent',
      paddingLeft: 10
 },
 ```
- Custom style TextInput password
```javascript
styleInputPassword: {
      color: '#000',
      height: 40,
      fontSize: 14,
      // width: WINDOW_WIDTH,
      backgroundColor: 'transparent',
      paddingLeft: 10
 },
 ```
 ### Custom style item
 ```javascript
 styleItem: { 
        alignItems: "center",   
        borderWidth: 1,
        backgroundColor: '#ededed',
        borderRadius: 5,
 },
 ```
 ### Custom style icon
 ```javascript
 styleIcon: { 
      color: '#000',
      fontSize: 22, 
      backgroundColor: "transparent", 
      alignItems: "center",
      marginRight: 5,
      marginLeft: 5
 },
 ```

