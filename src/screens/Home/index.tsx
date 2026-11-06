import { useAuthContext } from "@/context/auth.context";
import { useTransactionContext } from "@/context/transaction.context";
import { useErrorHandler } from "@/shared/hooks/useErrorHandler";
import { useEffect } from "react";
import { FlatList, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListHeader } from "./ListHeader";
import { TransactionCard } from "./TransactionCard";

export const Home = () => { 
    const { handleLogout } = useAuthContext()
    const { fetchCategories, fetchTransactions, transactions, refreshTransactions, loading, loadMoreTransactions } = useTransactionContext()
    const { handleError } = useErrorHandler()

    const handleFetchCategories = async () => { 
        try {
            await fetchCategories()
        } catch (error) { 
            handleError(error, 'Falha ao buscar as categorias')
        }
    }

    useEffect(() => { 
        (async () => { 
            await Promise.all([handleFetchCategories(), await fetchTransactions({ page: 1 }) ])
        })()
    },[])

    return (
        <SafeAreaView className="flex-1 bg-background-secondary">
            <FlatList
                className="bg-background-secondary"
                ListHeaderComponent={ListHeader}
                data={transactions}
                keyExtractor={({ id }) => `transaction-${id}`}
                renderItem={({ item }) => <TransactionCard transaction={item} />}
                refreshControl={<RefreshControl refreshing={loading} onRefresh={refreshTransactions}/>}
                onEndReached={loadMoreTransactions}
                onEndReachedThreshold={0.5}
            />
        </SafeAreaView>
    )
}