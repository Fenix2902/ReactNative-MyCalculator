import { StyleSheet, Text,View } from "react-native"

export function Banner(props){
    return(
<>
<View>
    <Text>{props.title}</Text>
    <Text>{props.subtitle}</Text>
</View>
</>
    )
}