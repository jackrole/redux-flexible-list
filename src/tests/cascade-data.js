const rows = [
    [
        'Detail_1', 'D00001', 'some', 'rude', 'method',
        'item-1', 'item-2', 'item-3', 'item-4', 'item-5', 
        'item-6', 'item-7', 'item-8', 'item-9', 'item-10',
    ],
    [
        'Detail_2', 'D00001', 'some', 'rude', 'method',
        'item-1', 'item-2', 'item-3', 'item-4', 'item-5', 
        'item-6', 'item-7', 'item-8', 'item-9', 'item-10',
    ],
    [
        'Detail_3', 'D00001', 'some', 'rude', 'method',
        'item-1', 'item-2', 'item-3', 'item-4', 'item-5', 
        'item-6', 'item-7', 'item-8', 'item-9', 'item-10',
    ],
    {
        primary: [
            'Detail_4', 'D00001', 'some', 'rude', 'method',
            'item-1', 'item-2', 'item-3', 'item-4', 'item-5', 
            'item-6', 'item-7', 'item-8', 'item-9', 'item-10',
        ],
        details: [
            [
                'Detail_4_1', 'D00001', 'some', 'rude', 'method',
                'item-1', 'item-2', 'item-3', 'item-4', 'item-5', 
                'item-6', 'item-7', 'item-8', 'item-9', 'item-10',
            ],
            [
                'Detail_4_2', 'D00001', 'some', 'rude', 'method',
                'item-1', 'item-2', 'item-3', 'item-4', 'item-5', 
                'item-6', 'item-7', 'item-8', 'item-9', 'item-10',
            ],
        ],
    },
    {
        primary: [
            'Detail_5', 'D00001', 'some', 'rude', 'method',
            'item-1', 'item-2', 'item-3', 'item-4', 'item-5', 
            'item-6', 'item-7', 'item-8', 'item-9', 'item-10',
        ],
        details: {
            header: [
                '交易流水号', '合同号', '项目代码', '项目名称', '规格型号', 
            ],
            rows: [
                [
                    'Detail_5_1', 'D00001', 'some', 'rude', 'method',
                ],
                [
                    'Detail_5_2', 'D00001', 'some', 'rude', 'method',
                ],
            ],
        }
    },
]

const rowsWithDetail = [
    {
        primary: [
            'PRIMARY001', 'D00001', 'SOME', 'RUDE', 'RUSH', 
            'ITEM1-1', 'ITEM1-2', 'ITEM1-3', 'ITEM1-4', 'ITEM1-5', 
            'ITEM1-6', 'ITEM1-7', 'ITEM1-8', 'ITEM1-9', 'ITEM1-10',
        ],
        details: rows,
    },
    {
        primary: [
            'PRIMARY002', 'D00002', 'SOME', 'RUDE', 'RUSH', 
            'ITEM1-1', 'ITEM1-2_1, ITEM1-2_2 , ITEM1-2_3, ITEM1-2_4, ITEM1-2_5, ITEM1-2_6 , ITEM1-2_7, ITEM1-2_8.', 
            'ITEM1-3, ITEM1-3, ITEM1-3, ITEM1-3', 'ITEM1-4', 'ITEM1-5', 
            'ITEM1-6', 'ITEM1-7', 'ITEM1-8', 'ITEM1-9', 'ITEM1-10',
        ],
        details: rows,
    },
    [
        'PRIMARY002', 'D00002', 'SOME', 'RUDE', 'RUSH', 
        'ITEM1-1', 'ITEM1-2', 'ITEM1-3', 'ITEM1-4', 'ITEM1-5', 
        'ITEM1-6', 'ITEM1-7', 'ITEM1-8', 'ITEM1-9', 'ITEM1-10',
    ],
    {
        primary: [
            'PRIMARY002', 'D00002', 'SOME', 'RUDE', 'RUSH', 
            'ITEM1-1', 'ITEM1-2', 'ITEM1-3', 'ITEM1-4', 'ITEM1-5', 
            'ITEM1-6', 'ITEM1-7', 'ITEM1-8', 'ITEM1-9', 'ITEM1-10',
        ],
        details: rows,
    },
    [
        'PRIMARY002', 'D00002', 'SOME', 'RUDE', 'RUSH', 
        'ITEM1-1', 'ITEM1-2', 'ITEM1-3', 'ITEM1-4', 'ITEM1-5', 
        'ITEM1-6', 'ITEM1-7', 'ITEM1-8', 'ITEM1-9', 'ITEM1-10',
    ],
]

const table = {
    header: [
        '交易流水号', '合同号', '项目代码', '项目名称', '规格型号', 
        '单位', '数量', '单价', '金额', '税率', 
        '税额', '合计', '折扣', '折扣税额', '是否含税',
    ],
    rows: rowsWithDetail,
    preExpander: true,
}

export default table