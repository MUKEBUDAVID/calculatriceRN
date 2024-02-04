import { StyleSheet, Text, View,ScrollView,FlatList,Image,SectionList,Platform } from 'react-native'
import React from 'react'

export default function Test() {
  return (
    <View style={styles.container}>
       <ScrollView >
       
       <Image source={ require('./assets/favicon.png') } style={styles.icon} />

     <Text style={styles.text} >david mukebu les jours  </Text>
     <Text style={styles.text} >david mukebu les jours  </Text>
     <Text style={styles.text} >david mukebu les jours  </Text>
     <Text style={styles.text} >david mukebu les jours  </Text>
     <Text style={styles.text} >{Platform.Version}</Text>
     </ScrollView>

     <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />


<SectionList
        sections={[
          {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
          {
            title: 'J',
            data: [
              'Jackson',
              'James',
              'Jillian',
              'Jimmy',
              'Joel',
              'John',
              'Julie',
            ],
          },
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title} </Text>
        )}
        keyExtractor={item => `basicListEntry-${item}`}
      />


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:40,
        
      
       
      },
    
      text:{
     color: '#eaeaea',
     fontSize: 20,
     fontFamily: 'sans-serif',
      fontWeight: 'bold',
      },
    
      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
      icon:{
        width:100,
        height:100
      }
})