import React from 'react';
import { Text, View, SectionList } from 'react-native';



export default StatesApp = () => {
  return(
<View style={{flex: 1, paddingTop: 22}}>
    <SectionList
      sections={[{title: 'A', data: ['Alabama', 'Alaska', 'Arkansas', 'Arizona']},
      {title: 'C', data: ['California', 'Colorado', 'Conecticut']},
      {title: 'D', data: ['Delaware']},
      {title: 'F', data: ['Florida']},
      {title: 'G', data: ['Georgia']},
      {title: 'H', data: ['Hawaii']}

      ]}//you can continue adding sections

      renderItem={({item}) => <Text style= {{padding: 10, fontSize: 20, height: 50}}> {item}</Text>}
      renderSectionHeader={({section}) => <Text style={{paddingTop: 4, paddingLeft: 12, fontSize: 30,
        paddingRight: 5, paddingBottom: 4, height: 50, fontWeight: 'bold', backgroundColor: '#9FA8DA'}} >
          {section.title}
        </Text>}
        keyExtractor={(item,index) =>index}
    />


</View>

  );// end of return statement
}



