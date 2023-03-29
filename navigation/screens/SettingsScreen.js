import * as React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

export default function SettingsScreen({ navigation }) {
    
    return (
        <ScrollView style={{}}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text
                    onPress={() => navigation.navigate('Home')}
                        style={{ fontSize: 26, fontWeight: 'bold', color: 'black', marginTop: 10 }}>Profile</Text>
                <View style= {{display:"flex",justifyContent:"space-around",margin:18,}}>
                    <View>
                        <Image style={{width:160, height:160, borderRadius: 80}}
                        source = {{uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}}/>
                    </View>
                    <View> 
                        <View style={{display: "flex", justifyContent: "space-between", width:"110%"}}>
                            <Text>John Doe</Text> 
                            <Text>New York, NY</Text> 
                            <Text>Weight:190 lbs</Text>
                            <Text>Height: 6 feet, 0 inches</Text>
                        </View>
                        <View> 
                            <Text>Friends</Text>
                            <Text>You currently have no friends.</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>  
    );
}
