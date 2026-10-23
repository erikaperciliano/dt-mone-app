import { TransactionTypes } from '@/shared/enums/transaction-types';
import { View } from 'react-native'
import { FC } from 'react'
import { colors } from '@/shared/colors';
import { MaterialIcons } from '@expo/vector-icons';

type TransactionCardType = TransactionTypes | 'total'

interface Props { 
    type:TransactionCardType
    amount: number
}

interface IconsData { 
    name: keyof typeof MaterialIcons.glyphMap
    color: string
}

const ICONS: Record<TransactionCardType, IconsData> = {
    [TransactionTypes.REVENUE]: {
        color: colors['accent-brand-light'],
        name: 'arrow-circle-up'
    },
      [TransactionTypes.EXPENSE]: {
        color: colors['accent-red'],
        name: 'arrow-circle-down'
    },
    total: {
        name: 'attach-money',
        color: colors.white
    }
}

export const TransactionCard: FC<Props> = ({  amount, type }) => {
    const IconData = ICONS[type]

    return (
        <View>
            <MaterialIcons name={ICONS[type].name} size={26} color={IconData.color}/>
        </View>
    )
}