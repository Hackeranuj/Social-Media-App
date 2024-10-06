import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar';

const Bookmark = () => {
  return (
    
    <SafeAreaView className="px-4 my-6 bg-primary h-full">
      <Text className="text-2xl text-white font-psemibold">Bookmark</Text>
      
    <StatusBar style="light" backgroundColor="#primary" />
    </SafeAreaView>

    
  );
};

export default Bookmark;
