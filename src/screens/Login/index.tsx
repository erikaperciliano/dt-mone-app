import { PublicStackParamsList } from "@/routes/PublicRoutes";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, TouchableOpacity } from "react-native";

// 💡 Adicionado 'Login' no segundo parâmetro
type LoginScreenNavigationProp = StackNavigationProp<PublicStackParamsList, 'Login'>;

export const Login = () => {
    const navigation = useNavigation<LoginScreenNavigationProp>();

    return (
        <View className="flex-1 items-center justify-center">
            <Text>Tela de Login</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text>Registrar</Text>
            </TouchableOpacity>
        </View>
    );
};