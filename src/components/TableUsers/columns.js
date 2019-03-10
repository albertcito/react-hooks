const columnsTable = {
    'idUser': {
        title: 'idUser',
        dataIndex: 'idUser',
        key: 'idUser',
    },
    'idLang': {
        title: 'idLang',
        dataIndex: 'idLang',
        key: 'idLang',
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
    { label: 'idUser', value: 'idUser', disabled: true },
    { label: 'idLang', value: 'idLang' },
    { label: 'name', value: 'name' },
    { label: 'email', value: 'email' },
];

const fields = [
    'idUser',
    'idLang',
    'name',
    'email',
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