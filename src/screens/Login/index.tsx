import { DismissKeyboardView } from "@/Components/DismissKeyboardView";
import { PublicStackParamsList } from "@/routes/PublicRoutes";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

// 💡 Adicionado 'Login' no segundo parâmetro
type LoginScreenNavigationProp = StackNavigationProp<PublicStackParamsList, 'Login'>;

export const Login = () => {
    return (
        <DismissKeyboardView>
           <View className="flex-1 w-[82%] self-center"></View>
        </DismissKeyboardView>
    );
};