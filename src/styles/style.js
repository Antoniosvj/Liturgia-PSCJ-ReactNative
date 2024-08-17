import { StyleSheet } from'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#f5f5f5',
    padding:15,
  },
  text: {
    color: '#000',
    fontSize:16,
    padding:8,
    textAlign:'justify',
  },
  title: {
    color: '#d82622',
    marginTop:20,
    marginBottom: 20,
    fontSize:36,
    fontWeight: 'bold',
  },
  subtitle:{
    color: '#d82622',
    marginBottom: 20,
    fontSize:18,
    fontWeight: '600',
    borderColor:'#d82622',
    borderBottomWidth:2,
  },
  menuButton:{
    color:'#d82622',
  },
  button:{
    backgroundColor:'#D9D9D9',
    borderColor:'#d82622',
    borderWidth:2,
    borderRadius:12,
    marginBottom:20,
    padding:10,
    fontSize:16,
    fontWeight:'500',
    textAlign:'center',
  }
});
