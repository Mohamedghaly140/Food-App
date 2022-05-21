import { Image } from "react-native";

const BASE_PATH = "../../assets/images";

export default {
  burger: Image.resolveAssetSource(require(`${BASE_PATH}/burger.png`)),
  cake: Image.resolveAssetSource(require(`${BASE_PATH}/cake.png`)),
  pasta: Image.resolveAssetSource(require(`${BASE_PATH}/pasta.png`)),
  pizza: Image.resolveAssetSource(require(`${BASE_PATH}/pizza.png`)),
  smoothies: Image.resolveAssetSource(require(`${BASE_PATH}/smoothies.png`)),
  steak: Image.resolveAssetSource(require(`${BASE_PATH}/steak.png`)),
};
