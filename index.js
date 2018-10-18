import React from 'react';
import {AppRegistry, StyleSheet, Text, View, DatePickerIOS} from 'react-native';
import Timeline from 'react-native-timeline-listview'

class RNHighScores extends React.Component {
constructor(props){
    super(props)
    this.state = { chosenDate: new Date() };

    this.setDate = this.setDate.bind(this);
    var contents = this.props['appointments'].map((appointment) => (
      appointment.value
    ));
    this.data = [
      {time: '09:00', title: 'Archery Training', description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ', circleColor: '#009688',lineColor:'#009688'},
      {time: '10:45', title: 'Play Badminton', description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.'},
      {time: '12:00', title: 'Eat something', description: contents},
      {time: '14:00', title: 'Play Tennis', description: 'Team sport played between two teams of eleven players with a spherical ball. ',lineColor:'#009688'},
      {time: '16:30', title: 'Go to Fitness center', description: 'Look out for the Best Gym & Fitness Centers around me :)', circleColor: '#009688'}
    ]
  } 
  
  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }

  render() {
    //'rgb(45,156,219)'
    
    return (
      <View style={styles.container}>
        <Timeline 
          style={styles.list}
          data={this.data}
          circleSize={20}
          circleColor='rgb(45,156,219)'
          lineColor='rgb(45,156,219)'
          timeContainerStyle={{minWidth:52, marginTop: -5}}
          timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:5}
          }}
          innerCircle={'dot'}
        />
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
		paddingTop:65,
    backgroundColor:'white'
  },
  list: {
    flex: 1,
    marginTop:20,
  },
});


// Module name
AppRegistry.registerComponent('RNHighScores', () => RNHighScores);