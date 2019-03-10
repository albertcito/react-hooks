const columnsTable = {
    'id': {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
    },
    'createdAt': {
        title: 'createdAt',
        dataIndex: 'createdAt',
        key: 'createdAt',
    },
    'name': {
        title: 'name',
        dataIndex: 'name',
        key: 'name',
    },
    'email': {
        title: 'email',
        dataIndex: 'email',
        key: 'email',
    }
};

const optionsCheckbox = [
    { label: 'id', value: 'id', disabled: true },
    { label: 'name', value: 'name' },
    { label: 'email', value: 'email' },
    { label: 'createdAt', value: 'createdAt' },
];

const fields = [
  'id',
  'name',
  'email',
  'createdAt',
];

const getColumns = (fields) => {
    const columns = [];
    fields.forEach(column => {
        columns.push(columnsTable[column])
    });
    return columns;
}

const columnsDefault = getColumns(fields);

export {
    columnsTable,
    fields,
    getColumns,
    columnsDefault,
    optionsCheckbox
};