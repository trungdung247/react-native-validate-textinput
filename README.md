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

  render() {
    return (
      <Container>
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
                    this.setState({
                      valueInput: text
                    })
                  }}
                  // hiddenIcon={false}
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
                  // hiddenIcon={false}
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
      </Container>
    );
  }
}

export default Login;
```

