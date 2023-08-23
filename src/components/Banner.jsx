import {Text, View, Image } from "react-native";
import { styles, myimage } from "../../assets/styles/Styles1";

export function Banner(props) {
  return (
    <Image
      style={{ width: '100%', height: '20%', resizeMode: 'stretch' }}
      source={require(`../../assets/images/${props.image}`)}
      />
    // <View>

    // <Text>{props.title}</Text>
    // <Text>{props.subtitle}</Text>
    // </View>
    )
}
