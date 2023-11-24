import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, ScrollView } from 'react-native';

const ExpenseTracker = () => {
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [incomeSource, setIncomeSource] = useState('');
  const [expenditureAmount, setExpenditureAmount] = useState(0);
  const [expenditureSource, setExpenditureSource] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  const handleAddIncome = () => {
    const newTransaction = {
      type: 'Income',
      amount: parseFloat(incomeAmount),
      source: incomeSource,
    };

    setTransactions([...transactions, newTransaction]);
    setBalance(balance + parseFloat(incomeAmount));
    setIncomeAmount(0);
    setIncomeSource('');
  };

  const handleAddExpenditure = () => {
    const newTransaction = {
      type: 'Expenditure',
      amount: parseFloat(expenditureAmount),
      source: expenditureSource,
    };

    setTransactions([...transactions, newTransaction]);
    setBalance(balance - parseFloat(expenditureAmount));
    setExpenditureAmount(0);
    setExpenditureSource('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Income</Text>
        <TextInput
          style={styles.input}
          placeholder="Amount"
          keyboardType="numeric"
          value={incomeAmount.toString()}
          onChangeText={(text) => setIncomeAmount(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Source"
          value={incomeSource}
          onChangeText={(text) => setIncomeSource(text)}
        />
        <Button title="Add Income" onPress={handleAddIncome} />
      </View>

      <View style={styles.inputContainer}>
        <Text>Expenditure</Text>
        <TextInput
          style={styles.input}
          placeholder="Amount"
          keyboardType="numeric"
          value={expenditureAmount.toString()}
          onChangeText={(text) => setExpenditureAmount(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Source"
          value={expenditureSource}
          onChangeText={(text) => setExpenditureSource(text)}
        />
        <Button title="Add Expenditure" onPress={handleAddExpenditure} />
      </View>

      <Text style={styles.balanceText}>Balance: {balance}</Text>

      <View style={styles.transactionsContainer}>
        <Text style={styles.transactionTitle}>Transactions</Text>
        <FlatList
          data={transactions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={styles.transactionItem}>
              {item.type}: {item.amount} - {item.source}
            </Text>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%', // Added to ensure full width
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: '100%', // Added to ensure full width
  },
  balanceText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  transactionsContainer: {
    marginTop: 20,
    width: '100%', // Added to ensure full width
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transactionItem: {
    fontSize: 14,
  },
});

export default ExpenseTracker;
