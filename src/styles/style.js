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
    fontSize:18,
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
  },
  containerButtom: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  containerText: {
    backgroundColor: "#fff",
    borderRadius: 12,
    height: "80%",
    padding: 15,
  },
  titleTerco:{
    color: '#d82622',
    marginBottom: 20,
    fontSize:26,
    fontWeight:'bold',
    fontWeight: '600',
    textAlign:'center',
  },
  containerImage:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  image:{
    marginBottom:30,
    padding:30,
    resizeMode:'contain',
    maxWidth:'100%',
  },

});
