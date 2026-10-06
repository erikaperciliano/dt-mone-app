import { DismissKeyboardView } from "@/Components/DismissKeyboardView";
import { PublicStackParamsList } from "@/routes/PublicRoutes";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

// 💡 Adicionado 'Login' no segundo parâmetro
type LoginScreenNavigationProp = StackNavigationProp<PublicStackParamsList, 'Login'>;

export const Login = () => {
    const navigation = useNavigation<LoginScreenNavigationProp>();

    return (
        <DismissKeyboardView>
            <Text>Tela de Login</Text>
            <TextInput className="bg-gray-500 w-full" />
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text>Registrar</Text>
            </TouchableOpacity>
        </DismissKeyboardView>
    );
};