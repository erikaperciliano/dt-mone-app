import { useBottomSheetContext } from "@/context/bottomsheet.context";
import { colors } from "@/shared/colors";
import { Transaction } from "@/shared/interfaces/transaction";
import { MaterialIcons } from "@expo/vector-icons";
import { FC } from "react";
import { Pressable, View } from "react-native";

interface Params { 
    transaction: Transaction
}

export const LeftAction: FC<Params> = ({ transaction }) => { 
    const { openBottomSheet } = useBottomSheetContext()

    return (
        <Pressable onPress={() => openBottomSheet(<></>, 1)}>
            <View className="h-[140] bg-accent-blue-background-primary w-[80] rounded-l-[6] items-center justify-center">
                <MaterialIcons name="edit" size={30} color={colors.white} />
            </View>
        </Pressable>
    )
}