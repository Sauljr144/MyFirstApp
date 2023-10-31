import { View, Image } from 'react-native'

const image = require("../assets/puppyGS.jpeg");


const ImageComponent = () => {
  return (
    <>
         <View style={{ flex: 1 }}>
          <Image source={image} style={{ height: 700, width: 500 }} />
        </View>
    </>
  )
}

export default ImageComponent