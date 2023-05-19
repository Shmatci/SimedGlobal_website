import React from 'react'
import { Table } from '@nextui-org/react'

const Parameters = () => {
    const columns = [
        {
            key: "category",
            label: "CATEGORY",
        },
        {
            key: "test_item",
            label: "TEST ITEM",
        },
        {
            key: "specimen_type",
            label: "SPECIMEN TYPE",
        },
        {
            key: "sample_volume",
            label: "SAMPLE VOLUME",
        },
        {
            key: "reaction_time",
            label: "REACTION TIME",
        },
        {
            key: "compatible_devices",
            label: "COMPATIBLE DEVICES",
        },
        {
            key: "measuring_range",
            label: "MEASURING RANGE",
        },
    ];

    const rows = [
        {
            key: "1",
            category: "COVID-19",
            test_item: "IgM/IgG",
            specimen_type: "S/P/WB/C",
            sample_volume: "5 µl",
            reaction_time: "15 min", 
            compatible_devices: "LS-1100/LS-2100/LS-4000",
            measuring_range: "IgM: 0.01~10.00mIU/mL",
            measuring_range: "IgG: 0.01~10.00mIU/mL",
        },
        {
            key: "1",
            category: "COVID-19",
            test_item: "IgM/IgG",
            specimen_type: "S/P/WB/C",
            sample_volume: "5 µl",
            reaction_time: "15 min", 
            compatible_devices: "LS-1100/LS-2100/LS-4000",
            measuring_range: "IgM: 0.01~10.00mIU/mL",
            measuring_range: "IgG: 0.01~10.00mIU/mL",
        },
        {
            key: "1",
            category: "COVID-19",
            test_item: "IgM/IgG",
            specimen_type: "S/P/WB/C",
            sample_volume: "5 µl",
            reaction_time: "15 min", 
            compatible_devices: "LS-1100/LS-2100/LS-4000",
            measuring_range: "IgM: 0.01~10.00mIU/mL",
            measuring_range: "IgG: 0.01~10.00mIU/mL",
        }
    ]


  return (
    <Table
        aria-label="Table with dynamic content"
        css={{
            height: "auto",
            minWidth: "100%",
        }}
    >
        <Table.Header columns={columns}>
            {(columns) => (
                <Table.Column key={columns.key}>{columns.label}</Table.Column>
            )}
        </Table.Header>
        <Table.Body items={rows}>
            {(item) => (
                <Table.Row key={item.key}>
                    {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
                </Table.Row>
            )}            
        </Table.Body>
    </Table>
  )
}

export default Parameters