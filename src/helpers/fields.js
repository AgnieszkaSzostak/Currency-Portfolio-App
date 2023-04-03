/* eslint-disable no-useless-escape */
export const fields = [
    {
        label: 'Select currency',
        tag: 'select',
        name: 'currency',
        placeholder: 'currency',
        required: true,
    },
    {
        label: 'Amount',
        tag: 'input',
        type: 'number',
        name: 'amount',
        placeholder: 'amount',
        required: true,
        pattern: '^[0-9]*$',
        error: 'Incorrect amount value'
    },
    {
        label: 'Purchase date',
        tag: 'input',
        type: 'date',
        name: 'purchaseDate',
        placeholder: 'purchaseDate',
        required: true,
        value: "",
        minDate: '2002-01-01',
        pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$',
        error: 'Incorrect date value'
    },
    {
        label: 'Price',
        tag: 'input',
        name: 'price',
        placeholder: 'price',
        required: true,
        pattern: '^[0-9]+(?:[\.][0-9]{2})*$',
        error: 'Incorrect price value'
    },
]

export const walletHeadings = [
    "Currency", "Amount", "Purchase date", "Price", "Current exchange rate", "Current value", "Profit/Loss"
]